import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const FavoriteIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="22px"
    viewBox="0 0 24 22"
    version="1.1"
  >
    {children}
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      {...color !== "currentColor" && { fillOpacity: ".65" }}
    >
      <g
        transform="translate(-950.000000, -407.000000)"
        fill={color}
        fillRule="nonzero"
      >
        <path d="M968.07706,407.053152 C971.5943,407.460137 974,410.048724 974,414.245292 C974,418.78884 971.698203,421.91696 966.97459,425.506474 C966.631149,425.767458 966.283116,426.026384 965.816501,426.369552 C965.687396,426.464501 965.532825,426.57795 965.253963,426.782612 C965.031956,426.945648 964.867028,427.067159 964.70796,427.185054 C964.142693,427.604004 963.498277,428.111251 962.774711,428.706795 C962.331151,429.093015 961.668849,429.093015 961.258126,428.73435 L961.225289,428.706795 C960.72163,428.268245 960.13994,427.81348 959.29204,427.185054 C959.132972,427.067159 958.968044,426.945648 958.746037,426.782612 C958.467175,426.57795 958.312604,426.464501 958.183499,426.369552 C957.716884,426.026384 957.368851,425.767458 957.02541,425.506474 C952.301797,421.91696 950,418.78884 950,414.245292 C950,410.048724 952.4057,407.460137 955.92294,407.053152 C958.209092,406.788618 960.56977,407.527361 962,408.915718 C963.43023,407.527361 965.790908,406.788618 968.07706,407.053152 Z M963.302492,425.307206 C963.464835,425.186884 963.632262,425.063533 963.856806,424.898633 C964.13657,424.693309 964.290003,424.580695 964.418033,424.486536 C964.875585,424.150034 965.214705,423.897739 965.546558,423.645561 C969.742398,420.457106 971.647059,417.86869 971.647059,414.245292 C971.647059,411.256638 970.154662,409.650786 967.805293,409.378937 C965.716097,409.137193 963.581221,410.105482 963.101564,411.378324 C962.719872,412.391201 961.280128,412.391201 960.898436,411.378324 C960.418779,410.105482 958.283903,409.137193 956.194707,409.378937 C953.845338,409.650786 952.352941,411.256638 952.352941,414.245292 C952.352941,417.86869 954.257602,420.457106 958.453442,423.645561 C958.785295,423.897739 959.124415,424.150034 959.581967,424.486536 C959.709997,424.580695 959.86343,424.693309 960.143194,424.898633 C960.367738,425.063533 960.535165,425.186884 960.697508,425.307206 C961.209397,425.686596 961.632747,426.008687 962.000165,426.301159 C962.372169,426.004947 962.793574,425.684394 963.302492,425.307206 Z" />
      </g>
    </g>
  </svg>
);

FavoriteIcon.displayName = "FavoriteIcon";

FavoriteIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

FavoriteIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default FavoriteIcon;