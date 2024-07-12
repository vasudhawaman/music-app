import React from "react"


export default function Lyrics(){
    let subtitles = document.getElementById("subtitles");
            var syncData = [
                  { "end": "0.225","start": "0.125","text": "There" },
                  {"end": "0.485","start": "0.225","text": "were" },
                  /* ... and so on ... full json is in the demo */
                ];
            createSubtitle();

            function createSubtitle()
            {
                var element;
                for (var i = 0; i < syncData.length; i++) {
                    element = document.createElement('span');
                    element.setAttribute("id", "c_" + i);
                    element.innerText = syncData[i].text + " ";
                    subtitles.appendChild(element);
                }
            }
            const audioPlayer= document.getElementById("audio");
            audioPlayer.addEventListener("timeupdate", function(e){
                syncData.forEach(function(element, index, array){
                    if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end )
                        subtitles.children[index].style.fontColor = 'yellow';
                    
                });
            });

            return(
                <div id="subtitles"></div>
            )
     
}