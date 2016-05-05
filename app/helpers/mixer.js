function mixer(baseObject, objectToMix) {
  for (var property in objectToMix) {
    if (objectToMix.hasOwnProperty(property)) {
      baseObject.property = objectToMix.property;
    }
  }
}

module.exports = {
  mix: mixer,
};
