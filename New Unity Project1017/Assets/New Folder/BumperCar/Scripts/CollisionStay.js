#pragma strict
var beep : AudioSource;
var StartTime : float;
var CollidCheck : boolean = false;

function Update(){
	if(Time.time - StartTime >= 1 && CollidCheck == true ){
		if(!beep.isPlaying){
			beep.Play();
		}
		
	}

}


/*function OnCollisionStay(){
	if(!beep.isPlaying  ){
		
		Debug.Log("Ay 7aga");
		beep.Play();
	}*/
	
//}
function OnCollisionEnter(){
	CollidCheck = true ;
	StartTime = Time.time;
}

function OnCollisionExit(){
	CollidCheck = false;
}