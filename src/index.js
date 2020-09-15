function register(cytoscape) {
  if (!cytoscape) {
    return;
  }

  cytoscape('core', 'mapboxGlEnabled', function(bool) {
    if (bool !== undefined) {
      this._private.mapboxGlEnabled = bool ? true : false;
    } else {
      return this._private.mapboxGlEnabled;
    }

    if (bool && !this._private.mapboxGl) {
      // this._private.mapboxGl = new mapboxGl(this);
    } else if (!bool && this._private.mapboxGl) {
      this._private.mapboxGl.destroy();
      this._private.mapboxGl = undefined;
    }

    return this; // chaining
  });
}

if (typeof window.cytoscape !== 'undefined') {
  register(window.cytoscape);
}

export default register;