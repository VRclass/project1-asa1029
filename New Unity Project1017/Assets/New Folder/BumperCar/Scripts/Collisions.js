#pragma strict

var Crash : AudioSource;

function Start () {

}

function Update () {


}
function OnCollisionEnter () {
	Crash.Play();
	
}


