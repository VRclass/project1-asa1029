#pragma strict
//var speed = GetComponent.<Rigidbody>().velocity.magnitude;
var speed :float;
var FirstPosition : Vector3;
var car : GameObject;
var audioFile : AudioSource;
var Train : AudioSource;
var StopSoundTime : int;
private var delayTime : float;

function Update () {

	
	if(Time.time > delayTime)
	{
		delayTime = Time.time + 0.5f;
		speed = ((car.transform.position - FirstPosition).magnitude / 500 / Time.deltaTime) ;

		CalculateLastPos();

		audioFile.volume = speed / 30; 
		
		Debug.Log (speed);
		
	}
	
		Train.pitch = speed / 5;
		
		StopSound();
}

function CalculateLastPos(){

	return WaitForSeconds(0.5f);
	FirstPosition = car.transform.position;
	
}

function StopSound(){

	return WaitForSeconds(StopSoundTime);
		Train.Stop();

}
