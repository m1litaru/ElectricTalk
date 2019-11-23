export class Car {

    constructor(public model: string, public company: string, public year: number, public autonomy: number,
       public batteryLeft: number, public lastTechRevision: string, public userId: string, public id: string, public icon: string){

    }

    // addItem(item){
    //     this.details.push({
    //         title: item,
    //         checked: false
    //     });
    // }

    // removeItem(item){
    //     var i: any;
    //     for(i = 0; i < this.details.length; i++) {
    //         if(this.details[i] == item){
    //             this.details.splice(i, 1);
    //         }
    //     }

    // }
}