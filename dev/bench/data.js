window.BENCHMARK_DATA = {
  "lastUpdate": 1702074265740,
  "repoUrl": "https://github.com/cocotb/cocotb",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "cocotb",
            "username": "cocotb"
          },
          "committer": {
            "name": "cocotb",
            "username": "cocotb"
          },
          "id": "7a41bc3e0fc60014a183a474a62e9fa9f902d614",
          "message": "CI: Use elevated permissions to push benchmark results",
          "timestamp": "2023-11-02T02:23:26Z",
          "url": "https://github.com/cocotb/cocotb/pull/3476/commits/7a41bc3e0fc60014a183a474a62e9fa9f902d614"
        },
        "date": 1698919119843,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13465609426012765,
            "unit": "iter/sec",
            "range": "stddev: 0.04582213319345109",
            "extra": "mean: 7.426325600000007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.331497535644039,
            "unit": "iter/sec",
            "range": "stddev: 0.002992425361321056",
            "extra": "mean: 428.90888140002517 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "cocotb",
            "username": "cocotb"
          },
          "committer": {
            "name": "cocotb",
            "username": "cocotb"
          },
          "id": "5c2acf96ebc44b4b71975938528e634d7e038d87",
          "message": "CI: Use elevated permissions to push benchmark results",
          "timestamp": "2023-11-02T02:23:26Z",
          "url": "https://github.com/cocotb/cocotb/pull/3476/commits/5c2acf96ebc44b4b71975938528e634d7e038d87"
        },
        "date": 1698920008134,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07946932032709786,
            "unit": "iter/sec",
            "range": "stddev: 0.07951111060773151",
            "extra": "mean: 12.583472412799972 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 1.5359861469679563,
            "unit": "iter/sec",
            "range": "stddev: 0.004729592444382627",
            "extra": "mean: 651.0475384000074 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "63ac9586640965780707863a272c42b2c724147d",
          "message": "CI: Use a stable GHDL version for performance benchmarks\n\nUse the latest stable version of GHDL for our performance benchmarks to\nget predictable outputs.",
          "timestamp": "2023-11-03T13:50:11+01:00",
          "tree_id": "11cd2e73122aca648bdf5cd7da7b81921079d74e",
          "url": "https://github.com/cocotb/cocotb/commit/63ac9586640965780707863a272c42b2c724147d"
        },
        "date": 1699016044695,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14084740500993126,
            "unit": "iter/sec",
            "range": "stddev: 0.011266289058841018",
            "extra": "mean: 7.0998823154000545 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.4085062660906917,
            "unit": "iter/sec",
            "range": "stddev: 0.000792584676152146",
            "extra": "mean: 415.19509999993716 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "f13b124e86006c40b7f66ac29d9fc64ddbf57667",
          "message": "Fallback to type().__name__ when wrapped coroutine object has no __name__ attribute (such as a class derived from collections.abc.Coroutine)",
          "timestamp": "2023-11-03T12:16:03-07:00",
          "tree_id": "450222855cb048b28519b9eefe62a11cb6b02587",
          "url": "https://github.com/cocotb/cocotb/commit/f13b124e86006c40b7f66ac29d9fc64ddbf57667"
        },
        "date": 1699039142248,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18162893047628711,
            "unit": "iter/sec",
            "range": "stddev: 0.023689923595402222",
            "extra": "mean: 5.505730818200004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.0919631754481998,
            "unit": "iter/sec",
            "range": "stddev: 0.0013498203309612563",
            "extra": "mean: 323.4191170000088 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0034d685d8378b59ff1e1f3d504b50b8da268efd",
          "message": "Make Trigger.prime and Trigger.unprime private methods",
          "timestamp": "2023-11-04T10:35:02-05:00",
          "tree_id": "d8329cb5931c582b8b4ffce9eba89fc22276fbc0",
          "url": "https://github.com/cocotb/cocotb/commit/0034d685d8378b59ff1e1f3d504b50b8da268efd"
        },
        "date": 1699112335443,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1356556926677954,
            "unit": "iter/sec",
            "range": "stddev: 0.04750975131391103",
            "extra": "mean: 7.371603655799987 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.3717809806080163,
            "unit": "iter/sec",
            "range": "stddev: 0.0021173060131959675",
            "extra": "mean: 421.6240910000238 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "911031697b61763219bdea0d8d423cb787da0d49",
          "message": "CI: Only attempt to push the benchmark on master\n\nPR builds from a fork fail due to secrets not being available. These\nsecrets are not available by design, so let's avoid running the step\naltogether.\n\nError message:\n```\nRun actions/create-github-app-token@v1\n  with:\n    owner: cocotb\n    repositories: cocotb-benchmark-results\n  env:\n    pythonLocation: /opt/hostedtoolcache/Python/3.8.18/x64\n    PKG_CONFIG_PATH: /opt/hostedtoolcache/Python/3.8.18/x64/lib/pkgconfig\n    Python_ROOT_DIR: /opt/hostedtoolcache/Python/3.8.18/x64\n    Python2_ROOT_DIR: /opt/hostedtoolcache/Python/3.8.18/x64\n    Python3_ROOT_DIR: /opt/hostedtoolcache/Python/3.8.18/x64\n    LD_LIBRARY_PATH: /opt/hostedtoolcache/Python/3.8.18/x64/lib\n/home/runner/work/_actions/actions/create-github-app-token/v1/dist/main.cjs:10116\n  throw new Error(\"Input required and not supplied: app-id\");\n  ^\n\nError: Input required and not supplied: app-id\n    at Object.<anonymous> (/home/runner/work/_actions/actions/create-github-app-token/v1/dist/main.cjs:10116:9)\n    at Module._compile (node:internal/modules/cjs/loader:1241:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)\n    at Module.load (node:internal/modules/cjs/loader:1091:32)\n    at Module._load (node:internal/modules/cjs/loader:938:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)\n    at node:internal/main/run_main_module:23:47\n```",
          "timestamp": "2023-11-05T11:31:17+01:00",
          "tree_id": "fcd32b200f1029623ed2e63fe9cebd97c1f65c52",
          "url": "https://github.com/cocotb/cocotb/commit/911031697b61763219bdea0d8d423cb787da0d49"
        },
        "date": 1699180523779,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13439441446457598,
            "unit": "iter/sec",
            "range": "stddev: 0.036363386333450834",
            "extra": "mean: 7.440785422399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.3313683938811813,
            "unit": "iter/sec",
            "range": "stddev: 0.0003946838160965137",
            "extra": "mean: 428.9326399999936 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "38434295fc9aeacbeb976a831514e5170ad32c18",
          "message": "Fix typing on cocotb.test",
          "timestamp": "2023-11-05T20:46:39-06:00",
          "tree_id": "d6f44309033d927f452aaa06e9cf501db26b7c6d",
          "url": "https://github.com/cocotb/cocotb/commit/38434295fc9aeacbeb976a831514e5170ad32c18"
        },
        "date": 1699239425379,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.11451758776460515,
            "unit": "iter/sec",
            "range": "stddev: 0.08524866935281233",
            "extra": "mean: 8.732283132400017 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 1.8351594387070616,
            "unit": "iter/sec",
            "range": "stddev: 0.021404071163333312",
            "extra": "mean: 544.9117820000083 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "dc21559d478fc5c76470446328d28e9dc5d0f8e8",
          "message": "Improve error message\n\nCo-authored-by: Marlon James <marlon.james@gmail.com>",
          "timestamp": "2023-11-05T21:30:47-06:00",
          "tree_id": "768f956b0eb8da6d297ed3b7207d7771b3620005",
          "url": "https://github.com/cocotb/cocotb/commit/dc21559d478fc5c76470446328d28e9dc5d0f8e8"
        },
        "date": 1699241690990,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13282733464362814,
            "unit": "iter/sec",
            "range": "stddev: 0.09356396965537105",
            "extra": "mean: 7.528570852400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.2511833021984895,
            "unit": "iter/sec",
            "range": "stddev: 0.0022322529163587915",
            "extra": "mean: 444.2108285999666 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a4272cdf5fa6de48a25355b7b28305a49a13a090",
          "message": "Fix issues with documentation generation",
          "timestamp": "2023-11-06T07:05:52-06:00",
          "tree_id": "aac8131fb313fd38199d08c79835a970cce91e8a",
          "url": "https://github.com/cocotb/cocotb/commit/a4272cdf5fa6de48a25355b7b28305a49a13a090"
        },
        "date": 1699276229705,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1176716997813752,
            "unit": "iter/sec",
            "range": "stddev: 0.12723528215733432",
            "extra": "mean: 8.498220063600012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 1.997123392195719,
            "unit": "iter/sec",
            "range": "stddev: 0.006496430909044079",
            "extra": "mean: 500.72018779999325 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d9f8133367930fca3182a23d69740940517b4256",
          "message": "Move to src/ project infrastructure",
          "timestamp": "2023-11-06T08:21:30-06:00",
          "tree_id": "c5f841c5528b6d3c55e8233bdb19bb2fee749faf",
          "url": "https://github.com/cocotb/cocotb/commit/d9f8133367930fca3182a23d69740940517b4256"
        },
        "date": 1699280670464,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18232303989805998,
            "unit": "iter/sec",
            "range": "stddev: 0.018877945163629197",
            "extra": "mean: 5.484770331599987 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.11960681399112,
            "unit": "iter/sec",
            "range": "stddev: 0.0018121469408723667",
            "extra": "mean: 320.5532170000083 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d47ee4fd76ed004086144138615fe3485e5960e",
          "message": "Rename documentation/ to the more common docs/ (#3486)",
          "timestamp": "2023-11-06T18:54:43+01:00",
          "tree_id": "d114eeb99bba865a086225a39c3f74594bcf4aa8",
          "url": "https://github.com/cocotb/cocotb/commit/1d47ee4fd76ed004086144138615fe3485e5960e"
        },
        "date": 1699293473483,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1765411052889215,
            "unit": "iter/sec",
            "range": "stddev: 0.09136616855893866",
            "extra": "mean: 5.664403190199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.956770958926801,
            "unit": "iter/sec",
            "range": "stddev: 0.0023354992256600753",
            "extra": "mean: 338.20678499999985 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e46334519276a87f1b61704f985a97632830e5b1",
          "message": "Use a consistent seed in tests/benchmark.py (#3489)",
          "timestamp": "2023-11-07T10:27:17+01:00",
          "tree_id": "5802a9b719d436dac723ca2e56f1c19f085d72be",
          "url": "https://github.com/cocotb/cocotb/commit/e46334519276a87f1b61704f985a97632830e5b1"
        },
        "date": 1699349416425,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.17924472922232343,
            "unit": "iter/sec",
            "range": "stddev: 0.05101358419336057",
            "extra": "mean: 5.578964605199997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.06901189327067,
            "unit": "iter/sec",
            "range": "stddev: 0.0026887425716175294",
            "extra": "mean: 325.8377727999914 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "2294011c94bb19b48aabc74f229eee977c5e554e",
          "message": "Update scheduler to use f-strings",
          "timestamp": "2023-11-07T09:49:57-08:00",
          "tree_id": "a6eb305c800dd5bae189b0b50e1320fe04d2cb62",
          "url": "https://github.com/cocotb/cocotb/commit/2294011c94bb19b48aabc74f229eee977c5e554e"
        },
        "date": 1699379576832,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18364294825056834,
            "unit": "iter/sec",
            "range": "stddev: 0.04804460724635621",
            "extra": "mean: 5.445349301600015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.143706549193259,
            "unit": "iter/sec",
            "range": "stddev: 0.0013548058080076297",
            "extra": "mean: 318.0958477999866 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "3467ee5420bdef8a981bd6914bce30f258fe7131",
          "message": "Aldec: Pass VPI library to Verilog compile\n\nAldec suggests passing the VPI library to the Verilog compile step, as\nthe manual explains:\n\n---\nVerilog Compilation and PLI/VPI Applications\n\nPLI/VPI applications that contain functions returning values to the Verilog\nsource code must be visible not only to the simulator but to the Verilog compiler\nas well. If the type or the size of the value returned by a PLI/VPI function\nand used in Verilog code changes, you have to recompile the Verilog source files.\n\nThe visibility of PLI/VPI applications also allows the Verilog compiler to perform\nadditional syntax checks. For example, the compiler will be able to detect that a\nuser task defined in the PLI/VPI library is invoked in the Verilog source code\nas if it were a function. (The compiler will report an error in such situation.)\nIf the PLI/VPI library is not visible to the Verilog compiler, the compiler will\nonly be able to print a warning about using a non-standard system function.\n---\n\nPreviously, we passed a dummy library `libgpi`, which makes no real\nsense and is probably a leftover from a previous refactor? Remove that,\nand pass the real library instead consistently in the Makefile and in\nour runner.",
          "timestamp": "2023-11-07T19:31:12+01:00",
          "tree_id": "599a19f37a8c3a38f2f08948419db9a7180e19c5",
          "url": "https://github.com/cocotb/cocotb/commit/3467ee5420bdef8a981bd6914bce30f258fe7131"
        },
        "date": 1699382054004,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.17943266871934216,
            "unit": "iter/sec",
            "range": "stddev: 0.058755885328367834",
            "extra": "mean: 5.573121144200002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.9714611834698452,
            "unit": "iter/sec",
            "range": "stddev: 0.009562837242777901",
            "extra": "mean: 336.53476799999 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "a26bb7b3d2ede1ddca9521808e97cc5d52b44191",
          "message": "nox: Remove editable install of cocotb from create_env_for_docs_build()\n\nInstead, for each session, install normally from source unless\nan editable install is required.",
          "timestamp": "2023-11-07T12:51:19-08:00",
          "tree_id": "b34a6b9b259cc4e59a0e084cca9048bd261aa31a",
          "url": "https://github.com/cocotb/cocotb/commit/a26bb7b3d2ede1ddca9521808e97cc5d52b44191"
        },
        "date": 1699390462269,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.17884012663226603,
            "unit": "iter/sec",
            "range": "stddev: 0.04723057553615248",
            "extra": "mean: 5.591586288999986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.039368170601085,
            "unit": "iter/sec",
            "range": "stddev: 0.0028173037803238808",
            "extra": "mean: 329.0157505999787 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "8015f1d5dda6b2f11d189e986805e9de2825a950",
          "message": "CI: Use the latest icarus release\n\nv12 of Icarus Verilog went out in June. Update to this version, which is\nalso newer than the git commit we used in some places.",
          "timestamp": "2023-11-07T22:12:57+01:00",
          "tree_id": "bdae4f02840e3819ba87db0c00b010980dfcf897",
          "url": "https://github.com/cocotb/cocotb/commit/8015f1d5dda6b2f11d189e986805e9de2825a950"
        },
        "date": 1699391760420,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18824869411503428,
            "unit": "iter/sec",
            "range": "stddev: 0.06454867784974207",
            "extra": "mean: 5.312121843400007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.0655963210684947,
            "unit": "iter/sec",
            "range": "stddev: 0.0005626108326412268",
            "extra": "mean: 326.20080900001085 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ea2ba58325231218614a0c4ed95af5bd5cf96b45",
          "message": "Remove task.__iter__ as we don't support yield statements in coroutines anymore",
          "timestamp": "2023-11-07T17:14:12-06:00",
          "tree_id": "6eb23870f9107d7bc27037b556d4ac5c81e1db37",
          "url": "https://github.com/cocotb/cocotb/commit/ea2ba58325231218614a0c4ed95af5bd5cf96b45"
        },
        "date": 1699399033677,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18053186894039377,
            "unit": "iter/sec",
            "range": "stddev: 0.05510189683964468",
            "extra": "mean: 5.539188210199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.1198224888391515,
            "unit": "iter/sec",
            "range": "stddev: 0.00243840972749789",
            "extra": "mean: 320.53105700000515 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "667be403f11043eacc032df4f3cc3ad89a82c2fe",
          "message": "Riviera-PRO: Always exit the compilation step\n\nRiviera (\"vsimsa\") automatically switches to \"batch\" mode when output is\nredirected, and stays in interactive mode otherwise. In our Makefiles,\nwe always redirect the output and hence produce predictable behavior. In\nour runner, we don't redirect output. Depending on how tests get run,\nthe output then gets redirected, or not: in CI, output always gets\nredirected, hence the alog/acom commands terminate. In manual testing in\nan interactive terminal, that's not the case and the tests are stuck.\n\nProvide predictable behavior by always exiting at the end.",
          "timestamp": "2023-11-08T08:39:37+01:00",
          "tree_id": "65ade3a9576c51bbaad82d059d20b4041bc30459",
          "url": "https://github.com/cocotb/cocotb/commit/667be403f11043eacc032df4f3cc3ad89a82c2fe"
        },
        "date": 1699429364493,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.17973322674884593,
            "unit": "iter/sec",
            "range": "stddev: 0.03820738592728261",
            "extra": "mean: 5.563801518999997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.9718569409337676,
            "unit": "iter/sec",
            "range": "stddev: 0.0051381611850452175",
            "extra": "mean: 336.48995219998596 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "52171eed34f6508bab0ad422b2f676ddcd0716f0",
          "message": "Scheduler: remove context manager tracking _current_task\n\nWith fork() removed, the scheduler is no longer re-entrant,\nand no task should be scheduled while another is already running.\n\nThere is an added benefit of performance increase.\nIn testing, runtime reduction ranged from ~2% for matrix_multiplier,\nto ~15% on some workloads involving a very high number of task switches.",
          "timestamp": "2023-11-08T08:01:00-08:00",
          "tree_id": "ceb2b3dd6cc225807f0c9248c6564fb74d103ca1",
          "url": "https://github.com/cocotb/cocotb/commit/52171eed34f6508bab0ad422b2f676ddcd0716f0"
        },
        "date": 1699459605010,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09535068890584378,
            "unit": "iter/sec",
            "range": "stddev: 0.2564275597418212",
            "extra": "mean: 10.487601206400019 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 1.5982872247761515,
            "unit": "iter/sec",
            "range": "stddev: 0.01953752987999734",
            "extra": "mean: 625.6697698000153 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "801a07c1b6c200f0f8612ef66fe18d05031cd3e6",
          "message": "Replace flake8, black and isort with ruff and ruff-format (#3499)\n\nReplace flake8, black and isort with ruff and ruff-format\r\n\r\nRun ruff-format on the cocotb code",
          "timestamp": "2023-11-09T19:55:06+01:00",
          "tree_id": "ec1e0509a2702400b8ac13c2ca58b32a0840b509",
          "url": "https://github.com/cocotb/cocotb/commit/801a07c1b6c200f0f8612ef66fe18d05031cd3e6"
        },
        "date": 1699556284401,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18933746745745877,
            "unit": "iter/sec",
            "range": "stddev: 0.046624162435926694",
            "extra": "mean: 5.28157481679998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.066290820116428,
            "unit": "iter/sec",
            "range": "stddev: 0.0015428215366051776",
            "extra": "mean: 326.12692620004964 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8e189cb675a7d543b0b8cf6a10884362b2595a9b",
          "message": "Use __name__ in lazy_property to get it to work correctly",
          "timestamp": "2023-11-10T13:15:35-06:00",
          "tree_id": "0aee4f6f4ad98c7b7da3e14dd3fb61f52ac7f519",
          "url": "https://github.com/cocotb/cocotb/commit/8e189cb675a7d543b0b8cf6a10884362b2595a9b"
        },
        "date": 1699643917107,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18896312206416435,
            "unit": "iter/sec",
            "range": "stddev: 0.05073418073793825",
            "extra": "mean: 5.292037880600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.09379633944237,
            "unit": "iter/sec",
            "range": "stddev: 0.0020622558159149955",
            "extra": "mean: 323.2274817999951 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cmarqu42@gmail.com",
            "name": "Colin Marquardt",
            "username": "cmarqu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32b8581c8434fbadf2ea6ce35cd97e44b9fc9a45",
          "message": "Fix watching code changes for doc live preview (#3511)\n\nRequired since we now use the src/ layout.",
          "timestamp": "2023-11-14T23:33:30+01:00",
          "tree_id": "95c64f83408cd5204f20672bb05a708c38dcf520",
          "url": "https://github.com/cocotb/cocotb/commit/32b8581c8434fbadf2ea6ce35cd97e44b9fc9a45"
        },
        "date": 1700001389858,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18836020316626784,
            "unit": "iter/sec",
            "range": "stddev: 0.030901393112237704",
            "extra": "mean: 5.308977072600032 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.070172176403713,
            "unit": "iter/sec",
            "range": "stddev: 0.002964539008072236",
            "extra": "mean: 325.71463180001956 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nick@nickg.me.uk",
            "name": "Nick Gasson",
            "username": "nickg"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3308a868ab2a4e73ce1dc4da72317c30e890e154",
          "message": "Fix passing generics from NVC makefile\n\nThis was reported in nickg/nvc#797. The -g option should be passed when\nelaborating rather than when running the simulation.\n\nTo avoid adding another argument variable I just split SIM_ARGS into\nthose that need to be passed to -e and those that need to be passed to\n-r.",
          "timestamp": "2023-11-19T21:38:04-06:00",
          "tree_id": "1da8453c9b8e298d89de715e7e2da1708e54f8c7",
          "url": "https://github.com/cocotb/cocotb/commit/3308a868ab2a4e73ce1dc4da72317c30e890e154"
        },
        "date": 1700451672241,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18997186662553658,
            "unit": "iter/sec",
            "range": "stddev: 0.04927823307675141",
            "extra": "mean: 5.263937328000003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.123259585068714,
            "unit": "iter/sec",
            "range": "stddev: 0.0008995568198798116",
            "extra": "mean: 320.1783177999914 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nick@nickg.me.uk",
            "name": "Nick Gasson",
            "username": "nickg"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "15458a612ffc746debff838add761bc5675ae49f",
          "message": "Add NVC support to runner.py",
          "timestamp": "2023-11-20T10:26:28-06:00",
          "tree_id": "bc5eb03c3154e7446f64d34cc0b6440e7e39fbcd",
          "url": "https://github.com/cocotb/cocotb/commit/15458a612ffc746debff838add761bc5675ae49f"
        },
        "date": 1700497774882,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18595316303627496,
            "unit": "iter/sec",
            "range": "stddev: 0.039698402826970965",
            "extra": "mean: 5.377698253 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 2.949684491953821,
            "unit": "iter/sec",
            "range": "stddev: 0.001927758762722808",
            "extra": "mean: 339.0193095999962 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3519c83d86ff9c12bffb16db16a6c1c55c8b791b",
          "message": "Fix RuntimeWarning of unwatched task in test_scheduler",
          "timestamp": "2023-11-20T10:35:54-06:00",
          "tree_id": "a7ebd10732cf54bfac899b7e4311c92b12b2ed6a",
          "url": "https://github.com/cocotb/cocotb/commit/3519c83d86ff9c12bffb16db16a6c1c55c8b791b"
        },
        "date": 1700498329183,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1907890201679155,
            "unit": "iter/sec",
            "range": "stddev: 0.032297030187647666",
            "extra": "mean: 5.241391769399985 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.138852207965563,
            "unit": "iter/sec",
            "range": "stddev: 0.0009928133005987516",
            "extra": "mean: 318.5877937999976 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b26f135b4b484f7d792e6799358be89e0b8c4141",
          "message": "Refactor coverage stop and save for cocotb internals",
          "timestamp": "2023-11-20T10:39:28-06:00",
          "tree_id": "8e8b11989f204420794b7af6b8ff2a8a0497b75d",
          "url": "https://github.com/cocotb/cocotb/commit/b26f135b4b484f7d792e6799358be89e0b8c4141"
        },
        "date": 1700498628225,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.20197497898186562,
            "unit": "iter/sec",
            "range": "stddev: 0.01593409391443916",
            "extra": "mean: 4.951108325600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.4137969950591374,
            "unit": "iter/sec",
            "range": "stddev: 0.0003504971794216354",
            "extra": "mean: 292.9289589999996 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte512@gmail.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "642d31237694e6112058ba053e25ae25b295e12a",
          "message": "add cocotb.parameterize() similar to nox.parameterize() (#3513)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>\r\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>\r\nCo-authored-by: Colin Marquardt <cmarqu42@gmail.com>",
          "timestamp": "2023-11-22T16:29:43-06:00",
          "tree_id": "7fdea9614f05d9dd45b57281e10c049f7030a5d8",
          "url": "https://github.com/cocotb/cocotb/commit/642d31237694e6112058ba053e25ae25b295e12a"
        },
        "date": 1700692369260,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18477373859979487,
            "unit": "iter/sec",
            "range": "stddev: 0.051200564649915334",
            "extra": "mean: 5.412024498599988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.012042108808959,
            "unit": "iter/sec",
            "range": "stddev: 0.0019380714545982976",
            "extra": "mean: 332.00067059999583 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1b9ba0146dde44131cf8c59845fb23b010f5eb4",
          "message": "Fix docs (#3521)",
          "timestamp": "2023-11-22T17:16:42-06:00",
          "tree_id": "054e11f44fb52ac38c4e500049448e3022f4215e",
          "url": "https://github.com/cocotb/cocotb/commit/d1b9ba0146dde44131cf8c59845fb23b010f5eb4"
        },
        "date": 1700695202499,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18869494602695308,
            "unit": "iter/sec",
            "range": "stddev: 0.07263411266717139",
            "extra": "mean: 5.299559002800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_ghdl",
            "value": 3.094920916247303,
            "unit": "iter/sec",
            "range": "stddev: 0.00228843286533503",
            "extra": "mean: 323.1100331999869 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43395876733905367a28a2aa7e0db1fab2f136ad",
          "message": "Use NVC in benchmark instead of GHDL (#3528)\n\nGHDL can't run the matrix_multiplier, so there never was any sense in\r\nusing it in the benchmark.",
          "timestamp": "2023-11-24T11:07:05-06:00",
          "tree_id": "25dada088a683e7b90d1bdb3b04caaf14bae29d9",
          "url": "https://github.com/cocotb/cocotb/commit/43395876733905367a28a2aa7e0db1fab2f136ad"
        },
        "date": 1700845836672,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19688917948161902,
            "unit": "iter/sec",
            "range": "stddev: 0.015398579376937461",
            "extra": "mean: 5.078999275800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2716633606149369,
            "unit": "iter/sec",
            "range": "stddev: 0.012337952095967133",
            "extra": "mean: 3.6810263914000076 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18723d6660e04626094f4c4b6886591f69043ecf",
          "message": "Move pytest and coverage config to pyproject.toml (#3530)",
          "timestamp": "2023-11-24T11:16:11-06:00",
          "tree_id": "b6173d963c9f185d60f448873f2890716891819b",
          "url": "https://github.com/cocotb/cocotb/commit/18723d6660e04626094f4c4b6886591f69043ecf"
        },
        "date": 1700846344334,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1867787413946072,
            "unit": "iter/sec",
            "range": "stddev: 0.05336822243636688",
            "extra": "mean: 5.353928356799992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25020140855600753,
            "unit": "iter/sec",
            "range": "stddev: 0.03281335552503604",
            "extra": "mean: 3.9967800571999987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c35b608bb94d0589fc7267303f89a5d8aa65cad3",
          "message": "Improvements to test_discovery (#3527)\n\nMove everything into one file and make iteration test useful.",
          "timestamp": "2023-11-24T11:17:18-06:00",
          "tree_id": "6becc9c807ff4c0411d59433a773d9af0fd46fb8",
          "url": "https://github.com/cocotb/cocotb/commit/c35b608bb94d0589fc7267303f89a5d8aa65cad3"
        },
        "date": 1700846563382,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18642842367317913,
            "unit": "iter/sec",
            "range": "stddev: 0.055466481195223113",
            "extra": "mean: 5.363988925600012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25904168218725737,
            "unit": "iter/sec",
            "range": "stddev: 0.01983393120197066",
            "extra": "mean: 3.8603825899999946 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wim.appermans@gmail.com",
            "name": "wimiko",
            "username": "wimiko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a983f99ea883310216711d58a9a426157f4381cc",
          "message": "Close -makelib with -endlib (#3537)",
          "timestamp": "2023-11-27T13:27:22-06:00",
          "tree_id": "a3f492bb54fdae1f5f6d529cf356965b280bc9f1",
          "url": "https://github.com/cocotb/cocotb/commit/a983f99ea883310216711d58a9a426157f4381cc"
        },
        "date": 1701113418156,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1893571244885518,
            "unit": "iter/sec",
            "range": "stddev: 0.022428609260526408",
            "extra": "mean: 5.281026540200014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2512741580607863,
            "unit": "iter/sec",
            "range": "stddev: 0.04702688887095782",
            "extra": "mean: 3.979716846800011 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12e581c6691b59886f6c2b963ace6a5237e1ef70",
          "message": "remove MEMDEBUG (#3543)",
          "timestamp": "2023-11-29T08:24:57-06:00",
          "tree_id": "6a0541b2297e7bd0a1b9c66a52f8205feb52b088",
          "url": "https://github.com/cocotb/cocotb/commit/12e581c6691b59886f6c2b963ace6a5237e1ef70"
        },
        "date": 1701268096913,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1854424214890522,
            "unit": "iter/sec",
            "range": "stddev: 0.07331413697892672",
            "extra": "mean: 5.392509394400008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24638708033068185,
            "unit": "iter/sec",
            "range": "stddev: 0.05257113771219861",
            "extra": "mean: 4.058654368800006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "david.stanford@gmail.com",
            "name": "DLS",
            "username": "forensicgarlic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b320625d14c17b67e46dcc943f5d154ee6c1ecec",
          "message": "Add  to GHDL makefile to simulate different VHDL architectures from the top level (#3541)\n\n\r\nCo-authored-by: David Stanford <david.stanford@twosigma.com>",
          "timestamp": "2023-11-29T08:36:43-06:00",
          "tree_id": "7d60e4613c73b6569209d27273833d5556c36b29",
          "url": "https://github.com/cocotb/cocotb/commit/b320625d14c17b67e46dcc943f5d154ee6c1ecec"
        },
        "date": 1701268775673,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18719870720944204,
            "unit": "iter/sec",
            "range": "stddev: 0.036294753428403194",
            "extra": "mean: 5.3419172328 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2493842194130734,
            "unit": "iter/sec",
            "range": "stddev: 0.01347210366333588",
            "extra": "mean: 4.009876817199995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "20e087a354f9f4a73ad1422b57ea06f24b0b7f30",
          "message": "manually fix remaining ruff issues",
          "timestamp": "2023-11-29T22:39:07-06:00",
          "tree_id": "0cb85bbcfb6f3d085627f9059e0973592493d03e",
          "url": "https://github.com/cocotb/cocotb/commit/20e087a354f9f4a73ad1422b57ea06f24b0b7f30"
        },
        "date": 1701319316605,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18705983635248352,
            "unit": "iter/sec",
            "range": "stddev: 0.029051885854991737",
            "extra": "mean: 5.345883004600006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25013350971131554,
            "unit": "iter/sec",
            "range": "stddev: 0.01747342502766623",
            "extra": "mean: 3.997864984800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b563fa0a8a5c962fa2b1bb70a9b958445a9dc6a5",
          "message": "Don't get definition name or file until necessary (#3542)",
          "timestamp": "2023-11-29T23:00:52-06:00",
          "tree_id": "3799f597b328f4a0c0ab9c043d538b185ab66cb6",
          "url": "https://github.com/cocotb/cocotb/commit/b563fa0a8a5c962fa2b1bb70a9b958445a9dc6a5"
        },
        "date": 1701320652323,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.2053670521324269,
            "unit": "iter/sec",
            "range": "stddev: 0.03861538147117118",
            "extra": "mean: 4.869330253399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.27329415544973,
            "unit": "iter/sec",
            "range": "stddev: 0.033941969724575256",
            "extra": "mean: 3.659061052200002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d310febe74ee87b49e03828f6147cc3c26c4186d",
          "message": "Ignore the ruff formatting commit in git blame (#3545)",
          "timestamp": "2023-11-30T09:04:28-06:00",
          "tree_id": "ff9e9dbda228790a0359de7333ae1448a7577496",
          "url": "https://github.com/cocotb/cocotb/commit/d310febe74ee87b49e03828f6147cc3c26c4186d"
        },
        "date": 1701356847759,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18617710307854113,
            "unit": "iter/sec",
            "range": "stddev: 0.02103315910985886",
            "extra": "mean: 5.371229777799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24619936917777394,
            "unit": "iter/sec",
            "range": "stddev: 0.07301339339235732",
            "extra": "mean: 4.061748831199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f201c2a71abd3cf3e81c100cd637fe623745d33b",
          "message": "Replace lazy_property with cached_property (#3547)\n\nWe don't use lazy_property's implementation before Python 3.8 because\r\nsphinx doesn't detect them as valid properties and generate\r\ndocumentation for them.",
          "timestamp": "2023-12-01T11:09:24-06:00",
          "tree_id": "130a8291e8807760538bf8208afafb34b2c794ea",
          "url": "https://github.com/cocotb/cocotb/commit/f201c2a71abd3cf3e81c100cd637fe623745d33b"
        },
        "date": 1701450743554,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18557833775311808,
            "unit": "iter/sec",
            "range": "stddev: 0.02263379975576003",
            "extra": "mean: 5.388559958600007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2507051663185177,
            "unit": "iter/sec",
            "range": "stddev: 0.03476174698841971",
            "extra": "mean: 3.988749073999986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b5012f945135469f89daed59107b768d55da5d04",
          "message": "Add newsfragments on changes",
          "timestamp": "2023-12-01T12:56:14-06:00",
          "tree_id": "4317c42b963cca8610701df78b059634f253d04f",
          "url": "https://github.com/cocotb/cocotb/commit/b5012f945135469f89daed59107b768d55da5d04"
        },
        "date": 1701457156886,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18614963800787565,
            "unit": "iter/sec",
            "range": "stddev: 0.023611438289622682",
            "extra": "mean: 5.37202226500001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25130490859113724,
            "unit": "iter/sec",
            "range": "stddev: 0.034666382996582576",
            "extra": "mean: 3.97922987500001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5eab5a0dc1b35497556c1bcc2c8c009feae805f",
          "message": "Remove BaseClock (#3550)",
          "timestamp": "2023-12-02T08:51:55-06:00",
          "tree_id": "f7551cf12ec878939e3eff5dac3fe90f0dffbb88",
          "url": "https://github.com/cocotb/cocotb/commit/b5eab5a0dc1b35497556c1bcc2c8c009feae805f"
        },
        "date": 1701528888737,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19154651916551477,
            "unit": "iter/sec",
            "range": "stddev: 0.0379007424048564",
            "extra": "mean: 5.220663911599996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2521801628858557,
            "unit": "iter/sec",
            "range": "stddev: 0.10516548358706702",
            "extra": "mean: 3.9654189629999963 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ef230ff69921b82f589e0ac1ff32ed4416aff2e6",
          "message": "Bump conda-incubator/setup-miniconda from 2 to 3\n\nBumps [conda-incubator/setup-miniconda](https://github.com/conda-incubator/setup-miniconda) from 2 to 3.\n- [Release notes](https://github.com/conda-incubator/setup-miniconda/releases)\n- [Changelog](https://github.com/conda-incubator/setup-miniconda/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/conda-incubator/setup-miniconda/compare/v2...v3)\n\n---\nupdated-dependencies:\n- dependency-name: conda-incubator/setup-miniconda\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-12-04T09:01:42-06:00",
          "tree_id": "2f04cefc9a6772028ad30319bbb40e6785f69a12",
          "url": "https://github.com/cocotb/cocotb/commit/ef230ff69921b82f589e0ac1ff32ed4416aff2e6"
        },
        "date": 1701702280161,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1863616710153099,
            "unit": "iter/sec",
            "range": "stddev: 0.05050354195467082",
            "extra": "mean: 5.365910246199974 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24819452063717776,
            "unit": "iter/sec",
            "range": "stddev: 0.058015612334281895",
            "extra": "mean: 4.029097811799988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nick@nickg.me.uk",
            "name": "Nick Gasson",
            "username": "nickg"
          },
          "committer": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "99955631f3c9990f070b032df20f4c52e98f655d",
          "message": "Update NVC expected results for test_discovery",
          "timestamp": "2023-12-04T11:28:47-08:00",
          "tree_id": "91ae3e4b16ecb8a519e46d3a946077ad6f0310d6",
          "url": "https://github.com/cocotb/cocotb/commit/99955631f3c9990f070b032df20f4c52e98f655d"
        },
        "date": 1701718300557,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19236989498745605,
            "unit": "iter/sec",
            "range": "stddev: 0.01740497145382164",
            "extra": "mean: 5.198318583400004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25643694285605523,
            "unit": "iter/sec",
            "range": "stddev: 0.03324222747691729",
            "extra": "mean: 3.8995941414000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d379318ea2a8fcce140c07c80739e6af5b6bb66c",
          "message": "Verilog package access (#3536)\n\nAdd `cocotb.packages` to provide access to SystemVerilog packages in the design.",
          "timestamp": "2023-12-06T08:29:41-08:00",
          "tree_id": "a616dfab6082b2c87dda00dca48888fcae50fc95",
          "url": "https://github.com/cocotb/cocotb/commit/d379318ea2a8fcce140c07c80739e6af5b6bb66c"
        },
        "date": 1701880356434,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19075376879133898,
            "unit": "iter/sec",
            "range": "stddev: 0.05035330133039925",
            "extra": "mean: 5.242360380800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25106017504935263,
            "unit": "iter/sec",
            "range": "stddev: 0.047544317045649764",
            "extra": "mean: 3.9831088296000075 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f0525b957d5e01fc9eb8d58a5ca3f71ac3251e2",
          "message": "Fix defaultless parameters for Xcelium (#3558)",
          "timestamp": "2023-12-07T21:57:23-06:00",
          "tree_id": "8d9992d0a7e7d9adbf71b3ffc422538e6da60951",
          "url": "https://github.com/cocotb/cocotb/commit/0f0525b957d5e01fc9eb8d58a5ca3f71ac3251e2"
        },
        "date": 1702008015029,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18840514275291334,
            "unit": "iter/sec",
            "range": "stddev: 0.03665588006842833",
            "extra": "mean: 5.307710741799997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2515141504479805,
            "unit": "iter/sec",
            "range": "stddev: 0.03312413419324278",
            "extra": "mean: 3.975919439200004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "428be3647f854f9b7e9082cccd4194ec5e3396e5",
          "message": "Fix test_parallel_cocotb for NVC (#3559)",
          "timestamp": "2023-12-07T21:58:02-06:00",
          "tree_id": "5f55063c7c1471338ef2f3f582c25665e1fe6952",
          "url": "https://github.com/cocotb/cocotb/commit/428be3647f854f9b7e9082cccd4194ec5e3396e5"
        },
        "date": 1702008194451,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1531414799278416,
            "unit": "iter/sec",
            "range": "stddev: 0.07126475389153461",
            "extra": "mean: 6.529909469800003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21029854379203536,
            "unit": "iter/sec",
            "range": "stddev: 0.023204954035458244",
            "extra": "mean: 4.75514467180002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40a27c267ba42b49acd033b57aa44c3c5693e131",
          "message": "Fix broken newsfrags (#3564)",
          "timestamp": "2023-12-07T22:19:20-08:00",
          "tree_id": "b0a1bb11ce9fb7e89b49f83780076f108aec8084",
          "url": "https://github.com/cocotb/cocotb/commit/40a27c267ba42b49acd033b57aa44c3c5693e131"
        },
        "date": 1702016548317,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1880096365891441,
            "unit": "iter/sec",
            "range": "stddev: 0.04217601752198557",
            "extra": "mean: 5.318876298800001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25083183583704827,
            "unit": "iter/sec",
            "range": "stddev: 0.0381937100509257",
            "extra": "mean: 3.9867347645999986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c3aa512058ce50ddca2da0b165477527c3bef65",
          "message": "Remove Bit class (#3549)\n\nPreviously Bit was supposed to be a part of a grander plan to\r\nincorporate more HDL types, but that plan was abandoned and Bit is now\r\nuseless.\r\n\r\nAdditionally, Logic was expanded to cover the whole 9-value VHDL\r\nstd_logic type because SV's 4-value type is a strict subset and why not\r\nhave more features than less?",
          "timestamp": "2023-12-08T07:03:25-06:00",
          "tree_id": "422b17cbe686807ebae7735ddae9b20b38daa63b",
          "url": "https://github.com/cocotb/cocotb/commit/6c3aa512058ce50ddca2da0b165477527c3bef65"
        },
        "date": 1702040848396,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19082207745975088,
            "unit": "iter/sec",
            "range": "stddev: 0.021653317871871046",
            "extra": "mean: 5.2404837705999965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25361612413081674,
            "unit": "iter/sec",
            "range": "stddev: 0.03104530627449667",
            "extra": "mean: 3.9429669680000075 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "57e8d0df1af9e08a95c5c9e0c1cb8ad786931cd2",
          "message": "NVC: Fix remaining CI issues with Python runner",
          "timestamp": "2023-12-08T08:32:31-06:00",
          "tree_id": "215c45763fab48334614552b82d87f19bf05019c",
          "url": "https://github.com/cocotb/cocotb/commit/57e8d0df1af9e08a95c5c9e0c1cb8ad786931cd2"
        },
        "date": 1702046142856,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18894443451510465,
            "unit": "iter/sec",
            "range": "stddev: 0.053259413752533395",
            "extra": "mean: 5.292561289599973 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25330303714246133,
            "unit": "iter/sec",
            "range": "stddev: 0.047596760347099115",
            "extra": "mean: 3.947840544199971 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tstrader@hudson-trading.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae389417ac089fa4f54eb3d9a7e8efe1bd48d0d7",
          "message": "Support customizing simulator output redirection (#3561)",
          "timestamp": "2023-12-08T10:41:02-06:00",
          "tree_id": "d02a1ce5cdd10fdb7b67c684cf1673ba1460b404",
          "url": "https://github.com/cocotb/cocotb/commit/ae389417ac089fa4f54eb3d9a7e8efe1bd48d0d7"
        },
        "date": 1702053840951,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19043005877631594,
            "unit": "iter/sec",
            "range": "stddev: 0.013453012444860179",
            "extra": "mean: 5.251271812999994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25571713796658413,
            "unit": "iter/sec",
            "range": "stddev: 0.04226496250582977",
            "extra": "mean: 3.910570906400005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aacf08bedff1dc59c2a5cc501b1744c7f9cb4587",
          "message": "Prevent Edge triggers from being applied to invalid handle types (#3563)",
          "timestamp": "2023-12-08T16:21:29-06:00",
          "tree_id": "820253bcac76dd54aecd45acf509be0b89b8a24a",
          "url": "https://github.com/cocotb/cocotb/commit/aacf08bedff1dc59c2a5cc501b1744c7f9cb4587"
        },
        "date": 1702074265458,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1907175305495742,
            "unit": "iter/sec",
            "range": "stddev: 0.044865852301388516",
            "extra": "mean: 5.243356481800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.252686052957723,
            "unit": "iter/sec",
            "range": "stddev: 0.03292874183040091",
            "extra": "mean: 3.9574799966000116 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}