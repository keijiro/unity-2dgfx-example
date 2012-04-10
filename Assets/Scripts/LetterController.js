#pragma strict

var colors : Color[];
var textures : Texture2D[];

private var param : float;
private var delta : float;

function Start () {
    renderer.material.color = colors[Random.Range(0, colors.Length)];
    renderer.material.mainTexture = textures[Random.Range(0, textures.Length)];
    delta = Random.Range(0.8, 1.2);
    param = Random.value;
}

function Update () {
    param += delta * Time.deltaTime;
    transform.localPosition = Vector3(Mathf.Sin(3.4 * param), Mathf.Sin(6.2 * param), 0) * 0.02;
    transform.rotation = Quaternion.AngleAxis(20.0 * Mathf.Sin(7.1 * param), Vector3.forward);
}
