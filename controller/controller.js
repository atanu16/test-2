const student = require('../models/#');
const teacher = require('../models/#');
const admin = require('../models/#');


//
//  student
//

create_student = async(req,res)=>{
    const uid = req.body.
    const name = req.body.
    const dob  = req.body.
    const course = req.body.
    const password = req.body.
    const gender = req.body.
    const bloodGroup = req.body.
    const admission_year = req.body.
    const address = req.body.
    const email = req.body.
    const marks = req.body.
    const grades = req.body.
    const section = req.body.
    const cgpa = req.body.
    const sgpa = req.body.
    const phone = req.body.
    const semester = req.body.

  const newStudent = new student({
    uid : uid ,
    name : name ,
    dob : dob ,
    course : course ,
    password : password,
    gender : gender ,
    bloodGroup : bloodGroup,
    admission_year : admission_year,
    address : address ,
    email : email ,
    marks : marks ,
    grades : grades ,
    section : section ,
    cgpa : cgpa,
    sgpa : sgpa ,
    phone : phone ,
    semester : semester,
  })

  newStudent.save((err)=>{
          if(!err){
              return res.redirect('Confirmation');
          }else{
              console.log(err);
              return res.redirect("/");
          }
      });
}


//
//  teacher
//


create_teacher = async(req,res)=>{
    const eid = req.body.
    const name = req.body.
    const dob = req.body.
    const spelization = req.body.
    const password = req.body.
    const gender = req.body.
    const bloodGroup = req.body.
    const joiningyear = req.body.
    const address = req.body.
    const email = req.body.
    const marks = req.body.
    const attendance = req.body.
    const grades = req.body.
    const phone = req.body.

    const newTeacher = new teacher({
        eid : eid,  
        name : name, 
        dob : dob,
        spelization : spelization, 
        password : password,
        gender : gender ,
        bloodGroup : bloodGroup , 
        joiningyear : joiningyear , 
        address : address ,
        email : email ,
        marks : marks ,
        attendance : attendance , 
        grades : grades, 
        phone : phone, 
    
    })
  
    newTeacher.save((err)=>{
            if(!err){
                return res.redirect('Confirmation');
            }else{
                console.log(err);
                return res.redirect("/");
            }
        });
  }




  
//
//  teacher
//




create_student = async(req,res)=>{
    const a_id = req.body.
    const password = req.body.

  
    const newAdmin = new admin({
        a_id : a_id ,
        password : password,
    })
  
    newAdmin.save((err)=>{
            if(!err){
                return res.redirect('Confirmation');
            }else{
                console.log(err);
                return res.redirect("/");
            }
        });
  }
  


