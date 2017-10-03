export default function decisionTree(Media_Final, Faltas, Renda, CoefRendimento, Frequencia) {
if ( Media_Final <= 59.6299972534) {
   if ( Faltas <= 0.5) {
     if ( Media_Final <= 0.10000000149) {
       if ( Renda <= 1405.5) {
         return [    0,  1519,  1210]
       } else {
         if ( Renda <= 7027.5) {
           if ( Renda <= 3748.0) {
             if ( Renda <= 2342.5) {
               return [   0,  325,  333]
             } else {
               return [   0,  484,  492]
             }
           } else {
             return [   0,  338,  469]
           }
         } else {
           if ( Renda <= 14055.0) {
             return [   0,  239,  215]
           } else {
             return [  0,  92,  72]
           }
         }
       }
     } else {
       if ( Media_Final <= 21.0149993896) {
         if ( Renda <= 1405.5) {
           if ( CoefRendimento <= 12.9650001526) {
             if ( Media_Final <= 5.26999998093) {
               if ( Media_Final <= 3.98000001907) {
                 if ( CoefRendimento <= 2.78499984741) {
                   return [  0,   2,  15]
                 } else {
                   return [ 0,  0,  9]
                 }
               } else {
                 if ( Frequencia <= 4.32499980927) {
                   return [  0,   3,  10]
                 } else {
                   return [ 0,  5,  7]
                 }
               }
             } else {
               if ( Frequencia <= 11.0599994659) {
                 if ( Media_Final <= 9.94000053406) {
                   if ( Frequencia <= 8.34499931335) {
                     return [  0,   2,  27]
                   } else {
                     return [  0,   0,  16]
                   }
                 } else {
                   if ( CoefRendimento <= 10.5) {
                     return [  0,   6,  41]
                   } else {
                     return [ 0,  1,  9]
                   }
                 }
               } else {
                 if ( Frequencia <= 11.8699998856) {
                   return [ 0,  0,  4]
                 } else {
                   if ( Media_Final <= 12.4650001526) {
                     return [  0,   1,  23]
                   } else {
                     return [ 0,  0,  1]
                   }
                 }
               }
             }
           } else {
             if ( Frequencia <= 18.5) {
               if ( CoefRendimento <= 13.5) {
                 return [  0,   4,  11]
               } else {
                 if ( Media_Final <= 16.8549995422) {
                   if ( Frequencia <= 15.5) {
                     return [  0,   8,  32]
                   } else {
                     return [  0,   2,  23]
                   }
                 } else {
                   if ( Frequencia <= 17.0900001526) {
                     return [  0,   4,  12]
                   } else {
                     return [  0,   6,  24]
                   }
                 }
               }
             } else {
               if ( Media_Final <= 19.5) {
                 return [  0,  3,  19]
               } else {
                 if ( Media_Final <= 20.5) {
                   return [  0,  1,  10]
                 } else {
                   return [ 0, 1,  9]
                 }
               }
             }
           }
         } else {
           if ( Frequencia <= 5.85999965668) {
             return [  0,  0, 37]
           } else {
             if ( Frequencia <= 10.5) {
               if ( Renda <= 7027.5) {
                 if ( Media_Final <= 7.5) {
                   return [ 0, 0, 7]
                 } else {
                   if ( Renda <= 3748.0) {
                     return [  0,  2,  31]
                   } else {
                     return [ 0, 1,  5]
                   }
                 }
               } else {
                 return [ 0, 1,  2]
               }
             } else {
               if ( Frequencia <= 18.5) {
                 if ( Media_Final <= 16.9300003052) {
                   if ( Renda <= 3748.0) {
                     return [  0,  0, 60]
                   } else {
                     return [  0,  2,  42]
                   }
                 } else {
                   if ( Renda <= 2342.5) {
                     return [ 0, 1,  4]
                   } else {
                     return [  0,  1,  23]
                   }
                 }
               } else {
                 return [  0,  0, 21]
               }
             }
           }
         }
       } else {
         if ( Media_Final <= 52.3899993896) {
           if ( Media_Final <= 52.2799987793) {
             if ( Renda <= 1405.5) {
               if ( Media_Final <= 33.2700004578) {
                 if ( CoefRendimento <= 28.7099990845) {
                   return [   0,   0, 149]
                 } else {
                   return [  0,  1,  13]
                 }
               } else {
                 if ( Media_Final <= 33.9000015259) {
                   return [ 0, 3,  3]
                 } else {
                   if ( Media_Final <= 48.9199981689) {
                     return [   0,  11,  199]
                   } else {
                     return [  0,  0, 55]
                   }
                 }
               }
             } else {
               if ( CoefRendimento <= 28.5) {
                 return [   0,   0, 463]
               } else {
                 return [ 0, 1,  8]
               }
             }
           } else {
             return [ 0, 6,  0]
           }
         } else {
           return [   0,   0, 182]
         }
       }
     }
   } else {
     if ( CoefRendimento <= 0.574999988079) {
       if ( Faltas <= 19.5) {
         if ( Renda <= 2342.5) {
           if ( Faltas <= 4.5) {
             if ( Renda <= 1405.5) {
               if ( Faltas <= 1.5) {
                 return [ 0, 1,  3]
               } else {
                 if ( Faltas <= 3.5) {
                   if ( Faltas <= 2.5) {
                     return [  0, 28,  18]
                   } else {
                     return [ 0, 3,  0]
                   }
                 } else {
                   return [  0, 26,  27]
                 }
               }
             } else {
               if ( Faltas <= 3.5) {
                 if ( Faltas <= 2.5) {
                   return [  0, 10, 16]
                 } else {
                   return [ 0, 5,  1]
                 }
               } else {
                 return [  0,  5,  11]
               }
             }
           } else {
             if ( Faltas <= 15.5) {
               if ( Faltas <= 5.5) {
                 return [  0,  3,  16]
               } else {
                 if ( Media_Final <= 0.259999990463) {
                   if ( Renda <= 1405.5) {
                     return [   0,  93,  170]
                   } else {
                     return [  0, 26,  63]
                   }
                 } else {
                   return [ 0, 1,  0]
                 }
               }
             } else {
               if ( Faltas <= 16.5) {
                 if ( Renda <= 1405.5) {
                   return [  0,  6,  27]
                 } else {
                   return [ 0, 3,  6]
                 }
               } else {
                 if ( Renda <= 1405.5) {
                   if ( Faltas <= 18.5) {
                     return [  0,  5,  31]
                   } else {
                     return [ 0, 1,  2]
                   }
                 } else {
                   return [  0,  1,  15]
                 }
               }
             }
           }
         } else {
           if ( Renda <= 7027.5) {
             if ( Faltas <= 3.5) {
               if ( Faltas <= 2.5) {
                 if ( Renda <= 3748.0) {
                   if ( Faltas <= 1.5) {
                     return [ 0, 0, 1]
                   } else {
                     return [  0,  9,  18]
                   }
                 } else {
                   if ( Faltas <= 1.5) {
                     return [ 0, 1,  1]
                   } else {
                     return [  0,  5,  22]
                   }
                 }
               } else {
                 return [ 0, 6,  4]
               }
             } else {
               if ( Faltas <= 7.0) {
                 if ( Faltas <= 5.5) {
                   if ( Renda <= 3748.0) {
                     return [  0,  5,  17]
                   } else {
                     return [  0,  4,  21]
                   }
                 } else {
                   if ( Renda <= 3748.0) {
                     return [  0,  8,  16]
                   } else {
                     return [  0,  6,  18]
                   }
                 }
               } else {
                 if ( Faltas <= 13.5) {
                   if ( Faltas <= 12.5) {
                     return [  0, 16,  86]
                   } else {
                     return [ 0, 0, 2]
                   }
                 } else {
                   if ( Faltas <= 14.5) {
                     return [  0, 10, 19]
                   } else {
                     return [  0, 15,  65]
                   }
                 }
               }
             }
           } else {
             if ( Renda <= 14055.0) {
               if ( Faltas <= 10.5) {
                 if ( Faltas <= 3.5) {
                   return [  0,  4,  12]
                 } else {
                   if ( Faltas <= 5.0) {
                     return [ 0, 0, 9]
                   } else {
                     return [  0,  4,  27]
                   }
                 }
               } else {
                 return [  0,  0, 38]
               }
             } else {
               if ( Faltas <= 6.5) {
                 return [  0,  1,  16]
               } else {
                 if ( Faltas <= 7.5) {
                   return [ 0, 1,  0]
                 } else {
                   if ( Faltas <= 8.5) {
                     return [ 0, 1,  1]
                   } else {
                     return [  0,  8,  19]
                   }
                 }
               }
             }
           }
         }
       } else {
         if ( Faltas <= 30.5) {
           if ( Renda <= 1405.5) {
             if ( Faltas <= 28.5) {
               if ( Faltas <= 20.5) {
                 return [  0,  7,  33]
               } else {
                 if ( Faltas <= 21.5) {
                   return [  0,  0, 12]
                 } else {
                   if ( Faltas <= 25.5) {
                     return [  0,  7,  66]
                   } else {
                     return [  0, 11,  84]
                   }
                 }
               }
             } else {
               if ( Faltas <= 29.5) {
                 return [ 0, 2,  3]
               } else {
                 return [  0, 11,  56]
               }
             }
           } else {
             if ( Faltas <= 27.5) {
               if ( Faltas <= 25.5) {
                 if ( Faltas <= 24.5) {
                   if ( Renda <= 3748.0) {
                     return [   0,   7,  113]
                   } else {
                     return [   0,  10, 109]
                   }
                 } else {
                   return [  0,  3,  13]
                 }
               } else {
                 if ( Renda <= 3748.0) {
                   if ( Faltas <= 26.5) {
                     return [  0,  2,  23]
                   } else {
                     return [  0,  1,  21]
                   }
                 } else {
                   if ( Faltas <= 26.5) {
                     return [  0,  0, 27]
                   } else {
                     return [  0,  1,  13]
                   }
                 }
               }
             } else {
               if ( Renda <= 3748.0) {
                 if ( Faltas <= 28.5) {
                   if ( Renda <= 2342.5) {
                     return [  0,  2,  11]
                   } else {
                     return [  0,  1,  16]
                   }
                 } else {
                   if ( Renda <= 2342.5) {
                     return [  0,  2,  22]
                   } else {
                     return [  0,  6,  25]
                   }
                 }
               } else {
                 if ( Renda <= 7027.5) {
                   if ( Faltas <= 29.5) {
                     return [  0,  1,  19]
                   } else {
                     return [  0,  3,  32]
                   }
                 } else {
                   if ( Faltas <= 28.5) {
                     return [ 0, 2,  9]
                   } else {
                     return [  0,  2,  24]
                   }
                 }
               }
             }
           }
         } else {
           if ( Faltas <= 55.5) {
             if ( Faltas <= 50.5) {
               if ( Faltas <= 36.5) {
                 if ( Faltas <= 35.5) {
                   if ( Renda <= 1405.5) {
                     return [  0,  8,  95]
                   } else {
                     return [   0,   6,  167]
                   }
                 } else {
                   if ( Renda <= 3748.0) {
                     return [   0,  14,  115]
                   } else {
                     return [  0,  4,  55]
                   }
                 }
               } else {
                 if ( Renda <= 7027.5) {
                   if ( Renda <= 1405.5) {
                     return [   0,  10, 435]
                   } else {
                     return [   0,  20, 549]
                   }
                 } else {
                   if ( Faltas <= 45.5) {
                     return [   0,   5,  102]
                   } else {
                     return [  0,  5,  40]
                   }
                 }
               }
             } else {
               if ( Renda <= 1405.5) {
                 if ( Faltas <= 52.5) {
                   if ( Faltas <= 51.5) {
                     return [  0,  1,  28]
                   } else {
                     return [  0,  1,  53]
                   }
                 } else {
                   return [  0,  0, 87]
                 }
               } else {
                 return [   0,   0, 237]
               }
             }
           } else {
             if ( Faltas <= 60.5) {
               if ( Faltas <= 56.5) {
                 if ( Renda <= 1405.5) {
                   if ( Media_Final <= 0.10000000149) {
                     return [  0, 11,  38]
                   } else {
                     return [ 0, 0, 1]
                   }
                 } else {
                   if ( Renda <= 14055.0) {
                     return [  0,  6,  51]
                   } else {
                     return [ 0, 0, 2]
                   }
                 }
               } else {
                 if ( Faltas <= 59.5) {
                   if ( Renda <= 7027.5) {
                     return [   0,   3,  172]
                   } else {
                     return [  0,  2,  30]
                   }
                 } else {
                   if ( Renda <= 7027.5) {
                     return [   0,  35,  319]
                   } else {
                     return [  0, 13,  49]
                   }
                 }
               }
             } else {
               if ( Faltas <= 77.5) {
                 if ( Faltas <= 72.5) {
                   if ( Renda <= 1405.5) {
                     return [   0,  18,  263]
                   } else {
                     return [   0,  11,  404]
                   }
                 } else {
                   if ( Renda <= 7027.5) {
                     return [   0,   1,  217]
                   } else {
                     return [  0,  3,  38]
                   }
                 }
               } else {
                 if ( Faltas <= 80.5) {
                   if ( Renda <= 7027.5) {
                     return [   0,  26,  234]
                   } else {
                     return [  0,  2,  43]
                   }
                 } else {
                   if ( Renda <= 1405.5) {
                     return [  0,  0, 74]
                   } else {
                     return [   0,   9,  122]
                   }
                 }
               }
             }
           }
         }
       }
     } else {
       if ( Media_Final <= 52.3899993896) {
         if ( Frequencia <= 52.1749992371) {
           if ( Faltas <= 9.5) {
             if ( Frequencia <= 21.1599998474) {
               if ( Faltas <= 3.5) {
                 if ( Frequencia <= 11.5) {
                   return [  0,  0, 40]
                 } else {
                   if ( Media_Final <= 16.5) {
                     return [  0,  4,  24]
                   } else {
                     return [  0,  2,  36]
                   }
                 }
               } else {
                 if ( Faltas <= 5.5) {
                   return [  0,  0, 63]
                 } else {
                   if ( CoefRendimento <= 19.5) {
                     return [   0,   4,  172]
                   } else {
                     return [  0,  0, 29]
                   }
                 }
               }
             } else {
               if ( Faltas <= 3.5) {
                 return [   0,   0, 281]
               } else {
                 if ( Media_Final <= 27.5) {
                   return [  0,  0, 83]
                 } else {
                   if ( Frequencia <= 31.5) {
                     return [  0,  2,  72]
                   } else {
                     return [   0,   4,  476]
                   }
                 }
               }
             }
           } else {
             if ( Media_Final <= 43.5) {
               if ( CoefRendimento <= 23.5) {
                 if ( CoefRendimento <= 22.9300003052) {
                   if ( CoefRendimento <= 20.0450000763) {
                     return [    0,   19,  2389]
                   } else {
                     return [   0,   0, 154]
                   }
                 } else {
                   if ( Renda <= 3748.0) {
                     return [  0,  0, 36]
                   } else {
                     return [ 0, 2,  8]
                   }
                 }
               } else {
                 if ( Renda <= 7027.5) {
                   return [   0,   0, 451]
                 } else {
                   if ( CoefRendimento <= 27.5) {
                     return [  0,  0, 49]
                   } else {
                     return [  0,  1,  19]
                   }
                 }
               }
             } else {
               return [   0,   0, 374]
             }
           }
         } else {
           return [ 0, 2,  0]
         }
       } else {
         return [   0,   0, 420]
       }
     }
   }
 } else {
   if ( Renda <= 1405.5) {
     if ( Faltas <= 0.5) {
       if ( Media_Final <= 96.5) {
         if ( Frequencia <= 75.6699981689) {
           if ( CoefRendimento <= 73.4100036621) {
             if ( Media_Final <= 61.3799972534) {
               if ( CoefRendimento <= 32.0200004578) {
                 return [ 502,    1,   0]
               } else {
                 return [ 149,    0,   0]
               }
             } else {
               if ( Frequencia <= 61.8799972534) {
                 return [ 0, 1,  0]
               } else {
                 if ( Frequencia <= 62.5950012207) {
                   return [ 171,   0,   0]
                 } else {
                   if ( Frequencia <= 62.9049987793) {
                     return [ 1,  1,  0]
                   } else {
                     return [ 1684,     6,     0]
                   }
                 }
               }
             }
           } else {
             return [ 379,    0,   0]
           }
         } else {
           if ( CoefRendimento <= 79.9049987793) {
             if ( CoefRendimento <= 79.4049987793) {
               if ( Frequencia <= 76.5) {
                 return [ 181,   1,   0]
               } else {
                 if ( Media_Final <= 78.3849945068) {
                   if ( Frequencia <= 77.1450042725) {
                     return [ 128,    3,    0]
                   } else {
                     return [ 189,    3,    0]
                   }
                 } else {
                   if ( Frequencia <= 78.9550018311) {
                     return [ 4,  0, 0]
                   } else {
                     return [ 144,    1,   0]
                   }
                 }
               }
             } else {
               return [ 0, 1,  0]
             }
           } else {
             if ( Media_Final <= 83.5) {
               if ( Media_Final <= 81.5) {
                 if ( Frequencia <= 80.9649963379) {
                   if ( Media_Final <= 80.3249969482) {
                     return [ 393,    1,   0]
                   } else {
                     return [ 2,  0, 0]
                   }
                 } else {
                   return [ 159,    1,   0]
                 }
               } else {
                 return [ 332,    0,   0]
               }
             } else {
               if ( Media_Final <= 92.7400054932) {
                 if ( CoefRendimento <= 92.3450012207) {
                   if ( Media_Final <= 88.125) {
                     return [ 916,    9,    0]
                   } else {
                     return [ 716,    2,    0]
                   }
                 } else {
                   return [ 2,  4,  0]
                 }
               } else {
                 if ( CoefRendimento <= 93.8899993896) {
                   return [ 131,   0,   0]
                 } else {
                   if ( Media_Final <= 95.6450042725) {
                     return [ 251,   1,   0]
                   } else {
                     return [ 120,   1,   0]
                   }
                 }
               }
             }
           }
         }
       } else {
         return [ 755,    0,   0]
       }
     } else {
       if ( Media_Final <= 92.5) {
         if ( Frequencia <= 77.5) {
           if ( CoefRendimento <= 71.5) {
             if ( Media_Final <= 61.3799972534) {
               return [ 849,    0,   0]
             } else {
               if ( CoefRendimento <= 61.8799972534) {
                 return [ 1,  1,  0]
               } else {
                 if ( Faltas <= 7.5) {
                   if ( Frequencia <= 64.5) {
                     return [ 366,    1,   0]
                   } else {
                     return [ 892,    0,   0]
                   }
                 } else {
                   if ( Faltas <= 10.5) {
                     return [ 501,   3,    0]
                   } else {
                     return [ 825,    1,   0]
                   }
                 }
               }
             }
           } else {
             return [ 1766,     0,    0]
           }
         } else {
           if ( Faltas <= 3.5) {
             return [ 1002,     0,    0]
           } else {
             if ( Faltas <= 29.5) {
               if ( Faltas <= 15.5) {
                 if ( Faltas <= 14.5) {
                   if ( CoefRendimento <= 83.5) {
                     return [ 1076,     2,     0]
                   } else {
                     return [ 1402,     8,     0]
                   }
                 } else {
                   if ( Frequencia <= 81.5) {
                     return [ 19,   1,  0]
                   } else {
                     return [ 34,   0,  0]
                   }
                 }
               } else {
                 return [ 371,   0,   0]
               }
             } else {
               if ( CoefRendimento <= 79.4049987793) {
                 return [ 10,  1,  0]
               } else {
                 return [ 36,   0,  0]
               }
             }
           }
         }
       } else {
         return [ 912,    0,   0]
       }
     }
   } else {
     if ( Faltas <= 3.5) {
       if ( Frequencia <= 92.2550048828) {
         if ( Renda <= 3748.0) {
           if ( Frequencia <= 88.9000015259) {
             if ( Frequencia <= 88.4000015259) {
               if ( CoefRendimento <= 83.5) {
                 if ( Media_Final <= 73.5) {
                   if ( Media_Final <= 68.6199951172) {
                     return [ 1616,     2,     0]
                   } else {
                     return [ 783,    5,    0]
                   }
                 } else {
                   return [ 1826,     0,    0]
                 }
               } else {
                 if ( Renda <= 2342.5) {
                   if ( Faltas <= 2.5) {
                     return [ 346,    4,    0]
                   } else {
                     return [ 31,  0,  0]
                   }
                 } else {
                   if ( CoefRendimento <= 84.5) {
                     return [ 104,    0,   0]
                   } else {
                     return [ 387,    2,    0]
                   }
                 }
               }
             } else {
               return [ 1,  1,  0]
             }
           } else {
             return [ 743,    0,   0]
           }
         } else {
           if ( Media_Final <= 91.5) {
             if ( Faltas <= 0.5) {
               if ( Renda <= 14055.0) {
                 if ( Frequencia <= 69.5) {
                   return [ 927,    0,   0]
                 } else {
                   if ( CoefRendimento <= 70.3499984741) {
                     return [ 154,    1,   0]
                   } else {
                     return [  parseFloat(2.07700000e+03),   parseFloat(1.00000000e+00),   parseFloat(0.00000000e+00)]
                   }
                 }
               } else {
                 if ( Media_Final <= 60.5) {
                   return [ 37,   1,  0]
                 } else {
                   return [ 264,    0,   0]
                 }
               }
             } else {
               return [ 1458,     0,    0]
             }
           } else {
             if ( Faltas <= 2.5) {
               return [ 118,    0,   0]
             } else {
               return [ 15,   1,  0]
             }
           }
         }
       } else {
         return [ 2161,    0,    0]
       }
     } else {
       if ( Renda <= 2342.5) {
         if ( Faltas <= 10.5) {
           return [ 1837,     0,    0]
         } else {
           if ( Media_Final <= 74.5) {
             if ( Faltas <= 11.5) {
               return [ 15,   1,  0]
             } else {
               if ( Faltas <= 17.5) {
                 return [ 313,    0,   0]
               } else {
                 if ( Faltas <= 20.5) {
                   if ( Frequencia <= 73.5) {
                     return [ 86,   1,  0]
                   } else {
                     return [ 5,  1,  0]
                   }
                 } else {
                   return [ 139,    0,   0]
                 }
               }
             }
           } else {
             return [ 500,   0,   0]
           }
         }
       } else {
         return [ 10718,      0,     0]
       }
     }
   }
 }
}