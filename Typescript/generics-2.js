function displayType(id, name) {
    console.log("id: " + id + " (type: " + typeof id + ")");
    console.log("name: " + name + " (type: " + typeof name + ")");
}
displayType(1, "Steve");
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("key: " + this.key + ", val: " + this.val);
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, "Steve");
kvp1.display();
var kvp2 = new KeyValuePair();
kvp2.setKeyValue("E001", "Bill");
kvp2.display();
