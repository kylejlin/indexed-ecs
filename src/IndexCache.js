class IndexCache {
  constructor(spec) {
    this.entities = [];
    this.requirements = spec.requirements;
    this.name = spec.name;
  }
}

export default IndexCache;
