import { IsometricGroup, IsometricCircle, IsometricCircleProps, PlaneView } from '@elchininet/isometric';

export class Ball {


    static Init(): IsometricGroup {
        const group = new IsometricGroup();

        const circle = new IsometricCircle({ radius: 0.5, left: 0.5, right: 0.5, planeView: PlaneView.TOP } as IsometricCircleProps);

        group.addChildren(circle);

         const ballRadius = 0.5;
         const ballCenter = { left: 0.5, right: 0.5 };
         const layers = 50;
         for (let i = 1; i <= layers; i++) {
            // 计算当前层的高度
            const t = (i / layers) * 2 - 1; // -1 到 1
            const top = (i / layers) * 2 - 0.5;
            
            // 计算当前层圆的半径
            const layerRadius = Math.sqrt(ballRadius * ballRadius - t * t);
            console.log("t", t, "top", top, "layerRadius", layerRadius)
            
            if (layerRadius > 0.01) { // 避免绘制过小的圆
                // 计算颜色渐变（从暗到亮再到暗，模拟球体光照）
                const lightIntensity = Math.abs(t) < 0.5 ? 1 - Math.abs(t) * 0.8 : 0.2;
                const red = Math.floor(100 + lightIntensity * 155);
                const green = Math.floor(150 + lightIntensity * 105);
                const blue = Math.floor(200 + lightIntensity * 55);
                
                // 创建圆形
                const circle = new IsometricCircle({
                    radius: layerRadius,
                    right: ballCenter.right,
                    left: ballCenter.left,
                    top: top,
                    fillColor: `rgb(${red}, ${green}, ${blue})`,
                    strokeColor: `rgb(${red-20}, ${green-20}, ${blue-20})`,
                    strokeWidth: 0.5,
                    planeView: PlaneView.TOP,
                } as IsometricCircleProps);
                
                group.addChildren(circle);
            }
        }
        return group;
    }
}
