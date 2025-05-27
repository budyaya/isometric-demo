import { IsometricGroup, IsometricPath, IsometricRectangle, IsometricPentagram, PlaneView, SVGRectangleAnimation, SVGPathAnimation } from '@elchininet/isometric';

export class Grid {

    static Init(gridSize: number = 10): IsometricGroup {
        const group = new IsometricGroup();

        // 画出网格
        const path = new IsometricPath();
        path.strokeWidth = 1;
        for (let i = -10; i < 10; i++) {
            path.moveTo(i, -gridSize, 0);
            path.lineTo(i, gridSize, 0);
        }
        for (let j = -10; j < 10; j++) {
            path.moveTo(-gridSize, j, 0);
            path.lineTo(gridSize, j, 0);
        }

        group.addChildren(path);

        return group;
    }
}
