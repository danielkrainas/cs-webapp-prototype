export function generateTestGalleries (count = 20) {
  var galleries = []
  for (var i = 0; i < count; i++) {
    galleries.push({
      name: `Gallery ${i}`,
      id: `${i}`,
    })
  }
  return galleries
}
