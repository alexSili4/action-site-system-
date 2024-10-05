import { ClassNames } from '@/constants';
import styled from '@emotion/styled';
import { MapContainer } from 'react-leaflet';

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 441px;

  & .${ClassNames.markerWrap} > svg {
    width: 100%;
    height: 100%;
    fill: #9066cc;
  }

  & .${ClassNames.activeMarkerWrap} > svg {
    width: 100%;
    height: 100%;
    fill: greenyellow;
  }
`;