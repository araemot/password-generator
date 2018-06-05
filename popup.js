// Copyright (c) 2017 araemot. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const password_length = 32;
const characters =
  "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*?";

function random(array) {
  let draw = new Uint32Array(1);

  // remove modulo bias by making the RNG's range
  // a multiple of array.length
  do {
    window.crypto.getRandomValues(draw);
  } while (draw[0] < (Math.pow(2,32) % array.length));

  return array[draw[0] % array.length];
}

function sample(array, size) {
  return Array.from({length: size}, () => random(array));
}

function render(id, text) {
  document.getElementById(id).textContent = text;
}

document.addEventListener("DOMContentLoaded", () => {
  render("password", sample(characters, password_length).join(""));
});
