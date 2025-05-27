import { IsometricGroup, IsometricRectangle, PlaneView } from '@elchininet/isometric';

export class Demo1 {


    static Init(): IsometricGroup {
        const group = new IsometricGroup();

        const commonProps = { height: 1, width: 1 };
        const topPiece = new IsometricRectangle({ ...commonProps, planeView: PlaneView.TOP });
        const rightPiece = new IsometricRectangle({ ...commonProps, planeView: PlaneView.FRONT });
        const leftPiece = new IsometricRectangle({ ...commonProps, planeView: PlaneView.SIDE });

        topPiece.top = 1;
        topPiece.addEventListener('click', () => {
            topPiece.fillColor = topPiece.fillColor === 'white' ? '#EEE' : 'white';
        }, true);

        rightPiece.right = 1;
        rightPiece.addEventListener('click', () => {
            rightPiece.fillColor = rightPiece.fillColor === 'white' ? '#EEE' : 'white';
        }, true);

        leftPiece.left = 1;
        leftPiece.addEventListener('click', () => {
            leftPiece.fillColor = leftPiece.fillColor === 'white' ? '#EEE' : 'white';
        }, true);

        group
            .addChild(topPiece)
            .addChild(rightPiece)
            .addChild(leftPiece);
        return group;
    }
}
