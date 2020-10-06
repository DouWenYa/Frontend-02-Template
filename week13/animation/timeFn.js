var CubeBezier = function (point_start, point1, point2, point_end) {
  var p_start = { x: 0, y: 0 };
  var p_end = { x: 0, y: 0 };
  p_start = point_start;
  p_end = point_end;
  var p_crt1 = point1;
  var p_crt2 = point2;
  /**
   * 计算公式：
   *                  | 1  0  0   0|  |P0|
   * [1 t t*t  t*t*t] |-3  3  0   0|  |P1|
   *                  |3  -6  3   0|  |P2|
   *                  |-1  3  -3  1|  |p3|
   *
   * **/
  return function (t) {
    var _matrix1 = [1, t, t * t, t * t * t];
    var _matrix2 = [
      [1, 0, 0, 0]
      , [-3, 3, 0, 0]
      , [3, -6, 3, 0]
      , [-1, 3, -3, 1]
    ];

    var _matrix3 = [
      [p_start.x, p_start.y]
      , [p_crt1.x, p_crt1.y]
      , [p_crt2.x, p_crt2.y]
      , [p_end.x, p_end.y]
    ];
    var _matrix_tmp = [
      _matrix1[0] * _matrix2[0][0] + _matrix1[1] * _matrix2[1][0] + _matrix1[2] * _matrix2[2][0] + _matrix1[3] * _matrix2[3][0]
      , _matrix1[0] * _matrix2[0][1] + _matrix1[1] * _matrix2[1][1] + _matrix1[2] * _matrix2[2][1] + _matrix1[3] * _matrix2[3][1]
      , _matrix1[0] * _matrix2[0][2] + _matrix1[1] * _matrix2[1][2] + _matrix1[2] * _matrix2[2][2] + _matrix1[3] * _matrix2[3][2]
      , _matrix1[0] * _matrix2[0][3] + _matrix1[1] * _matrix2[1][3] + _matrix1[2] * _matrix2[2][3] + _matrix1[3] * _matrix2[3][3]
    ];

    var _matrix_final = [
      _matrix_tmp[0] * _matrix3[0][0] + _matrix_tmp[1] * _matrix3[1][0] + _matrix_tmp[2] * _matrix3[2][0] + _matrix_tmp[3] * _matrix3[3][0]
      , _matrix_tmp[0] * _matrix3[0][1] + _matrix_tmp[1] * _matrix3[1][1] + _matrix_tmp[2] * _matrix3[2][1] + _matrix_tmp[3] * _matrix3[3][1]
    ];

    var _res_point = {
      x: _matrix_final[0]
      , y: _matrix_final[1]
    };
    return _res_point;
  };
};

export const linear = v => v
export const ease = CubeBezier(25, .1, .25, 1)
export const easeIn = CubeBezier(.42, 0, 1, 1)
export const easeOut = CubeBezier(0, 0, .58, 1)
export const easeInOut = CubeBezier(.42, 0, .58, 1)
