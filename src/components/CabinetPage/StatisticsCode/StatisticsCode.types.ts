export interface IProps {
  code: string;
  codeCreatedAt: string;
  partnerLogo: string;
  isSuccessStatus: boolean;
  isErrorStatus: boolean;
  shouldShowUserCertificateLink: boolean;
  shouldShowUserPrizeLink: boolean;
  shouldShowCertificate: boolean;
  codeDetailsPath: string;
  certificateDetailsPath: string;
  prizeDetailsPath: string;
  shouldShowContent: boolean;
  shouldShowCodeLinks: boolean;
}

export interface IStyledCertificateWrapProps {
  partnerLogo: string;
  shouldShowCertificate: boolean;
}

export interface IStyledLinkProps {
  isCertificateLink?: boolean;
}

export interface IStyledLinksWrapProps {
  shouldShowCodeLinks: boolean;
}

export interface IStyledContentWrapProps {
  shouldShowContent: boolean;
}
