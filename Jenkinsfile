@Library('adapstory-jenkins-shared-lib@main') _

// Jenkins `runDockerPipeline` (adapstoryPipeline.groovy:354):
//   1. Checkout from https://github.com/adapstory/adapstory-n8n-community-nodes.git
//   2. Compute CalVer tag (YY.MM.DD-<sha9>)
//   3. Kaniko build from ./Dockerfile
//   4. Push to harbor.adapstory.com/adapstory/n8n-community-nodes:<tag>
//   5. Trivy scan → Cosign sign → SBOM → SLSA provenance
//   6. Update GitOps values.yaml with new image tag
adapstoryPipeline(
    service: 'n8n-community-nodes',
    type: 'docker',
    deploy: ['dev'],
)
