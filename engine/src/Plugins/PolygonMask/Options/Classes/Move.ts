import type { IMove } from "../Interfaces/IMove";
import type { RecursivePartial } from "../../../../Types";
import { MoveType } from "../../Enums";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";

/**
 * @category Polygon Mask Plugin
 */
export class Move implements IMove, IOptionLoader<IMove> {
    radius;
    type: MoveType | keyof typeof MoveType;

    constructor() {
        this.radius = 10;
        this.type = MoveType.path;
    }

    load(data?: RecursivePartial<IMove>): void {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }

            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    }
}
