ZOO-Project Nuxt UI Setup Documentation
=======================================

This documentation provides a step-by-step guide for setting up and running the Nuxt-based UI for the ZOO-Project.
It combines the original setup instructions with additional troubleshooting steps encountered during the process.

Prerequisites
-------------
- Docker and Docker Compose installed
- Git installed
- Patch and tar utilities available
- Access to Keycloak admin credentials

Steps to Set Up the Nuxt UI
---------------------------

1. Clone the ZOO-Project Repository
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Run the following commands to clone the main repository:

.. code-block:: bash

    git clone https://github.com/ZOO-Project/ZOO-Project.git
    cd ZOO-Project

2. Apply the MOZJS Patch
~~~~~~~~~~~~~~~~~~~~~~~~
Download the patch file and apply it:

.. code-block:: bash

    patch < ~/Downloads/MOZJS.patch

3. Build the Required Docker Image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Use the provided Dockerfile to build the image:

.. code-block:: bash

    docker build . -f Dockerfile-MOZJS -t zooproject/zoo-project-default:latest

4. Extract the Nuxt UI Archive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Download and extract the Nuxt UI files:

.. code-block:: bash

    tar -xvf ~/Downloads/nuxt-client.tar.bz2

5. Clone the Nuxt Client Repository
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Clone the Nuxt client repository from within the ZOO-Project folder:

.. code-block:: bash

    git clone https://github.com/Wagtial/zooproject-nuxt-client.git

6. Build the Docker Image for Nuxt Client
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Build the Docker image using Docker Compose:

.. code-block:: bash

    docker compose -f docker/nuxt-client/docker-compose.yml --project-directory . build nuxtclient --no-cache --progress plain

7. Start the Docker Environment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Start the containers in detached mode:

.. code-block:: bash

    docker compose -f docker/nuxt-client/docker-compose.yml --project-directory . up -d

8. Configure Local IP Addresses
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Update the following configuration files to point to your local IP address:

- ``docker/main.cfg``
- ``docker/oas.cfg``

Replace the default IP with your machine's local IP (e.g., 192.168.x.x).

9. Update Keycloak Valid Redirect URLs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Go to the Keycloak admin page and add your local host URL to the **Valid Redirect URIs**:

    https://auth.geolabs.fr/admin/master/console/#/zooproject/clients/46d7d010-8bf8-438d-bd4d-b6212c0e928b/settings

Credentials:
- **User:** admin
- **Password:** GeoLabs.1

Troubleshooting Tips
--------------------

1. **Docker Command Issues**
   - If you encounter errors like ``unknown flag: --project-directory``, ensure you are using the latest version of Docker Compose.

2. **Local IP Configuration**
   - Use the command ``ipconfig`` (Windows) or ``ifconfig`` (Linux/Mac) to find your local IP address.
   - Update all occurrences in ``main.cfg`` and ``oas.cfg``.

3. **Port Conflicts**
   - Make sure no other services are using the same ports as defined in ``docker-compose.yml``.

4. **Nuxt Build Errors**
   - Clear cache and rebuild using:

     .. code-block:: bash

        docker compose -f docker/nuxt-client/docker-compose.yml --project-directory . build nuxtclient --no-cache

5. **WebSocket Connection Issues**
   - Verify the IP in the WebSocket URL matches your local setup.

Conclusion
----------
Following the above steps should set up the Nuxt-based UI for ZOO-Project successfully. The instructions combine the original setup process with practical troubleshooting encountered during installation.
