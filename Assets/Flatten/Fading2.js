#pragma strict

private var alpha : float;

function Start () {
    renderer.material.color.a = alpha = 1.0;

    yield;

    while (alpha > 0.0) {
        alpha = Mathf.Max(alpha - Time.deltaTime, 0.0);
        renderer.material.color.a = alpha;
        yield;
    }

    renderer.enabled = false;

    while (!Input.GetMouseButtonDown(0)) yield;

    renderer.enabled = true;

    while (alpha < 1.0) {
        alpha = Mathf.Min(alpha + Time.deltaTime, 1.0);
        renderer.material.color.a = alpha;
        yield;
    }

    yield;

    Application.LoadLevel(0);
}
