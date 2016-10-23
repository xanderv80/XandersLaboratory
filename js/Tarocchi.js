
      // Get the canvas element from our HTML below
      var canvas = document.querySelector("#renderCanvas");
      // Load the BABYLON 3D engine
      var engine = new BABYLON.Engine(canvas, true);
      
      BABYLON.SceneLoader.Load("","untitled.babylon", engine, function(newScene){
         var Scene = newScene;
         Scene.executeWhenReady(function(){
            engine.runRenderLoop(function(){
               Scene.render();
            });
         });
      });


      // Watch for browser/canvas resize events
      window.addEventListener("resize", function () {
         engine.resize();
      });