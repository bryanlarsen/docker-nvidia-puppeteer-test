# docker-nvidia puppeteer test

What works:

    docker build -t glxgears .
    xhost +si:localuser:root
    docker run --runtime=nvidia -ti --rm -e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix glxgears
    
Where DISPLAY is a real Xorg session with nvidia driver >= 390.

Running it should display something like:

    Google Inc. ANGLE (NVIDIA Corporation GeForce GTX 1050/PCIe/SSE2 OpenGL 4.5 core)

Unfortunately, it doesn't appear to work with XDummy like our previous setup did.   I've attached our xdummy configuration files for reference.
