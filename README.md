# docker-nvidia puppeteer test


    docker build -t glxgears .
    xhost +si:localuser:root
    docker run --runtime=nvidia -ti --rm -e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix glxgears
    
Where DISPLAY is a real Xorg session with nvidia driver >= 390.

Running it should display something like:

    Google Inc. ANGLE (NVIDIA Corporation GeForce GTX 1050/PCIe/SSE2 OpenGL 4.5 core)

There is also an xdummy.conf and xdummy@.service that can be used in place of a real display.

    sudo systemctl start xdummy@10
    export DISPLAY=:10
    docker run --runtime=nvidia -ti --rm -e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix glxgears
