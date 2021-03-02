let showhidebtn=document.querySelector('#showhide')
let studentstable=document.querySelector('#studentsTable')
let students = [
    {name:'Aya', age:25,class:4,degree:90},
    {name:"Lody", age:30,class:3,degree:30}
]
let studdentsform=document.querySelector('#addstudent')
let tableheaders=['id','name','age','class','degree','grade','actions']
let actions = [
    {txt:'delete', classes:'btn btn-danger m-1'},
    {txt:'edit', classes:'btn btn-warning m-1'}
]
showhidebtn.addEventListener('click',function(e){
    this.innertext=="show form"? this.innertext="hide form" : this.innertext="show form";
    document.querySelector('#addstudent').classList.toggle('d-none')
})

studdentsform.addEventListener('submit',function(e){
    e.preventDefault()
    let student ={
        name:this.elements.name.value,
        age:this.elements.age.value,
        class:this.elements.class.value,
        degree:this.elements.degree.value
    }
    students.push(student)
    this.reset()
    showhidebtn.innerText="show form"
    this.classList.toggle('d-none')
    showstudents()
})


function addElement(eletype,parent,txt='',classes=''){
   let element=document.createElement(eletype)
    if (txt!='')element.innerText=txt
    if (classes!='') element.classList=classes
    parent.appendChild(element)
    return element
}
let showstudents=function(){
    studentstable.innerText=''
    students.forEach((student,i)=>{
        tr=addElement('tr',studentstable)
        tableheaders.forEach(item=>{
            if (item=="id") txt=i+1
            else if (item=="grade"){
                let marks=student.degree
                if(marks>=85){
                    grade="A"
                }
                else if (marks>=75){
                    grade="B"
                }
                else if (marks>=65){
                    grade="C"
                }
                else if (marks>=50){
                    grade="D"
                }
                else if (marks<50){
                    grade="F"
                }
               txt=grade 
            }
            else txt=student[item]
            td=addElement('td',tr,txt)
        })
    
        actions.forEach(action=>{
            btn = addElement('button', td, action.txt, action.classes)
            btn.addEventListener('click',function(e){
                if(action.txt=='edit') editstudent(i)
                else if(action.txt=='delete') deletestudent(i)
                             
        })
    })
    })
}
function editstudent(index){
    let name= prompt('enter new name')
    let degree= prompt('enter new degree')

    students[index].name = name
    students[index].degree = degree
    showstudents()
}
function deletestudent(index){
    students.splice(index,1)
    showstudents()
}


showstudents()
