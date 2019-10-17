#pragma strict
//var speed = GetComponent.<Rigidbody>().velocity.magnitude;
var speed : float;
var FirstRotation : float;
var car : GameObject;
var audioFile : AudioSource;

private var delayTime : float;

function Start () {

}


function Update () {

	
	if(Time.time > delayTime)
	{
		delayTime = Time.time + 0.2f;
		speed = (car.transform.rotation.y - FirstRotation / (Time.deltaTime) )* 10; 
 	speed= Mathf.Abs(speed);
		CalculateLastPos();

		audioFile.volume = speed; 
		
		Debug.Log (speed);
	}
}

function CalculateLastPos()
{

	return WaitForSeconds(0.2f);
	FirstRotation = car.transform.rotation.y ;
}
