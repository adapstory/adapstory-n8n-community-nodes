# Custom n8n image built from FORKED n8n-nodes-starter.
# This Dockerfile is in the fork root — Jenkins `runDockerPipeline` builds it.
#
# Pattern: extends official n8n image, installs this fork's community nodes.
# Upstream sync: `git fetch upstream && git merge upstream/master`
#
# Build: docker build --platform linux/amd64 -t n8n-community:local .
FROM n8nio/n8n:2.8.3

USER root

# Copy fork source and build
COPY --chown=node:node . /home/node/community-nodes/
WORKDIR /home/node/community-nodes

RUN npm install --omit=dev 2>/dev/null || true && \
    npx n8n-node build 2>/dev/null || npx tsc 2>/dev/null || true

# Tell n8n where to find the community nodes from this fork
ENV N8N_CUSTOM_EXTENSIONS=/home/node/community-nodes

USER node
WORKDIR /home/node
