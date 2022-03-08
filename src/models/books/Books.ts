export type BooksListModel = {
  kind: string,
  totalItems: number,
  items: {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: {
      title: string,
      authors: string[],
      publisher: string,
      publishedDate: string,
      industryIdentifiers: {
        type: string,
        identifier: string
      }[],
      readingModes: {
        text: boolean,
        image: boolean
      },
      pageCount: number,
      printType: string,
      maturityRating: string,
      allowAnonLogging: boolean,
      contentVersion: string,
      imageLinks: {
        smallThumbnail: string,
        thumbnail: string
      },
      language: string,
      previewLink: string,
      infoLink: string,
      canonicalVolumeLink: string
    },
    saleInfo: {
      country: string,
      saleability: string,
      isEbook: boolean
    },
    accessInfo: {
      country: string,
      viewability: string,
      embeddable: boolean,
      publicDomain: boolean,
      textToSpeechPermission: string,
      epub: {
        isAvailable: boolean
      },
      pdf: {
        isAvailable: boolean
      },
      webReaderLink: string,
      accessViewStatus: string,
      quoteSharingAllowed: boolean
    },
    searchInfo: {
      textSnippet: string
    }
  }[]
};

export type bookItemModel = {
  kind: string,
  id: string,
  etag: string,
  selfLink: string,
  volumeInfo: {
    title: string,
    authors: string[],
    categories: string[],
    publisher: string,
    publishedDate: string,
    industryIdentifiers: {
      type: string,
      identifier: string
    }[],
    readingModes: {
      text: boolean,
      image: boolean
    },
    pageCount: number,
    printType: string,
    maturityRating: string,
    allowAnonLogging: boolean,
    contentVersion: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    },
    language: string,
    previewLink: string,
    infoLink: string,
    canonicalVolumeLink: string
  },
  saleInfo: {
    country: string,
    saleability: string,
    isEbook: boolean
  },
  accessInfo: {
    country: string,
    viewability: string,
    embeddable: boolean,
    publicDomain: boolean,
    textToSpeechPermission: string,
    epub: {
      isAvailable: boolean
    },
    pdf: {
      isAvailable: boolean
    },
    webReaderLink: string,
    accessViewStatus: string,
    quoteSharingAllowed: boolean
  },
  searchInfo: {
    textSnippet: string
  }
}[]
