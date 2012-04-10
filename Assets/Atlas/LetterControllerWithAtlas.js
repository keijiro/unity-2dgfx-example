#pragma strict

private var param : float;
private var delta : float;

function Start () {
    delta = Random.Range(0.8, 1.2);
    param = Random.value;

    var letter = Random.Range(0, 3);
    var color = Random.Range(0, 3);
    var base = Vector2(letter * 0.25, 0.75 - 0.25 * color);

    var mesh = GetComponent(MeshFilter).mesh;
    var uv = new Vector2[mesh.vertices.Length];
    uv[0] = base + Vector2(0.0, 0.25);
    uv[1] = base + Vector2(0.25, 0.25);
    uv[2] = base + Vector2(0.25, 0.0);
    uv[3] = base + Vector2(0.0, 0.0);
    mesh.uv = uv;
}

function Update () {
    param += delta * Time.deltaTime;
    transform.localPosition = Vector3(Mathf.Sin(3.4 * param), Mathf.Sin(6.2 * param), 0) * 0.02;
    transform.rotation = Quaternion.AngleAxis(20.0 * Mathf.Sin(7.1 * param), Vector3.forward);
}
