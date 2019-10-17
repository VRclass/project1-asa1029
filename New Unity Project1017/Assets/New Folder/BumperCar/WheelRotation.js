 var target : Transform; //set this in the inspector!
 
 function Update() {
     var euler = target.rotation.eulerAngles;   //get target's rotation
     var rot = Quaternion.Euler(0, 0, euler.y * -1); //transpose values
     transform.localRotation = rot;                  //set my rotation
     
     //transform.Rotate.z = (transform.rotation.z + euler.y);
 }