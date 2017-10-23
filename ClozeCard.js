function ClozeCard(text,cloze) {
  if (!(this instanceof ClozeCard)) return new ClozeCard(text,cloze);
  let clozeIndex = text.indexOf(cloze);
  if (clozeIndex === -1) {
    let err = Error(`\"${cloze}\" does not exist within \"${text}\"`);
    console.log(err);
    return err;
  } else {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze,'...');
  }
}

module.exports = ClozeCard;