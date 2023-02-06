"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Atice"] = 0] = "Atice";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    constructor(id, title, description, manday, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.manday = manday;
        this.status = status;
    }
}
class ProjectState {
    constructor() {
        this.listeners = [];
        this.projects = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState;
        return this.instance;
    }
    addListeners(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addProject(title, description, manday) {
        const newProject = new Project(Math.random().toString(), title, description, manday, ProjectStatus.Atice);
        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const projectState = ProjectState.getInstance();
function validate(validatableInput) {
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
function autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjDescriptor;
}
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        this.sectionElement = document.importNode(this.templateElement.content, true).firstElementChild;
        this.sectionElement.id = `${this.type}-projects`;
        this.assignedProjects = [];
        projectState.addListeners((project) => {
            this.assignedProjects = project;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();
    }
    renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects`);
        for (const projItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = projItem.title;
            listEl.appendChild(listItem);
        }
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.sectionElement.querySelector('ul').id = listId;
        this.sectionElement.querySelector('h2').textContent = this.type === 'active' ? '実行中のプロジェクト' : '完了プロジェクト';
    }
    attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.sectionElement);
    }
}
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        this.formElement = document.importNode(this.templateElement.content, true).firstElementChild;
        this.formElement.id = 'user-input';
        this.titleElement = this.formElement.querySelector('#title');
        this.descriptionElement = this.formElement.querySelector('#description');
        this.mandayElement = this.formElement.querySelector('#manday');
        this.attach();
        this.configure();
    }
    gatherUserInput() {
        const title = this.titleElement.value;
        const description = this.descriptionElement.value;
        const manday = this.mandayElement.value;
        const titleValidatable = {
            value: title,
            required: true
        };
        const descriptionValidatable = {
            value: description,
            required: true,
            minLength: 5,
        };
        const mandayValidatable = {
            value: +manday,
            required: true,
            min: 1,
            max: 100
        };
        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(mandayValidatable)) {
            alert('入力値が不正です。');
            return;
        }
        return [title, description, +manday];
    }
    clearInput() {
        this.titleElement.value = '';
        this.descriptionElement.value = '';
        this.mandayElement.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, manday] = userInput;
            projectState.addProject(title, description, manday);
            console.log(title, description, manday);
        }
        this.clearInput();
    }
    configure() {
        this.formElement.addEventListener('submit', this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
//# sourceMappingURL=app.js.map