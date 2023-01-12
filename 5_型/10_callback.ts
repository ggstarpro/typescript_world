function addAndHandler(n1:number, n2:number, cb: (num:number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandler(10, 20, (result) => {
  console.log(result)
})