window.BENCHMARK_DATA = {
  "lastUpdate": 1699349416687,
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
      }
    ]
  }
}