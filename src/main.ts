import { IsometricCanvas, IsometricRectangle, PlaneView } from '@elchininet/isometric';
import { Grid } from './demo/grid';
import { Ball } from './demo/ball';
import { Demo1 } from './demo/demo1';
import { Demo2 } from './demo/demo2';

class IsometricDemo {


  constructor(container: HTMLElement) {

    const cube = new IsometricCanvas({
      container,
      backgroundColor: '#CCC',
      scale: 60,
      width: 1024,
      height: 600
    });

    cube
      .addChild(Grid.Init());

    const demo1 = Demo1.Init();

    cube
      .addChild(demo1);

    const demo2 = Demo2.Init();

    // demo2.top = 2;
    demo2.left = 2;
    cube
      .addChild(demo2);

    cube.addEventListener('click', function () {
      if (cube.animated) {
        cube.pauseAnimations();
      } else {
        cube.resumeAnimations();
      }
    });

    const circle = Ball.Init();
    circle.left = 2;
    circle.right = 4;
    cube
      .addChild(circle);
  }
}

new IsometricDemo(document.getElementById('app')!);