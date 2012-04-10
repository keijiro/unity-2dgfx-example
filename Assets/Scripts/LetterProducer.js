#pragma strict

var range : Rect;
var column : int;
var row : int;

var prefab : GameObject;

function Start () {
    for (var i = 0; i < column; i++) {
        for (var j = 0; j < row; j++) {
            Instantiate(prefab, MakePosition(i, j), Quaternion.identity);
        }
    }
}

function OnDrawGizmosSelected () {
    Gizmos.color = Color.yellow;
    Gizmos.DrawWireCube(range.center, Vector3(range.width, range.height, 0));
}

private function MakePosition (x : int, y : int) : Vector3 {
    return Vector3(
        range.x + range.width / (column - 1) * x,
        range.y + range.height / (row - 1) * y,
        transform.position.z
    );
}
