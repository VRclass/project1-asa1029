 var AudioFile : AudioSource;
 var timer : float;
 //var endTime = 10;
 var StartTime = 0;
 var enterd=false;
 function Start() {
 	StartTime = Time.time;
 }
 
 function Update () {
     
     if (!AudioFile.isPlaying && (Time.time - StartTime) >= timer && enterd==false) {
     
        AudioFile.Play();
         //if (!AudioFile.isPlaying && Time.time > timer ){
 		//	AudioFile.Play();
	 	}
		
}		 
        
        
    //else if (foo.isPlaying && Time.time > 5 ){
    	//foo.Pause();
     //else {
      //foo.Pause();
     //}	
    
