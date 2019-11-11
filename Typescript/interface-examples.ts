class c5 {
    id5: number;
}
interface In4 {
    id4: number;
}
interface In1 {
    id1: number;
    fun1(): void;
}
interface In2 extends In1 {
    id2: number;
    fun2(): void;
}
class c3 extends c5 implements In2, In4 {
    id1: number;
    id2: number;
    id3: number;
    id4: number;
    fun1(): void {
        console.log(this.id1);
    }
    fun2(): void {
        console.log(this.id2);
    }
    fun3(): void {
        console.log(this.id3);
    }
}
