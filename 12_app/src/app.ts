// Project Type
enum ProjectStatus {
  Atice, Finished
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public manday: number,
    public status: ProjectStatus
  ) {}
}


// 状態管理を行う Project State Management
type Listener = (items: Project[]) => void;
class ProjectState {
  private listeners: Listener[] = [];
  private projects: Project[] = [];
  private static instance: ProjectState
  // シングルトン:1つのインスタンスしか存在しない
  private constructor() {

  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState;
    return this.instance;
  }

  addListeners(listenerFn: Listener) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, manday: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      manday,
      ProjectStatus.Atice
    );

    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      // sliceでコピーを渡す
      listenerFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

// validation
interface Validatable {
  value: string | number;
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}
function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.required.toString().trim().length !== 0;
  }
  if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (validatableInput.min != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (validatableInput.max != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}

// autobind decorator
function autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor)
{
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    }
  }
  return adjDescriptor;
}

/**
 * ProjectList Class
 */
class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  sectionElement: HTMLElement;
  assignedProjects: Project[];
  constructor(private type: 'active' | 'finished') {
    this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    this.sectionElement = document.importNode(this.templateElement.content, true).firstElementChild as HTMLFormElement;
    this.sectionElement.id = `${this.type}-projects`;
    this.assignedProjects = [];

    projectState.addListeners((project: Project[]) => {
      this.assignedProjects = project;
      this.renderProjects();
    });
    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects`)! as HTMLUListElement;
    for (const projItem of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.textContent = projItem.title;
      listEl.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.sectionElement.querySelector('ul')!.id = listId;
    this.sectionElement.querySelector('h2')!.textContent = this.type === 'active' ? '実行中のプロジェクト' : '完了プロジェクト';
  }
  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.sectionElement);
  }
}

// ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  formElement: HTMLFormElement;
  titleElement: HTMLInputElement;
  descriptionElement: HTMLInputElement;
  mandayElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;
    this.formElement = document.importNode(this.templateElement.content, true).firstElementChild as HTMLFormElement;
    this.formElement.id = 'user-input';

    // プロパティの参照
    this.titleElement = this.formElement.querySelector('#title')! as HTMLInputElement;
    this.descriptionElement = this.formElement.querySelector('#description')! as HTMLInputElement;
    this.mandayElement = this.formElement.querySelector('#manday')! as HTMLInputElement;
    this.attach();
    this.configure();
  }

  private gatherUserInput(): [string, string, number] | void {
    const title = this.titleElement.value;
    const description = this.descriptionElement.value;
    const manday = this.mandayElement.value;

    const titleValidatable: Validatable = {
      value: title,
      required: true
    };
    const descriptionValidatable: Validatable = {
      value: description,
      required: true,
      minLength: 5,
    }
    const mandayValidatable: Validatable = {
      value: +manday,
      required: true,
      min: 1,
      max: 100
    }
    if (
      !validate(titleValidatable) || !validate(descriptionValidatable) || !validate(mandayValidatable)
    ) {
      alert('入力値が不正です。');
      return;
    }
    return [title, description, +manday];
  }
  private clearInput() {
    this.titleElement.value = '';
    this.descriptionElement.value = '';
    this.mandayElement.value = '';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, manday] = userInput;
      projectState.addProject(title, description, manday);
      console.log(title, description, manday);
    }
    this.clearInput();
  }

  private configure() {
    this.formElement.addEventListener('submit', this.submitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
  }
}

const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');