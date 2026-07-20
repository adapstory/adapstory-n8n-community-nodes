# Archived GitHub Actions definitions

The two files here are inert historical records. Jenkins owns lint, build,
container publication, signing, SBOM, provenance, and GitOps delivery through
`.adapstory-ci.yaml` and `Jenkinsfile`.

The former npm publication lane is intentionally suspended. n8n requires
verified community nodes published after May 1, 2026 to use GitHub Actions
provenance, while npm does not currently issue equivalent trusted-publisher
provenance for Jenkins/self-hosted runners. The Jenkins-only platform decision
takes precedence: do not add a token-based, local, or unprovenanced fallback.
Publication may resume only after the upstream trust contract supports Jenkins
or a new explicit platform decision replaces this one.
