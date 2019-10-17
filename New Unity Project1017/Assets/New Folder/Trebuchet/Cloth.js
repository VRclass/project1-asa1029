#pragma strict
var cloth :AudioSource;


function OnCollisionEnter () {

	if(!cloth.isPlaying){
		cloth.Play();
	}

}