/* @flow */
import { PDFObject, PDFDictionary } from 'core/pdf-objects';
import { error } from 'utils';
import { validate, isInstance } from 'utils/validate';

class PDFStream extends PDFObject {
  dictionary: PDFDictionary;

  constructor(dictionary: PDFDictionary) {
    super();
    validate(
      dictionary,
      isInstance(PDFDictionary),
      'PDFStream.dictionary must be of type PDFDictionary',
    );
    this.dictionary = dictionary;
  }

  validateDictionary = () => {
    if (!this.dictionary.get('Length')) {
      error('"Length" is a required field for PDFStream dictionaries');
    }
  };
}

export default PDFStream;