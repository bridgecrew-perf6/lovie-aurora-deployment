import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="218"
        height="218"
        viewBox="0 0 208.359 208.353"
      >
        <g
          id="Group_1682"
          data-name="Group 1682"
          transform="translate(-1277 -380.501)"
        >
          <g
            id="Group_1681"
            data-name="Group 1681"
            transform="translate(1277 380.501)"
          >
            <path
              id="Path_1661"
              data-name="Path 1661"
              d="M-17690.824-12641.646a104.877,104.877,0,0,1-21-2.116,103.717,103.717,0,0,1-19.551-6.07,104.224,104.224,0,0,1-17.7-9.6,104.88,104.88,0,0,1-15.418-12.721,104.8,104.8,0,0,1-12.719-15.418,104.025,104.025,0,0,1-9.609-17.7,104.243,104.243,0,0,1-6.074-19.556,105.379,105.379,0,0,1-2.113-20.994,105.4,105.4,0,0,1,2.113-21,104.288,104.288,0,0,1,6.074-19.556,104.016,104.016,0,0,1,9.609-17.7,104.8,104.8,0,0,1,12.719-15.418,104.88,104.88,0,0,1,15.418-12.721,104.3,104.3,0,0,1,17.7-9.6,103.786,103.786,0,0,1,19.551-6.069,104.877,104.877,0,0,1,21-2.116h.637v104.814h103.539a104.939,104.939,0,0,1-2.219,20.884,103.842,103.842,0,0,1-6.141,19.441,104.084,104.084,0,0,1-9.637,17.591,105.165,105.165,0,0,1-12.723,15.318,105.046,105.046,0,0,1-15.395,12.636,104.1,104.1,0,0,1-17.652,9.538,103.666,103.666,0,0,1-19.492,6.027A104.808,104.808,0,0,1-17690.824-12641.646Z"
              transform="translate(17795.004 12849.998)"
              fill="#337357"
            />
            <path
              id="Path_1662"
              data-name="Path 1662"
              d="M-17713-12746.139V-12850a103.233,103.233,0,0,1,102.6,103.225c0,.213,0,.422,0,.635Z"
              transform="translate(17818.762 12849.999)"
              fill="#f6f6f6"
            />
          </g>
          <path
            id="Path_1659"
            data-name="Path 1659"
            d="M1.044,2.033,4.963-5.722v-.065H.415V-7.179H6.69v1.425L2.775,2.033Zm9.577.126a3.682,3.682,0,0,1-1.608-.339A2.846,2.846,0,0,1,7.887.887,2.449,2.449,0,0,1,7.444-.472H9.063a1.26,1.26,0,0,0,.49.923,1.656,1.656,0,0,0,1.068.358A1.7,1.7,0,0,0,11.5.584a1.6,1.6,0,0,0,.6-.625,1.857,1.857,0,0,0,.217-.914,1.867,1.867,0,0,0-.223-.928,1.65,1.65,0,0,0-.617-.635,1.761,1.761,0,0,0-.9-.233,2.187,2.187,0,0,0-.813.153,1.653,1.653,0,0,0-.637.415l-1.5-.248L8.1-7.179H13.45v1.393H9.484L9.218-3.343h.054a1.913,1.913,0,0,1,.725-.5,2.594,2.594,0,0,1,1.027-.2,2.841,2.841,0,0,1,1.493.394,2.828,2.828,0,0,1,1.035,1.082,3.2,3.2,0,0,1,.377,1.575A3.124,3.124,0,0,1,13.51.632a2.99,2.99,0,0,1-1.166,1.119A3.536,3.536,0,0,1,10.622,2.158Zm7.62.05a3.218,3.218,0,0,1-1.906-.565A3.535,3.535,0,0,1,15.116.011a6.961,6.961,0,0,1-.423-2.577A6.916,6.916,0,0,1,15.12-5.13a3.5,3.5,0,0,1,1.22-1.617,3.227,3.227,0,0,1,1.9-.557,3.227,3.227,0,0,1,1.9.558,3.509,3.509,0,0,1,1.222,1.618,6.854,6.854,0,0,1,.424,2.562,7,7,0,0,1-.425,2.58,3.532,3.532,0,0,1-1.218,1.632A3.208,3.208,0,0,1,18.241,2.209Zm0-1.407a1.526,1.526,0,0,0,1.365-.854,5.043,5.043,0,0,0,.5-2.514,6.386,6.386,0,0,0-.228-1.843,2.459,2.459,0,0,0-.646-1.126,1.421,1.421,0,0,0-.99-.38,1.523,1.523,0,0,0-1.359.852,5.03,5.03,0,0,0-.5,2.5A6.472,6.472,0,0,0,16.6-.71,2.447,2.447,0,0,0,17.247.421,1.428,1.428,0,0,0,18.241.8ZM29.659-.871v-4h1.63V2.033h-1.58V.806h-.072a2.092,2.092,0,0,1-.768.949,2.25,2.25,0,0,1-1.312.368,2.322,2.322,0,0,1-1.2-.3,2.082,2.082,0,0,1-.811-.885,3.129,3.129,0,0,1-.294-1.412v-4.4h1.63V-.731a1.484,1.484,0,0,0,.36,1.045A1.224,1.224,0,0,0,28.187.7a1.505,1.505,0,0,0,.7-.175A1.42,1.42,0,0,0,29.442,0,1.611,1.611,0,0,0,29.659-.871Zm4.334-1.144V2.033h-1.63V-4.876h1.558V-3.7H34a1.958,1.958,0,0,1,.76-.921,2.326,2.326,0,0,1,1.3-.342,2.463,2.463,0,0,1,1.247.305,2.078,2.078,0,0,1,.828.886,3.069,3.069,0,0,1,.293,1.41v4.4H36.8V-2.113A1.537,1.537,0,0,0,36.443-3.2a1.275,1.275,0,0,0-.989-.391A1.518,1.518,0,0,0,34.7-3.4a1.3,1.3,0,0,0-.516.537A1.811,1.811,0,0,0,33.993-2.015Zm5.5,4.048V-4.876H41.12V2.033Zm.819-7.889a.943.943,0,0,1-.668-.259.822.822,0,0,1-.277-.623.824.824,0,0,1,.279-.627.945.945,0,0,1,.666-.259.937.937,0,0,1,.663.259.827.827,0,0,1,.277.627.822.822,0,0,1-.277.623A.937.937,0,0,1,40.31-5.857Zm5.335.981v1.259H41.676V-4.876Zm-2.99-1.655h1.63V-.044a1.015,1.015,0,0,0,.1.5.516.516,0,0,0,.266.236,1.04,1.04,0,0,0,.372.063A1.575,1.575,0,0,0,45.3.732q.128-.023.2-.038l.273,1.27q-.131.044-.371.1a3.049,3.049,0,0,1-.587.063,2.623,2.623,0,0,1-1.1-.187,1.694,1.694,0,0,1-.775-.635A1.9,1.9,0,0,1,42.655.223Zm9.116,3.483-1.486.162a1.171,1.171,0,0,0-.217-.425,1.135,1.135,0,0,0-.416-.32,1.489,1.489,0,0,0-.637-.122,1.547,1.547,0,0,0-.852.221.657.657,0,0,0-.342.574.6.6,0,0,0,.226.488,1.848,1.848,0,0,0,.753.31l1.177.252a3,3,0,0,1,1.461.672,1.59,1.59,0,0,1,.482,1.2,1.858,1.858,0,0,1-.379,1.149A2.481,2.481,0,0,1,50.5,1.89a3.913,3.913,0,0,1-1.53.28,3.521,3.521,0,0,1-2.04-.534A2.144,2.144,0,0,1,46,.147L47.593,0a1.109,1.109,0,0,0,.458.7,1.6,1.6,0,0,0,.913.238A1.647,1.647,0,0,0,49.9.7a.7.7,0,0,0,.354-.591.62.62,0,0,0-.229-.489,1.6,1.6,0,0,0-.7-.3L48.14-.922a2.8,2.8,0,0,1-1.469-.7A1.712,1.712,0,0,1,46.2-2.868a1.79,1.79,0,0,1,.35-1.109,2.27,2.27,0,0,1,.983-.73,3.828,3.828,0,0,1,1.462-.259,3.147,3.147,0,0,1,1.913.518A2.183,2.183,0,0,1,51.771-3.048Z"
            transform="translate(1356.906 538.69)"
            fill="#fff"
          />
          <path
            id="Path_1660"
            data-name="Path 1660"
            d="M.655,2.033V.827l3.2-3.134q.458-.464.764-.824a3.074,3.074,0,0,0,.46-.7,1.709,1.709,0,0,0,.154-.72,1.366,1.366,0,0,0-.2-.748,1.327,1.327,0,0,0-.546-.485A1.749,1.749,0,0,0,3.7-5.952a1.639,1.639,0,0,0-.8.187,1.293,1.293,0,0,0-.527.529,1.683,1.683,0,0,0-.186.813H.605A2.846,2.846,0,0,1,1-5.945a2.689,2.689,0,0,1,1.1-1A3.54,3.54,0,0,1,3.725-7.3a3.628,3.628,0,0,1,1.628.346,2.68,2.68,0,0,1,1.09.95,2.474,2.474,0,0,1,.39,1.374,2.746,2.746,0,0,1-.2,1.017A4.348,4.348,0,0,1,5.942-2.51,17.461,17.461,0,0,1,4.549-1.04L2.962.575V.64H6.97V2.033Zm10.48.126a3.682,3.682,0,0,1-1.608-.339A2.846,2.846,0,0,1,8.4.887,2.449,2.449,0,0,1,7.958-.472H9.578a1.26,1.26,0,0,0,.49.923,1.656,1.656,0,0,0,1.068.358,1.7,1.7,0,0,0,.876-.225,1.6,1.6,0,0,0,.6-.625,1.857,1.857,0,0,0,.217-.914,1.867,1.867,0,0,0-.223-.928,1.65,1.65,0,0,0-.617-.635,1.761,1.761,0,0,0-.9-.233,2.187,2.187,0,0,0-.813.153,1.653,1.653,0,0,0-.637.415l-1.5-.248.479-4.75h5.347v1.393H10L9.732-3.343h.054a1.913,1.913,0,0,1,.725-.5,2.594,2.594,0,0,1,1.027-.2,2.841,2.841,0,0,1,1.493.394,2.828,2.828,0,0,1,1.035,1.082,3.2,3.2,0,0,1,.377,1.575A3.124,3.124,0,0,1,14.024.632a2.99,2.99,0,0,1-1.166,1.119A3.536,3.536,0,0,1,11.136,2.158Zm7.62.05a3.218,3.218,0,0,1-1.906-.565A3.535,3.535,0,0,1,15.63.011a6.961,6.961,0,0,1-.423-2.577,6.916,6.916,0,0,1,.427-2.564,3.5,3.5,0,0,1,1.22-1.617,3.227,3.227,0,0,1,1.9-.557,3.227,3.227,0,0,1,1.9.558,3.509,3.509,0,0,1,1.222,1.618A6.854,6.854,0,0,1,22.3-2.566a7,7,0,0,1-.425,2.58,3.532,3.532,0,0,1-1.218,1.632A3.208,3.208,0,0,1,18.755,2.209Zm0-1.407A1.526,1.526,0,0,0,20.12-.052a5.043,5.043,0,0,0,.5-2.514,6.386,6.386,0,0,0-.228-1.843,2.459,2.459,0,0,0-.646-1.126,1.421,1.421,0,0,0-.99-.38,1.523,1.523,0,0,0-1.359.852,5.03,5.03,0,0,0-.5,2.5A6.472,6.472,0,0,0,17.116-.71,2.447,2.447,0,0,0,17.762.421,1.428,1.428,0,0,0,18.755.8ZM30.173-.871v-4H31.8V2.033h-1.58V.806h-.072a2.092,2.092,0,0,1-.768.949,2.25,2.25,0,0,1-1.312.368,2.322,2.322,0,0,1-1.2-.3,2.082,2.082,0,0,1-.811-.885,3.129,3.129,0,0,1-.294-1.412v-4.4H27.4V-.731a1.484,1.484,0,0,0,.36,1.045A1.224,1.224,0,0,0,28.7.7a1.505,1.505,0,0,0,.7-.175A1.42,1.42,0,0,0,29.957,0,1.611,1.611,0,0,0,30.173-.871Zm4.334-1.144V2.033h-1.63V-4.876h1.558V-3.7h.083a1.958,1.958,0,0,1,.76-.921,2.326,2.326,0,0,1,1.3-.342,2.463,2.463,0,0,1,1.247.305,2.078,2.078,0,0,1,.828.886,3.069,3.069,0,0,1,.293,1.41v4.4h-1.63V-2.113A1.537,1.537,0,0,0,36.957-3.2a1.275,1.275,0,0,0-.989-.391,1.518,1.518,0,0,0-.757.185,1.3,1.3,0,0,0-.516.537A1.811,1.811,0,0,0,34.507-2.015Zm5.5,4.048V-4.876h1.628V2.033Zm.819-7.889a.943.943,0,0,1-.668-.259.822.822,0,0,1-.277-.623.824.824,0,0,1,.279-.627.945.945,0,0,1,.666-.259.937.937,0,0,1,.663.259.827.827,0,0,1,.277.627.822.822,0,0,1-.277.623A.937.937,0,0,1,40.824-5.857Zm5.335.981v1.259H42.19V-4.876Zm-2.99-1.655H44.8V-.044a1.015,1.015,0,0,0,.1.5.516.516,0,0,0,.266.236,1.04,1.04,0,0,0,.372.063,1.575,1.575,0,0,0,.278-.023q.128-.023.2-.038l.273,1.27q-.131.044-.371.1a3.049,3.049,0,0,1-.587.063,2.623,2.623,0,0,1-1.1-.187,1.694,1.694,0,0,1-.775-.635A1.9,1.9,0,0,1,43.169.223Zm9.116,3.483L50.8-2.886a1.171,1.171,0,0,0-.217-.425,1.135,1.135,0,0,0-.416-.32,1.489,1.489,0,0,0-.637-.122,1.547,1.547,0,0,0-.852.221.657.657,0,0,0-.342.574.6.6,0,0,0,.226.488,1.848,1.848,0,0,0,.753.31l1.177.252a3,3,0,0,1,1.461.672,1.59,1.59,0,0,1,.482,1.2,1.858,1.858,0,0,1-.379,1.149,2.481,2.481,0,0,1-1.041.777,3.913,3.913,0,0,1-1.53.28,3.521,3.521,0,0,1-2.04-.534A2.144,2.144,0,0,1,46.517.147L48.108,0a1.109,1.109,0,0,0,.458.7,1.6,1.6,0,0,0,.913.238A1.647,1.647,0,0,0,50.413.7a.7.7,0,0,0,.354-.591.62.62,0,0,0-.229-.489,1.6,1.6,0,0,0-.7-.3l-1.18-.248a2.8,2.8,0,0,1-1.469-.7,1.712,1.712,0,0,1-.475-1.246,1.79,1.79,0,0,1,.35-1.109,2.27,2.27,0,0,1,.983-.73,3.828,3.828,0,0,1,1.462-.259,3.147,3.147,0,0,1,1.913.518A2.183,2.183,0,0,1,52.285-3.048Z"
            transform="translate(1400.02 451.963)"
          />
          <text
            id="Used_Units"
            data-name="Used Units"
            transform="translate(1401 436)"
            fontSize="10"
            fontFamily="Inter-Medium, Inter"
            fontWeight="500"
            letterSpacing="-0.047em"
          >
            <tspan x="0" y="0">
              Used Units
            </tspan>
          </text>
          <text
            id="Available_Units"
            data-name="Available Units"
            transform="translate(1351 521)"
            fill="#f0eaea"
            fontSize="10"
            fontFamily="Inter-Medium, Inter"
            fontWeight="500"
            letterSpacing="-0.047em"
          >
            <tspan x="0" y="0">
              Available Units
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
};

export default LineChart;
