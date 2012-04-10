Shader "Test/Unlit Colored" {
    Properties {
        _Color ("Main Color", Color) = (1,1,1,1)
        _MainTex ("Base (RGB)", 2D) = "white" {}
    }

    SubShader {
        Tags {"Queue"="Geometry" "IgnoreProjector"="True"}
        
        Lighting Off
        Cull Off
        Fog { Mode Off }

        Pass {
            Color [_Color]
            SetTexture [_MainTex] { combine texture * primary } 
        }
    }
}
