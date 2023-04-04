
let students = [];




let submitt = document.getElementById('submit')
submitt.addEventListener('click', () => {
  submit()
})
let ID2
let submit = (data) => {

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let gpa = document.getElementById('gpa').value
  let age = document.getElementById('age').value
  let degree = document.getElementById('degree').value

  let obj
  console.log(ID2)

  if (ID2) {
    obj = { ID: ID2, name, email, gpa, age, degree }
    console.log(obj, 'else')
    let ediData = students.map((el) => {
      return (
        el.ID == ID2 ? obj : el
      )
    })
    console.log(ediData)
    students = ediData

  } else {
    console.log('start')
    ID = students.length + 1
    obj = { ID, name, email, gpa, age, degree }
    students.push(obj)





  }



  console.log(students)

  append(students)


}


let append = () => {
  let tbody = document.getElementById('tbody')
  tbody.innerHTML = null

  students.forEach((el) => {
    let id = document.createElement('td')
    id.innerText = el.ID

    let name = document.createElement('td')
    name.innerText = el.name

    let email = document.createElement('td')
    email.innerText = el.email
    let gpa = document.createElement('td')
    gpa.innerText = el.gpa
    let age = document.createElement('td')
    age.innerText = el.age
    let degree = document.createElement('td')
    degree.innerText = el.degree

    let edit = document.createElement('button')
    edit.innerText = 'Edit'
    // console.log(el)
    edit.addEventListener('click', () => {
      // console.log(el)
      editfunc(el)
    })

    let dlt = document.createElement('button')
    dlt.innerText = 'DELETE'
    // console.log(el)
    dlt.addEventListener('click', () => {
      // console.log(el)
      dltfunc(el.ID)
    })

    function dltfunc(id) {
      let filt = students.filter((elem) => elem.ID !== id)
      students = filt
      append()

    }



    let tr = document.createElement('tr')
    tr.append(id, name, email, gpa, age, degree, edit, dlt)
    tbody.append(tr)

  })


}


function editfunc(el) {
  ID2 = el.ID
  console.log(el)
  let name = document.getElementById('name')
  console.log(name)
  name.value = el.name
  let email = document.getElementById('email').value = el.email
  let gpa = document.getElementById('gpa').value = el.gpa
  let age = document.getElementById('age').value = el.age
  let degree = document.getElementById('degree').value = el.degree

}


append(students)