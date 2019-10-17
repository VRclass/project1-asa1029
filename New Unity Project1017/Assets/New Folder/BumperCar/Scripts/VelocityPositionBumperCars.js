#pragma strict
//var speed = GetComponent.<Rigidbody>().velocity.magnitude;
var speed :float;
var FirstPosition : Vector3;
var car : GameObject;
var audioFile : AudioSource;
var Train : AudioSource;
var Cheers : AudioSource;
var CheersStop = false;
private var delayTime : float;

function Update () {

	
	if(Time.time > delayTime)
	{
		delayTime = Time.time + 0.2f;
		speed = ((car.transform.position - FirstPosition).magnitude / 500 / Time.deltaTime) ;

		CalculateLastPos();

		audioFile.volume = speed / 30; 
		
		
//		Debug.Log (speed);
		
	}
	

		Train.pitch = speed ;

	if(Time.time >= 79 && Train.isPlaying && CheersStop == false ){
		CheersStop = true;
		Train.Stop();
	
	}

	
	if(Time.time >= 77 && !Cheers.isPlaying ){
	
		Cheers.Play();
	
	}

}

function CalculateLastPos(){

	return WaitForSeconds(0.2f);
	FirstPosition = car.transform.position;
	
}




