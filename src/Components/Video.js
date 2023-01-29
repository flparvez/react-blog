import React from 'react';
import VideoPlayer from './VideoPlayer';
import { EmbeddedPost, FacebookProvider } from 'react-facebook';


const Video = () => {


    
    const data = [

        {  videoid: "JlHEqAaj94c" },
        
    
        
    
      ];
     const fbvideo = [

        { fb:"https://www.facebook.com/watch/?ref=search&v=1802458133429113&external_log_id=e547cc60-7b0c-432f-aee4-a6211b936881&q=virat%20kohli%20batting%20highlights"},
    
        
    
      ];
    
    return (

        <div>

       <VideoPlayer/>
      
        <div className="bg-gray-300 rounded-lg">
        {
            data.map((video) => (

                 <div className="video-responsive">
                    <iframe
                      width="853"
                      height="480"
                      src={`https://www.youtube.com/embed/${video.videoid}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>

               

        ))}

{
            fbvideo.map((video) => (

              

                <FacebookProvider appId="123456789">
                <EmbeddedPost href={video.fb} width="500" />
              </FacebookProvider>

        ))}






  
</div>
      
        </div>
    );
};

export default Video;