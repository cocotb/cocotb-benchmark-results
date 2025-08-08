window.BENCHMARK_DATA = {
  "lastUpdate": 1754687836307,
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
          "id": "a8650adc742556034f22dfb779613425ec94fadd",
          "message": "Disable MSVC test for now (#3570)",
          "timestamp": "2023-12-08T16:45:17-06:00",
          "tree_id": "8e8c746547611b4aebe98a3cdbd1d3fac78714ce",
          "url": "https://github.com/cocotb/cocotb/commit/a8650adc742556034f22dfb779613425ec94fadd"
        },
        "date": 1702075760494,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14849211519579245,
            "unit": "iter/sec",
            "range": "stddev: 0.043181479432165125",
            "extra": "mean: 6.734364303999996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20311540646327897,
            "unit": "iter/sec",
            "range": "stddev: 0.028111526667105452",
            "extra": "mean: 4.923309449599969 sec\nrounds: 5"
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
          "id": "6635f6e373641ee79a9e99d2314e09046aa666c5",
          "message": "Fix test_package RTL location (#3567)",
          "timestamp": "2023-12-08T21:21:41-06:00",
          "tree_id": "0f46c3fd35df4efe6b992ec1a6285e6a694cccde",
          "url": "https://github.com/cocotb/cocotb/commit/6635f6e373641ee79a9e99d2314e09046aa666c5"
        },
        "date": 1702092347249,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14758382509383997,
            "unit": "iter/sec",
            "range": "stddev: 0.025402844164112925",
            "extra": "mean: 6.775810285200009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20409479955831625,
            "unit": "iter/sec",
            "range": "stddev: 0.012440329719668663",
            "extra": "mean: 4.899683883000011 sec\nrounds: 5"
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
          "id": "69d9bf7cc628c5cfe07a3836d4c284b738c995af",
          "message": "Fix documentation issues (#3572)",
          "timestamp": "2023-12-09T09:17:02-06:00",
          "tree_id": "7dbedec212b2a73152662de997d9659b585580c5",
          "url": "https://github.com/cocotb/cocotb/commit/69d9bf7cc628c5cfe07a3836d4c284b738c995af"
        },
        "date": 1702135221018,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18900160920207518,
            "unit": "iter/sec",
            "range": "stddev: 0.025084103891099305",
            "extra": "mean: 5.290960242199992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2526101619707366,
            "unit": "iter/sec",
            "range": "stddev: 0.03720333556219658",
            "extra": "mean: 3.9586689316000045 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8728fa72440d2ed8ca542d15ffd21f6362b54b14",
          "message": "Add git rev to local version identifier\n\nCo-authored-by: Marlon James <marlon.james@gmail.com>",
          "timestamp": "2023-12-10T18:33:15Z",
          "tree_id": "b9ce58e5368f411e0a0341debdf60d4e981b26de",
          "url": "https://github.com/cocotb/cocotb/commit/8728fa72440d2ed8ca542d15ffd21f6362b54b14"
        },
        "date": 1702233364662,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18858140964620584,
            "unit": "iter/sec",
            "range": "stddev: 0.02787403502564077",
            "extra": "mean: 5.302749628800006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25125021560817457,
            "unit": "iter/sec",
            "range": "stddev: 0.031108029138662112",
            "extra": "mean: 3.9800960869999926 sec\nrounds: 5"
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
          "id": "6a655e2e5113950cbdaf89a5333ca643ddeb11ba",
          "message": "Move user code coverage feature out of RegressionManager (#3571)",
          "timestamp": "2023-12-10T19:21:37-06:00",
          "tree_id": "6304e84df168ca93f62a3b30f9b60c62b596a130",
          "url": "https://github.com/cocotb/cocotb/commit/6a655e2e5113950cbdaf89a5333ca643ddeb11ba"
        },
        "date": 1702257879713,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18949970567578453,
            "unit": "iter/sec",
            "range": "stddev: 0.05241866104310665",
            "extra": "mean: 5.277053050999996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2518512737259472,
            "unit": "iter/sec",
            "range": "stddev: 0.03856324739382903",
            "extra": "mean: 3.9705973497999993 sec\nrounds: 5"
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
          "id": "6a32f7613b94e73224bec80129c1dc4e9662fc84",
          "message": "Docs: Clean up references to removed cocotb.types.Bit and add newsfragment",
          "timestamp": "2023-12-11T06:50:33-08:00",
          "tree_id": "43ca3840bb1532ea885a4b45bc714eeff4fd02ad",
          "url": "https://github.com/cocotb/cocotb/commit/6a32f7613b94e73224bec80129c1dc4e9662fc84"
        },
        "date": 1702306413767,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1870969409587251,
            "unit": "iter/sec",
            "range": "stddev: 0.03770598265447343",
            "extra": "mean: 5.344822822200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24898369350467062,
            "unit": "iter/sec",
            "range": "stddev: 0.045558420301865944",
            "extra": "mean: 4.016327278 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc7d5c36c0c1baa36c0503eedeeecbb5d6f994f",
          "message": "Bump actions/stale from 8 to 9 (#3576)\n\nBumps [actions/stale](https://github.com/actions/stale) from 8 to 9.\r\n- [Release notes](https://github.com/actions/stale/releases)\r\n- [Changelog](https://github.com/actions/stale/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/actions/stale/compare/v8...v9)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/stale\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-11T10:49:19-06:00",
          "tree_id": "a18d6bd9fde2a2e06368193704d7a47464930f48",
          "url": "https://github.com/cocotb/cocotb/commit/fcc7d5c36c0c1baa36c0503eedeeecbb5d6f994f"
        },
        "date": 1702313560468,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18937058908214538,
            "unit": "iter/sec",
            "range": "stddev: 0.04547848649086677",
            "extra": "mean: 5.280651049599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24783705328342898,
            "unit": "iter/sec",
            "range": "stddev: 0.04855051981093653",
            "extra": "mean: 4.034909174199993 sec\nrounds: 5"
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
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "cc9694d4e260ece911725515aa23eb40b18b50e1",
          "message": "Bump actions/setup-python from 4 to 5\n\nBumps [actions/setup-python](https://github.com/actions/setup-python) from 4 to 5.\n- [Release notes](https://github.com/actions/setup-python/releases)\n- [Commits](https://github.com/actions/setup-python/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-python\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-12-13T20:03:00Z",
          "tree_id": "3b0fd034e7a2ca2725bfe9873b0910ac7770ba1d",
          "url": "https://github.com/cocotb/cocotb/commit/cc9694d4e260ece911725515aa23eb40b18b50e1"
        },
        "date": 1702497976125,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18756807418198124,
            "unit": "iter/sec",
            "range": "stddev: 0.04637300485695858",
            "extra": "mean: 5.3313977037999845 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24834486095964164,
            "unit": "iter/sec",
            "range": "stddev: 0.023264620963284775",
            "extra": "mean: 4.026658720200009 sec\nrounds: 5"
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
          "id": "4b47f6a90a6fdbc83999411fbfba447ca1060220",
          "message": "Remove unused lgtm.yml file\n\nWe have disabled LGTM for a long time now, let's get rid of the\nassociated config file as well.",
          "timestamp": "2023-12-13T21:24:30Z",
          "tree_id": "28ddd4ca1481e62553121c92e1e3006bdba7d322",
          "url": "https://github.com/cocotb/cocotb/commit/4b47f6a90a6fdbc83999411fbfba447ca1060220"
        },
        "date": 1702502917475,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1461893548300079,
            "unit": "iter/sec",
            "range": "stddev: 0.04964913734490413",
            "extra": "mean: 6.840443349399971 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.199538551591309,
            "unit": "iter/sec",
            "range": "stddev: 0.0331375069182861",
            "extra": "mean: 5.011562888599997 sec\nrounds: 5"
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
          "id": "fb01a05c3c4aeb34f9a171257c3ee7ccc019cb1d",
          "message": "CI: Update to Xcelium 23.09\n\nKeep CI up-to-date with the latest release version of a simulator.",
          "timestamp": "2023-12-13T23:57:00Z",
          "tree_id": "9b28c845eb5670fcd848dbaff91c2e65946839b1",
          "url": "https://github.com/cocotb/cocotb/commit/fb01a05c3c4aeb34f9a171257c3ee7ccc019cb1d"
        },
        "date": 1702511994374,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18552176872059015,
            "unit": "iter/sec",
            "range": "stddev: 0.0381215598840697",
            "extra": "mean: 5.390203030600015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24807401579400823,
            "unit": "iter/sec",
            "range": "stddev: 0.053034404201337794",
            "extra": "mean: 4.0310549930000095 sec\nrounds: 5"
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
          "id": "866df6fb0a0268b0cc37e44dad1d46c0299566e7",
          "message": "CI: Include the toplevel language in the job name\n\nDepending on the toplevel language, we're running a very different set\nof tests. Include it in the name to make the tests unambiguous.\n\nWhile at it, refactor the code a bit to\n* place the generation of the human-readable job name into the Python\n  script\n* reuse the name in the Codecov upload, instead of assembling it twice\n  (we can do that now that we have the name in the matrix configuration)\n* consistently use hyphens as delimitter in matrix env keys\n* shorten the simulator version number by removing the module name\n  prefix (e.g. 'siemens/questa/2023.2' to '2023.2')\n* shorten the name by removing spaces around the pipe symbol.\n\nA shorter name helps to display more of it in the left navigation bar of\nthe GH Checks view.",
          "timestamp": "2023-12-14T17:56:18+01:00",
          "tree_id": "6b4e6ce64dbbc40f05588b4da13e6c575b0a55b0",
          "url": "https://github.com/cocotb/cocotb/commit/866df6fb0a0268b0cc37e44dad1d46c0299566e7"
        },
        "date": 1702573150563,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1903390802019595,
            "unit": "iter/sec",
            "range": "stddev: 0.041089458756124825",
            "extra": "mean: 5.253781824199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2508126741850975,
            "unit": "iter/sec",
            "range": "stddev: 0.0385443425636514",
            "extra": "mean: 3.987039344200002 sec\nrounds: 5"
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
          "id": "46f570d2fa6eb5439022a10a0860d06217908703",
          "message": "CI: Update to Questa 2023.4_1",
          "timestamp": "2023-12-14T17:56:37+01:00",
          "tree_id": "a02654ca99a0752351c1a49a4f7a8874e3334e95",
          "url": "https://github.com/cocotb/cocotb/commit/46f570d2fa6eb5439022a10a0860d06217908703"
        },
        "date": 1702573179390,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18681644124058464,
            "unit": "iter/sec",
            "range": "stddev: 0.030934041175846222",
            "extra": "mean: 5.352847925799995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25108009331992814,
            "unit": "iter/sec",
            "range": "stddev: 0.01962758221456348",
            "extra": "mean: 3.982792848200006 sec\nrounds: 5"
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
          "id": "b44e324b9070b9ff5070ba94a1d9afdc620a5352",
          "message": "Add test waivers for Riviera-PRO struct and unions in VPI\n\nSee https://github.com/cocotb/cocotb/issues/3587 for a detailed\ndescription of why these waivers are necessary.",
          "timestamp": "2023-12-14T18:53:08+01:00",
          "tree_id": "ea6bf703dba858fd4bb84b2b4beca3b23eacb41b",
          "url": "https://github.com/cocotb/cocotb/commit/b44e324b9070b9ff5070ba94a1d9afdc620a5352"
        },
        "date": 1702576575726,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18207419309686393,
            "unit": "iter/sec",
            "range": "stddev: 0.023550449561812948",
            "extra": "mean: 5.492266548000009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24471801975774776,
            "unit": "iter/sec",
            "range": "stddev: 0.04867174270199142",
            "extra": "mean: 4.086335779399997 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86b7a17407ca4fdbb9bb1419dbd6aa7f8a9ef229",
          "message": "Bump actions/download-artifact from 3 to 4 (#3592)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 3 to 4.\r\n- [Release notes](https://github.com/actions/download-artifact/releases)\r\n- [Commits](https://github.com/actions/download-artifact/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/download-artifact\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-18T17:50:17-05:00",
          "tree_id": "fcb822b59893b93c5674114c2580c29888da5520",
          "url": "https://github.com/cocotb/cocotb/commit/86b7a17407ca4fdbb9bb1419dbd6aa7f8a9ef229"
        },
        "date": 1702939999686,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18762284386652534,
            "unit": "iter/sec",
            "range": "stddev: 0.019794155114047172",
            "extra": "mean: 5.3298413955999875 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2518279080431613,
            "unit": "iter/sec",
            "range": "stddev: 0.022715765855919997",
            "extra": "mean: 3.9709657590000234 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc3ddffa5c50eef9204236c3ec4b614ba5101cd5",
          "message": "Bump actions/upload-artifact from 3 to 4 (#3593)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 3 to 4.\r\n- [Release notes](https://github.com/actions/upload-artifact/releases)\r\n- [Commits](https://github.com/actions/upload-artifact/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/upload-artifact\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-18T18:22:54-06:00",
          "tree_id": "2f8e35a934b442b773919289f3bf6fc7cde4e319",
          "url": "https://github.com/cocotb/cocotb/commit/bc3ddffa5c50eef9204236c3ec4b614ba5101cd5"
        },
        "date": 1702945560940,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18863046135990444,
            "unit": "iter/sec",
            "range": "stddev: 0.030983558636707015",
            "extra": "mean: 5.301370694799994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25289934659048824,
            "unit": "iter/sec",
            "range": "stddev: 0.031097607558406275",
            "extra": "mean: 3.9541422841999974 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "programming@goodcleanfun.de",
            "name": "T. Meissner",
            "username": "tmeissner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc2be3cc87209b38db9de5115f8d0ac1db2ee2f7",
          "message": "Add support for VHDL libraries in NVC Makefile (#3599)\n\nAdd support of VHDL libraries in NVC makefile",
          "timestamp": "2023-12-21T21:29:46+01:00",
          "tree_id": "37b6c31df535801e9acc19aaca17650622d0c5d5",
          "url": "https://github.com/cocotb/cocotb/commit/bc2be3cc87209b38db9de5115f8d0ac1db2ee2f7"
        },
        "date": 1703190779764,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1906251012426591,
            "unit": "iter/sec",
            "range": "stddev: 0.034648914149280424",
            "extra": "mean: 5.2458988532000035 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25469976023108293,
            "unit": "iter/sec",
            "range": "stddev: 0.0537219601868928",
            "extra": "mean: 3.9261913677999702 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "42102157+jshaker000@users.noreply.github.com",
            "name": "Joseph Shaker",
            "username": "jshaker000"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee652a27a32c6a0f284c6054a7c07742920fe1a5",
          "message": "Update VpiImpl.cpp (#2985)",
          "timestamp": "2023-12-23T15:28:01-06:00",
          "tree_id": "99ec0b911394d94c08b3cee441fe303ce7bd8d2a",
          "url": "https://github.com/cocotb/cocotb/commit/ee652a27a32c6a0f284c6054a7c07742920fe1a5"
        },
        "date": 1703367056637,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18814012004254738,
            "unit": "iter/sec",
            "range": "stddev: 0.018183917987219255",
            "extra": "mean: 5.31518742400001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2504643310143499,
            "unit": "iter/sec",
            "range": "stddev: 0.05737693579464826",
            "extra": "mean: 3.992584476800039 sec\nrounds: 5"
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
          "id": "ba070a73ff6e7ca58fa8c3cf9e5439d16bd098a7",
          "message": "Add pre-commit autoupdate daily action",
          "timestamp": "2023-12-26T16:43:53-06:00",
          "tree_id": "0857a12faa0442eb498ea3f0d169e601a8b42355",
          "url": "https://github.com/cocotb/cocotb/commit/ba070a73ff6e7ca58fa8c3cf9e5439d16bd098a7"
        },
        "date": 1703630805055,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18721645416737234,
            "unit": "iter/sec",
            "range": "stddev: 0.0334946027390594",
            "extra": "mean: 5.3414108521999655 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25271109035174416,
            "unit": "iter/sec",
            "range": "stddev: 0.04480016192397017",
            "extra": "mean: 3.957087908599965 sec\nrounds: 5"
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
          "id": "cb683a83368af6703a6a326a62d9911603028a66",
          "message": "Fix broken pre-commit autoupdate github action (#3610)",
          "timestamp": "2023-12-28T14:34:24-06:00",
          "tree_id": "3c865479c1103efcc2f28f9e2aa508493a39bb27",
          "url": "https://github.com/cocotb/cocotb/commit/cb683a83368af6703a6a326a62d9911603028a66"
        },
        "date": 1703795839254,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18542891756268237,
            "unit": "iter/sec",
            "range": "stddev: 0.04757549584500742",
            "extra": "mean: 5.392902105799976 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24770231955071478,
            "unit": "iter/sec",
            "range": "stddev: 0.026784934633891404",
            "extra": "mean: 4.037103898800024 sec\nrounds: 5"
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
          "id": "c05526e6ee9ce70e7d8bad20921c54d5e0cfd0d1",
          "message": "CI: Fix artifact upload\n\nhttps://github.com/cocotb/cocotb/pull/3593 updated the version of\nactions/upload-artifact from 3 to 4, but didn't perform the migration as\ndescribed at\nhttps://github.com/actions/upload-artifact/blob/main/docs/MIGRATION.md.\nDo that to fix the broken release CI.",
          "timestamp": "2024-01-01T15:58:34+01:00",
          "tree_id": "cf2c98dda07ead1850ab237ea22a9ce98196a6ba",
          "url": "https://github.com/cocotb/cocotb/commit/c05526e6ee9ce70e7d8bad20921c54d5e0cfd0d1"
        },
        "date": 1704121291961,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18660904539027748,
            "unit": "iter/sec",
            "range": "stddev: 0.041377040738572804",
            "extra": "mean: 5.358797039599994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25228880759493294,
            "unit": "iter/sec",
            "range": "stddev: 0.028287673003891792",
            "extra": "mean: 3.9637113098000327 sec\nrounds: 5"
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
          "id": "1ba4da5eca0ba1f239e6347a0fdee9ffc3bf061b",
          "message": "Add a missing newsfragment for #3490",
          "timestamp": "2024-01-01T21:31:03+01:00",
          "tree_id": "cef3a7cba24721a5cc19cccfb386fb79c6598c50",
          "url": "https://github.com/cocotb/cocotb/commit/1ba4da5eca0ba1f239e6347a0fdee9ffc3bf061b"
        },
        "date": 1704141235618,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18835937067740843,
            "unit": "iter/sec",
            "range": "stddev: 0.05288403633365848",
            "extra": "mean: 5.309000536600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2514060155578334,
            "unit": "iter/sec",
            "range": "stddev: 0.04737915969643285",
            "extra": "mean: 3.9776295637999963 sec\nrounds: 5"
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
          "id": "cb0bca4112474bbf28679100274c8b2bb72122ca",
          "message": "cocotb runner uses HDL_TOPLEVEL_LANG instead of TOPLEVEL_LANG\n\nIn our noxfile, we set HDL_TOPLEVEL_LANG to match TOPLEVEL_LANG, but\nthe authoritative environment variable is apparently meant to be\nHDL_TOPLEVEL_LANG.",
          "timestamp": "2024-01-02T16:36:43+01:00",
          "tree_id": "6b3b58c9d0608e9bb9b4c4463716f8da0bcf607a",
          "url": "https://github.com/cocotb/cocotb/commit/cb0bca4112474bbf28679100274c8b2bb72122ca"
        },
        "date": 1704209987219,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18813025130764216,
            "unit": "iter/sec",
            "range": "stddev: 0.036763509688727304",
            "extra": "mean: 5.315466242399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24881558905313306,
            "unit": "iter/sec",
            "range": "stddev: 0.08864720043416015",
            "extra": "mean: 4.019040783600002 sec\nrounds: 5"
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
          "id": "ca08146e413090a6770881fc4d9fed6d2b8b0f91",
          "message": "Require explicit marker declarations in pytest\n\nPytest normally only warns about undeclared markers, a warning which is\neasily lost in the CI logs. Convert the warning into an error to avoid\nmissing undeclared markers (which makes it harder to discover them).",
          "timestamp": "2024-01-02T16:37:00+01:00",
          "tree_id": "38e05087af54238ba2662aa6ce0525e8fbbdee5d",
          "url": "https://github.com/cocotb/cocotb/commit/ca08146e413090a6770881fc4d9fed6d2b8b0f91"
        },
        "date": 1704210157090,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.202074930426747,
            "unit": "iter/sec",
            "range": "stddev: 0.045158402688794036",
            "extra": "mean: 4.948659380400005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.27193560327264454,
            "unit": "iter/sec",
            "range": "stddev: 0.04043516613547356",
            "extra": "mean: 3.677341208600012 sec\nrounds: 5"
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
          "id": "5125a297f8d1890b87e3ded374a076c0b3f5db59",
          "message": "CI: Enable Xcelium/VHPI testing",
          "timestamp": "2024-01-02T18:57:29+01:00",
          "tree_id": "45d8c1daadf64c9487aa9a76bcbb284e581ab426",
          "url": "https://github.com/cocotb/cocotb/commit/5125a297f8d1890b87e3ded374a076c0b3f5db59"
        },
        "date": 1704218454596,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1907171850704939,
            "unit": "iter/sec",
            "range": "stddev: 0.03235072755202235",
            "extra": "mean: 5.2433659800000445 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25525169708722384,
            "unit": "iter/sec",
            "range": "stddev: 0.04130803917981687",
            "extra": "mean: 3.9177016701999947 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@users.noreply.github.com",
            "name": "ktbarrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "f2defc1a5d69c6bce810a018facab11e5bdc577b",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-01-03T07:52:34+01:00",
          "tree_id": "826a2f2990a0d922033453020cd379f88275f686",
          "url": "https://github.com/cocotb/cocotb/commit/f2defc1a5d69c6bce810a018facab11e5bdc577b"
        },
        "date": 1704264925842,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18815138896110611,
            "unit": "iter/sec",
            "range": "stddev: 0.03681702663880609",
            "extra": "mean: 5.314869082400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2487603155423283,
            "unit": "iter/sec",
            "range": "stddev: 0.061196813260508104",
            "extra": "mean: 4.019933797800007 sec\nrounds: 5"
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
          "id": "772eeea53f5010ac8d0ec42b78b8c02d6907a415",
          "message": "GHDL: Support COCOTB_HDL_TIMEPRECISION if possible\n\nGHDL with the mcode backend supports some values of\nCOCOTB_HDL_TIMEPRECISION (fs, ps, ns, us, ms, s), and only if the\nmcode backend is used. Try to pass on the value of\nCOCOTB_HDL_TIMEPRECISION if possible, without checking for the backend:\nGHDL will error out in that case and users have to avoid setting\nCOCOTB_HDL_TIMEPRECISION when that happens.\n\nAlso adjust the cocotb runner implementation accordingly.\n\nSee also https://github.com/cocotb/cocotb/pull/3613#discussion_r1439710866",
          "timestamp": "2024-01-03T09:26:17+01:00",
          "tree_id": "3ecee88db17c302a896cd3a5a7e6c1c826779f3d",
          "url": "https://github.com/cocotb/cocotb/commit/772eeea53f5010ac8d0ec42b78b8c02d6907a415"
        },
        "date": 1704270554066,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18650137055267488,
            "unit": "iter/sec",
            "range": "stddev: 0.04959480447992426",
            "extra": "mean: 5.36189089139998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2524169711519098,
            "unit": "iter/sec",
            "range": "stddev: 0.02248068225664489",
            "extra": "mean: 3.961698753599967 sec\nrounds: 5"
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
          "id": "7b84015ecfed66596051751f7b07e6dfaf3c080f",
          "message": "CI: Use distinct labels for private jobs\n\nLabels in GitHub Actions are used to determine which runner can execute\na CI job. With our setup of self-hosted and GitHub-hosted runners,\nlabels decide if a job gets to run on our own infrastructure, or on\nGitHub infrastructure.\n\nRight now, we're assinging the labels \"self-hosted\", \"ubuntu-20.04\",\n\"cocotb-private\", \"X64\" and \"Linux\" to all self-hosted runners.\n\nAll jobs that we want to run on our self-hosted runners get the labels\n\"self-hosted\", \"cocotb-private\", and \"ubuntu-20.04\" assigned.\n\nJobs that we want to run on the GitHub-provided runners only get a\nsingle label, the operating system, such as \"ubuntu-20.04\".\n\nAs it turns out, a job gets executed on a particular runner as soon as\nall labels assigned *to the job* are matching labels assigned to the\nrunner.\n\nFor us, this meant a job assigned only the label \"ubuntu-20.04\" (a job\nwhich we want to execute on GitHub-provided runners) got executed on\nour self-hosted runners, since \"ubuntu-20.04\" is one of the labels of\nour self-hosted runners as well.\n\nAvoid this situation by using label names for our self-hosted runner\nwhich are not used by GitHub runners\n(https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job).\n\nSee also https://github.com/philips-labs/terraform-aws-github-runner/issues/3290\nfor a discussion and\nhttps://github.com/philips-labs/terraform-aws-github-runner/blob/6fa667fae7e4302cf643bcdb4ff3c91b1e4ed8d1/lambdas/functions/webhook/src/webhook/index.ts#L83-L86\nfor the label matching code.",
          "timestamp": "2024-01-03T19:43:57+01:00",
          "tree_id": "858ec9bfda99121883d37708d33abc5aa1e961ec",
          "url": "https://github.com/cocotb/cocotb/commit/7b84015ecfed66596051751f7b07e6dfaf3c080f"
        },
        "date": 1704307621169,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1880822696395897,
            "unit": "iter/sec",
            "range": "stddev: 0.03728552721205493",
            "extra": "mean: 5.316822271000012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2536258354379929,
            "unit": "iter/sec",
            "range": "stddev: 0.035728656824667325",
            "extra": "mean: 3.942815992199985 sec\nrounds: 5"
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
          "id": "2ae5415e76d6584fb8741ee0e35c779111045241",
          "message": "Remove unmaintained WaveDrom tracer\n\nThe WaveDrom tracer is a nice example of what can be done with cocotb,\nbut it's neither maintained nor tested. Remove it from the core of\ncocotb, and encourage users to either copy it into their own source\ntree, or create an extension.\n\nCloses #2066",
          "timestamp": "2024-01-03T21:06:32+01:00",
          "tree_id": "bff3e727e902186c93f45cbdae2adda146d8e9af",
          "url": "https://github.com/cocotb/cocotb/commit/2ae5415e76d6584fb8741ee0e35c779111045241"
        },
        "date": 1704312584036,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18586169581302903,
            "unit": "iter/sec",
            "range": "stddev: 0.02582327972785947",
            "extra": "mean: 5.380344753799989 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25027322192490026,
            "unit": "iter/sec",
            "range": "stddev: 0.057382760807202275",
            "extra": "mean: 3.9956332215999963 sec\nrounds: 5"
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
          "id": "1119021f6581fd1be684694755b1b350a419b945",
          "message": "Set author name in pre-commit-autoupdate.yml (#3628)\n\nBy default it uses the action's actor as the author, I guess because I authored the action file with the cron line in it that means it's me? Either way I'm explicitly setting it to the Github Actions bot account.",
          "timestamp": "2024-01-03T14:13:48-06:00",
          "tree_id": "37cce45e909789e8d5bc31d429077c506552ac67",
          "url": "https://github.com/cocotb/cocotb/commit/1119021f6581fd1be684694755b1b350a419b945"
        },
        "date": 1704313006568,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18729099675832184,
            "unit": "iter/sec",
            "range": "stddev: 0.02966184941964045",
            "extra": "mean: 5.339284948600005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25012357535329255,
            "unit": "iter/sec",
            "range": "stddev: 0.03500109972654892",
            "extra": "mean: 3.9980237712000077 sec\nrounds: 5"
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
          "id": "b71735f1ff8f188b6a513f7c20ac9f78fc4cfbd9",
          "message": "Add mark for cocotb.test-decorated objects",
          "timestamp": "2024-01-03T22:39:44-06:00",
          "tree_id": "6434e8a060d5e4e029b12dc83da62ab8ae36bb3c",
          "url": "https://github.com/cocotb/cocotb/commit/b71735f1ff8f188b6a513f7c20ac9f78fc4cfbd9"
        },
        "date": 1704343354616,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18731777989085416,
            "unit": "iter/sec",
            "range": "stddev: 0.03618672431961605",
            "extra": "mean: 5.3385215251999965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2501308311813814,
            "unit": "iter/sec",
            "range": "stddev: 0.03547115120818488",
            "extra": "mean: 3.997907795999981 sec\nrounds: 5"
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
          "id": "7216afd53d3993aa25d03e2e4ab97880c95f0e27",
          "message": "Update test_edge_on_vector expected edge count\n\nWhen running the test_cocotb subset in tests/pytest with Verilator, the edge count was one less than expected.\nRunning test_cocotb with the makefile produced the expected result.\nThis discrepancy appears to be caused by whatever state the previous test left dut.stream_in_data in, so set the value before starting the monitor Task.",
          "timestamp": "2024-01-04T08:41:26-08:00",
          "tree_id": "03f630c54232dfc56579f8349629ad432b745727",
          "url": "https://github.com/cocotb/cocotb/commit/7216afd53d3993aa25d03e2e4ab97880c95f0e27"
        },
        "date": 1704386661198,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.19042379681571772,
            "unit": "iter/sec",
            "range": "stddev: 0.01752128742921212",
            "extra": "mean: 5.251444497599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25236687769006727,
            "unit": "iter/sec",
            "range": "stddev: 0.04575032579446657",
            "extra": "mean: 3.9624851293999996 sec\nrounds: 5"
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
          "id": "60c7b5b04e40eec99377bdb5cc1000610953cf26",
          "message": "GHDL: Only pass --time-resolution if mcode is used\n\nGHDL errors out if `--time-resolution` is passed and a backend other\nthan mcode is used (other than silently ignoring this option). This\nbehavior requires us to check the GHDL backend before calling it.\nImplement this behavior in our Makefiles and in the cocotb runner.\n\nFixes #3629",
          "timestamp": "2024-01-04T18:53:39+01:00",
          "tree_id": "d8770d1706fd498ab932e4a5d75cd6f931b78aff",
          "url": "https://github.com/cocotb/cocotb/commit/60c7b5b04e40eec99377bdb5cc1000610953cf26"
        },
        "date": 1704390995797,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18663127359541562,
            "unit": "iter/sec",
            "range": "stddev: 0.046295690475999414",
            "extra": "mean: 5.358158794799993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25127997891472703,
            "unit": "iter/sec",
            "range": "stddev: 0.051647442453850965",
            "extra": "mean: 3.979624657400001 sec\nrounds: 5"
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
          "id": "a39d6e32f0711ffc86627b3cfbdc257d0e0f8367",
          "message": "Move around commandline args in Makefile.icarus (#3637)\n\nMoves default language version in iverilog commandline arg earlier to allow the user to override it later with COMPILE_ARGS.",
          "timestamp": "2024-01-04T12:19:21-06:00",
          "tree_id": "ca0d82089386edc30548ce3f7e28def1c7db514b",
          "url": "https://github.com/cocotb/cocotb/commit/a39d6e32f0711ffc86627b3cfbdc257d0e0f8367"
        },
        "date": 1704392537129,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18020332597591068,
            "unit": "iter/sec",
            "range": "stddev: 0.06591548354801346",
            "extra": "mean: 5.549287143200002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2427354121104561,
            "unit": "iter/sec",
            "range": "stddev: 0.01713268545054459",
            "extra": "mean: 4.119712040800016 sec\nrounds: 5"
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
          "id": "54652c04ca52dbeb3b7515f37a45ec515a99e31e",
          "message": "Improve SimHandleBase\n\n* Remove duplicate interface that conflicts with non-prefixed namespace\n  intended for sub-handles\n* Mark a couple methods as public\n* Improve typing and documentation",
          "timestamp": "2024-01-04T17:00:34-06:00",
          "tree_id": "e0a87697c294b3ac7555c563e341a3242067469a",
          "url": "https://github.com/cocotb/cocotb/commit/54652c04ca52dbeb3b7515f37a45ec515a99e31e"
        },
        "date": 1704409404973,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18786304074237636,
            "unit": "iter/sec",
            "range": "stddev: 0.032326048699568566",
            "extra": "mean: 5.3230267968000025 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2519876258279126,
            "unit": "iter/sec",
            "range": "stddev: 0.02568895210811397",
            "extra": "mean: 3.9684488343999873 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "139285a694c0b649b5eb2451a507b1bf4f5eaa46",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-01-12T13:59:03+01:00",
          "tree_id": "62ad6b2009d6768059f34a4531b0603f217f6c08",
          "url": "https://github.com/cocotb/cocotb/commit/139285a694c0b649b5eb2451a507b1bf4f5eaa46"
        },
        "date": 1705064531836,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18741551979549448,
            "unit": "iter/sec",
            "range": "stddev: 0.025864593076789226",
            "extra": "mean: 5.335737409000001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25060347814801714,
            "unit": "iter/sec",
            "range": "stddev: 0.056626929770310766",
            "extra": "mean: 3.9903676013999982 sec\nrounds: 5"
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
          "id": "8a994bb94f2e2abc819ba49fac2c5bb4b858b8aa",
          "message": "CI: When running Lint action, show git diff after running pre-commit\n\nFor PR feedback on failed lint checks, it is more useful to show the needed changes when possible rather than just Passed/Failed for each hook.",
          "timestamp": "2024-01-13T11:23:50-08:00",
          "tree_id": "4451fb5ec33230278d4a4e13afc676bee1572347",
          "url": "https://github.com/cocotb/cocotb/commit/8a994bb94f2e2abc819ba49fac2c5bb4b858b8aa"
        },
        "date": 1705174011271,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1878834510298961,
            "unit": "iter/sec",
            "range": "stddev: 0.04814969179552975",
            "extra": "mean: 5.322448542000006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.251632511172339,
            "unit": "iter/sec",
            "range": "stddev: 0.033813817268357395",
            "extra": "mean: 3.974049280599979 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "cae0d4ca4d2300372851b202cba21dd9c22b923b",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-01-14T10:02:00+01:00",
          "tree_id": "e71851cd9af0fe91badf8e9d0f4ed86f0abd7838",
          "url": "https://github.com/cocotb/cocotb/commit/cae0d4ca4d2300372851b202cba21dd9c22b923b"
        },
        "date": 1705223105456,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18661298286092276,
            "unit": "iter/sec",
            "range": "stddev: 0.04065648788003724",
            "extra": "mean: 5.35868397079999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24909138884273613,
            "unit": "iter/sec",
            "range": "stddev: 0.03576265882566494",
            "extra": "mean: 4.0145908079999915 sec\nrounds: 5"
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
          "id": "6dde70b5036c87b38eaad4aa582e1bd3673d5972",
          "message": "Update numbers on Xcelium's mixedlang recursive_discovery",
          "timestamp": "2024-01-14T21:09:02-06:00",
          "tree_id": "faf5116186e66cf6aff052c4761ce1e64e0438b4",
          "url": "https://github.com/cocotb/cocotb/commit/6dde70b5036c87b38eaad4aa582e1bd3673d5972"
        },
        "date": 1705288321016,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1866819623850543,
            "unit": "iter/sec",
            "range": "stddev: 0.04471520800303167",
            "extra": "mean: 5.356703921599978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2506006908583916,
            "unit": "iter/sec",
            "range": "stddev: 0.06336211067444605",
            "extra": "mean: 3.990411983999979 sec\nrounds: 5"
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
          "id": "579d0dbafc4a806da0ae4ebd9183227c3d360eb0",
          "message": "Add test that uses MODULE value of the form \"package_name.module_name\"",
          "timestamp": "2024-01-14T20:30:41-08:00",
          "tree_id": "b5aacb74a2d286887b98428f14defadb3cf4a0be",
          "url": "https://github.com/cocotb/cocotb/commit/579d0dbafc4a806da0ae4ebd9183227c3d360eb0"
        },
        "date": 1705293225541,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1870105128419465,
            "unit": "iter/sec",
            "range": "stddev: 0.033866226192402614",
            "extra": "mean: 5.347292966600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.25046181399068085,
            "unit": "iter/sec",
            "range": "stddev: 0.035798082443578724",
            "extra": "mean: 3.992624600399995 sec\nrounds: 5"
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
          "id": "6a3220c5ed6c05a48648593479438bdfa5c91648",
          "message": "Decouple implementation of Array and LogicArray (#3633)",
          "timestamp": "2024-01-15T18:16:37-06:00",
          "tree_id": "41caeb1ec0b87ac1f29a692a6fc928cf48b0a6b2",
          "url": "https://github.com/cocotb/cocotb/commit/6a3220c5ed6c05a48648593479438bdfa5c91648"
        },
        "date": 1705364370238,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1864410955416997,
            "unit": "iter/sec",
            "range": "stddev: 0.04091969751292339",
            "extra": "mean: 5.363624350599991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2502543612856081,
            "unit": "iter/sec",
            "range": "stddev: 0.010521811291746001",
            "extra": "mean: 3.995934356000009 sec\nrounds: 5"
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
          "id": "8978bb515e6ec34613ae42e44a2c2b3ced83671a",
          "message": "Don't require Verilator binary for testing (#3666)",
          "timestamp": "2024-01-18T09:01:07-06:00",
          "tree_id": "3d93e9bbe50c49c5968529487e74475f5a1febf8",
          "url": "https://github.com/cocotb/cocotb/commit/8978bb515e6ec34613ae42e44a2c2b3ced83671a"
        },
        "date": 1705590257876,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18737419983374118,
            "unit": "iter/sec",
            "range": "stddev: 0.029155781669524723",
            "extra": "mean: 5.336914051600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24791679912974823,
            "unit": "iter/sec",
            "range": "stddev: 0.03227127901725983",
            "extra": "mean: 4.0336112902000085 sec\nrounds: 5"
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
          "id": "77cd93a0de1a82553ebf1e9edfd3875dfb1da7e0",
          "message": "Improve RegionObjects\n\n* Make _child_handle and _sub_handle_key abstract and move base impl to\n  HierarchyObject.\n* Add _keys, _values, and _items to iterate over discovered objects.\n* Rename RegionObject to HierarchyObjectBase\n* rename HierarchyArray.__get_sub_handle_by_name to __getitem__ to add\n  support for index syntax.\n* remove invalid sub-handle caching as it's just silly to speed up an\n  invalid path that will likely never be hit again because of the\n  resulting AttributeError.\n* deprecate _id method as index syntax does everything it does with\n  better defaults.\n* Add left, right, direction, range, and __len__ methods to\n  HierarchyArrayObject.\n* Generalize __getitem__ and move to HierarchyObjectBase\n* Improve documentation and typing.",
          "timestamp": "2024-01-19T22:58:40-06:00",
          "tree_id": "d15368bd3b923a98b54e7d7b7d8ff39dc990afbe",
          "url": "https://github.com/cocotb/cocotb/commit/77cd93a0de1a82553ebf1e9edfd3875dfb1da7e0"
        },
        "date": 1705726924008,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1853807263407667,
            "unit": "iter/sec",
            "range": "stddev: 0.054276698058496546",
            "extra": "mean: 5.394304034399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24583542486220306,
            "unit": "iter/sec",
            "range": "stddev: 0.048172500642913174",
            "extra": "mean: 4.067762002000018 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "4b32fb9a3b7115da511bc35126d10547b10de699",
          "message": "Update pre-commit hooks",
          "timestamp": "2024-01-20T21:14:59+01:00",
          "tree_id": "893509032f1f2dfa73bb588439d589e2f7c1be92",
          "url": "https://github.com/cocotb/cocotb/commit/4b32fb9a3b7115da511bc35126d10547b10de699"
        },
        "date": 1705781905262,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.18444407667762872,
            "unit": "iter/sec",
            "range": "stddev: 0.04689294026956307",
            "extra": "mean: 5.4216975574000115 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24921928337393004,
            "unit": "iter/sec",
            "range": "stddev: 0.042501612937852526",
            "extra": "mean: 4.012530597400018 sec\nrounds: 5"
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
          "id": "4caa489e44f5f4887a994fc8a7d26b15d95e5ad2",
          "message": "Make Logic not hashable and support equality with literals",
          "timestamp": "2024-01-21T16:18:46-06:00",
          "tree_id": "c2363bbd2d294cefa7da0db56343ebd913449475",
          "url": "https://github.com/cocotb/cocotb/commit/4caa489e44f5f4887a994fc8a7d26b15d95e5ad2"
        },
        "date": 1705875784687,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09399326899932524,
            "unit": "iter/sec",
            "range": "stddev: 0.08074746951844941",
            "extra": "mean: 10.639059696999993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10624046359277722,
            "unit": "iter/sec",
            "range": "stddev: 0.10827806548629212",
            "extra": "mean: 9.412609529199994 sec\nrounds: 5"
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
          "id": "e9f745e183d9169e35ac627d144f818151182c92",
          "message": "Make cocotb.outcomes private",
          "timestamp": "2024-01-21T20:55:11-06:00",
          "tree_id": "7db718c24453a9edd340703980ee5d548745d448",
          "url": "https://github.com/cocotb/cocotb/commit/e9f745e183d9169e35ac627d144f818151182c92"
        },
        "date": 1705892363162,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09430416877929654,
            "unit": "iter/sec",
            "range": "stddev: 0.057572998627801825",
            "extra": "mean: 10.603985093600011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1067755485214801,
            "unit": "iter/sec",
            "range": "stddev: 0.10315611754744354",
            "extra": "mean: 9.365440064199992 sec\nrounds: 5"
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
          "id": "32450aab0a759c53c33e5a653ce61b80f7c8da0c",
          "message": "Update cocotb-coverage to 1.2 in ecosyste compat tests\n\nUse the latest upstream release of cocotb-coverage to get a better\nsignal how we're doing against cocotb-coverage. Some breakage is still\nexpected as we make rapid progress towards cocotb 2.0\n\nIncludes a fix for https://github.com/mciepluc/cocotb-coverage/issues/86.",
          "timestamp": "2024-01-22T10:02:07+01:00",
          "tree_id": "e845547f0956ae72ebc7e0370748086ccd68ffc8",
          "url": "https://github.com/cocotb/cocotb/commit/32450aab0a759c53c33e5a653ce61b80f7c8da0c"
        },
        "date": 1705914391700,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09385965152675035,
            "unit": "iter/sec",
            "range": "stddev: 0.11709802194659494",
            "extra": "mean: 10.654205334599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10673110302394001,
            "unit": "iter/sec",
            "range": "stddev: 0.02685699932190336",
            "extra": "mean: 9.369340067400014 sec\nrounds: 5"
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
          "id": "d6c1a2ec9fa3e41d071c8e5ee2e9965dd9295a7d",
          "message": "Allow runner absolute path results XML (#3669)",
          "timestamp": "2024-01-23T14:18:29-06:00",
          "tree_id": "9bb8766b2e3c7fff78bf2f0a977c2c6743017ccc",
          "url": "https://github.com/cocotb/cocotb/commit/d6c1a2ec9fa3e41d071c8e5ee2e9965dd9295a7d"
        },
        "date": 1706041384465,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09335174751817316,
            "unit": "iter/sec",
            "range": "stddev: 0.05945114309332392",
            "extra": "mean: 10.712172258000056 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10662709507810952,
            "unit": "iter/sec",
            "range": "stddev: 0.049386608753648274",
            "extra": "mean: 9.378479262399969 sec\nrounds: 5"
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
          "id": "62f1839525e56ee6fe17f558d49aa513fbc7e745",
          "message": "Runner log redirection (#3668)",
          "timestamp": "2024-01-24T20:38:12-06:00",
          "tree_id": "3eef9aeeb321daac1cc568c532ddd21b5dd4212b",
          "url": "https://github.com/cocotb/cocotb/commit/62f1839525e56ee6fe17f558d49aa513fbc7e745"
        },
        "date": 1706150536612,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09466621597643862,
            "unit": "iter/sec",
            "range": "stddev: 0.07215341442608621",
            "extra": "mean: 10.563430572200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10713033436662976,
            "unit": "iter/sec",
            "range": "stddev: 0.06057330005545922",
            "extra": "mean: 9.334424333800007 sec\nrounds: 5"
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
          "id": "f7b37ca50ccd72ba99a608f5d0acc634523bfcab",
          "message": "Add Verilator run-time trace switch (#3667)",
          "timestamp": "2024-01-24T20:38:46-06:00",
          "tree_id": "7542bea6496b41f3d242495568018b0641e46999",
          "url": "https://github.com/cocotb/cocotb/commit/f7b37ca50ccd72ba99a608f5d0acc634523bfcab"
        },
        "date": 1706150576911,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09383478446172619,
            "unit": "iter/sec",
            "range": "stddev: 0.08502957966150008",
            "extra": "mean: 10.657028795199983 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10665841921423884,
            "unit": "iter/sec",
            "range": "stddev: 0.09032282006325727",
            "extra": "mean: 9.375724929800015 sec\nrounds: 5"
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
          "id": "d6b13a505d3708c5178a96f470d81231685a8a9a",
          "message": "Fix ruff config (#3680)",
          "timestamp": "2024-01-27T10:27:16-06:00",
          "tree_id": "041a39f08de001ff893584b49519243c07003996",
          "url": "https://github.com/cocotb/cocotb/commit/d6b13a505d3708c5178a96f470d81231685a8a9a"
        },
        "date": 1706373077058,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09746665582228987,
            "unit": "iter/sec",
            "range": "stddev: 0.1403689466915807",
            "extra": "mean: 10.259919062200016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11235256288630327,
            "unit": "iter/sec",
            "range": "stddev: 0.09621856717198676",
            "extra": "mean: 8.90055352820001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcd021de003d74bbf45790d5cc3a6a53152229ba",
          "message": "Update pre-commit hooks (#3690)\n\nCo-authored-by: github-actions[bot] <github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-30T11:06:00-06:00",
          "tree_id": "49ac55ec4f0b2e894082eb6b15f3c0947ca714f4",
          "url": "https://github.com/cocotb/cocotb/commit/fcd021de003d74bbf45790d5cc3a6a53152229ba"
        },
        "date": 1706634676685,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09322077417206884,
            "unit": "iter/sec",
            "range": "stddev: 0.0255765422197255",
            "extra": "mean: 10.727222648400016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10615689460514144,
            "unit": "iter/sec",
            "range": "stddev: 0.07507518945288456",
            "extra": "mean: 9.420019337600024 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "caca6d3990e3f4675067431b7b9513d9bc8755d0",
          "message": "Bump peter-evans/create-pull-request from 5 to 6 (#3698)\n\nBumps [peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request) from 5 to 6.\r\n- [Release notes](https://github.com/peter-evans/create-pull-request/releases)\r\n- [Commits](https://github.com/peter-evans/create-pull-request/compare/v5...v6)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: peter-evans/create-pull-request\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-05T15:10:06-06:00",
          "tree_id": "d4acc8e33eb8e2e88bb4dfc5f54af03ecb7ed538",
          "url": "https://github.com/cocotb/cocotb/commit/caca6d3990e3f4675067431b7b9513d9bc8755d0"
        },
        "date": 1707167820580,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09406763591563896,
            "unit": "iter/sec",
            "range": "stddev: 0.09233299069832059",
            "extra": "mean: 10.630648790799977 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10675339488966422,
            "unit": "iter/sec",
            "range": "stddev: 0.03917722271359192",
            "extra": "mean: 9.367383595000025 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e144a6194c0e8ab790259e2ad5f2d7d90ea0ed5",
          "message": "Update pre-commit hooks (#3695)",
          "timestamp": "2024-02-05T15:13:03-06:00",
          "tree_id": "547ebe465339b076190ab1f94fe490946c91505b",
          "url": "https://github.com/cocotb/cocotb/commit/1e144a6194c0e8ab790259e2ad5f2d7d90ea0ed5"
        },
        "date": 1707168166597,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09382311655645213,
            "unit": "iter/sec",
            "range": "stddev: 0.0680557628401198",
            "extra": "mean: 10.658354110400001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10710833531924596,
            "unit": "iter/sec",
            "range": "stddev: 0.04811584245246753",
            "extra": "mean: 9.336341537 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "800538bb93057bba01859920b52cf8c558eb00eb",
          "message": "Update pre-commit hooks (#3700)",
          "timestamp": "2024-02-05T21:48:43-06:00",
          "tree_id": "439b49003c5beb2ebd6d6a8432a6e8c68409acb7",
          "url": "https://github.com/cocotb/cocotb/commit/800538bb93057bba01859920b52cf8c558eb00eb"
        },
        "date": 1707191585731,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0925334963955598,
            "unit": "iter/sec",
            "range": "stddev: 0.08105254043592576",
            "extra": "mean: 10.806897382599981 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10567190520663923,
            "unit": "iter/sec",
            "range": "stddev: 0.046798450291435895",
            "extra": "mean: 9.463253246399983 sec\nrounds: 5"
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
          "id": "338e62ceb53c465ea6cc8891e21ca87e0d41518a",
          "message": "Fix ruff config for ruff==2.0 (#3701)",
          "timestamp": "2024-02-06T00:36:39-06:00",
          "tree_id": "f3fccb00afa7d8f54604c78ad865b2e4fb055a27",
          "url": "https://github.com/cocotb/cocotb/commit/338e62ceb53c465ea6cc8891e21ca87e0d41518a"
        },
        "date": 1707201657183,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09270552998516357,
            "unit": "iter/sec",
            "range": "stddev: 0.10743376176994043",
            "extra": "mean: 10.786843030400002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10517199268147089,
            "unit": "iter/sec",
            "range": "stddev: 0.05740772752278283",
            "extra": "mean: 9.508234792400003 sec\nrounds: 5"
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
          "id": "a8f56c34b5a4ce571719d4a3aa2ebfd523d07e23",
          "message": "Return GPI_REGISTER for integer const types (#3691)",
          "timestamp": "2024-02-06T19:32:51-06:00",
          "tree_id": "053998c033325f6d06bd01ffed858565572b0514",
          "url": "https://github.com/cocotb/cocotb/commit/a8f56c34b5a4ce571719d4a3aa2ebfd523d07e23"
        },
        "date": 1707269833753,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09086713624545176,
            "unit": "iter/sec",
            "range": "stddev: 0.08551959944535484",
            "extra": "mean: 11.0050788582 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10592186869633084,
            "unit": "iter/sec",
            "range": "stddev: 0.026862167866934277",
            "extra": "mean: 9.440921051599991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13f8545930201250e2dc7a95ec9b165571482bfc",
          "message": "runner trace building for Verilator (#3681)\n\n\r\n---------\r\n\r\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2024-02-07T17:43:16+01:00",
          "tree_id": "ccf39c7881088f6e116d7746b8596ed5b6f23283",
          "url": "https://github.com/cocotb/cocotb/commit/13f8545930201250e2dc7a95ec9b165571482bfc"
        },
        "date": 1707324451175,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09144692096749037,
            "unit": "iter/sec",
            "range": "stddev: 0.06079306975294502",
            "extra": "mean: 10.935305305199972 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10635661384209864,
            "unit": "iter/sec",
            "range": "stddev: 0.05847840315394148",
            "extra": "mean: 9.402330178400007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "704ff21ac2eb5d8a6c68d8d83c28e3d151f519a7",
          "message": "Add test_args to Python runner for Verilator (#3682)\n\n\r\n---------\r\n\r\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2024-02-07T17:45:28+01:00",
          "tree_id": "bbe88005704f6e6f5be83fbfe0bc7261b288e37d",
          "url": "https://github.com/cocotb/cocotb/commit/704ff21ac2eb5d8a6c68d8d83c28e3d151f519a7"
        },
        "date": 1707324578704,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09085518034252997,
            "unit": "iter/sec",
            "range": "stddev: 0.05788884735088923",
            "extra": "mean: 11.006527049199997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10666342807600376,
            "unit": "iter/sec",
            "range": "stddev: 0.13147452284370534",
            "extra": "mean: 9.375284650399976 sec\nrounds: 5"
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
          "id": "fdf7286a3a38b703dc4a3bb7c707bfcd2263773a",
          "message": "Parse log level in embed (#3676)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-02-07T17:54:06+01:00",
          "tree_id": "3a5cec2073fc0f3aa9155597f50c8052bd3db15b",
          "url": "https://github.com/cocotb/cocotb/commit/fdf7286a3a38b703dc4a3bb7c707bfcd2263773a"
        },
        "date": 1707325152492,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09085746977839312,
            "unit": "iter/sec",
            "range": "stddev: 0.03048106213813773",
            "extra": "mean: 11.006249705599998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10629536277590186,
            "unit": "iter/sec",
            "range": "stddev: 0.11372076595694747",
            "extra": "mean: 9.407748126400008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "themperek@users.noreply.github.com",
            "name": "Tomasz Hemperek",
            "username": "themperek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f918a196fc051a87a528e252b606e8428d5c31b",
          "message": "Enable widows testing in CI (#3706)",
          "timestamp": "2024-02-08T08:55:55+01:00",
          "tree_id": "382c6568881e22d417996ea0b1a6479863c48be6",
          "url": "https://github.com/cocotb/cocotb/commit/0f918a196fc051a87a528e252b606e8428d5c31b"
        },
        "date": 1707379211748,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09071358622177055,
            "unit": "iter/sec",
            "range": "stddev: 0.15735737143278877",
            "extra": "mean: 11.023707050399997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1077750260856662,
            "unit": "iter/sec",
            "range": "stddev: 0.07894755322298198",
            "extra": "mean: 9.278587408600009 sec\nrounds: 5"
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
          "id": "e1343babbfb3886723ee3e5006a9a9b454549c76",
          "message": "Verilator trace file name parameter (#3683)",
          "timestamp": "2024-02-08T09:30:04-06:00",
          "tree_id": "2509b572e83ad7d9a421b4ee56e75a4d4007cecb",
          "url": "https://github.com/cocotb/cocotb/commit/e1343babbfb3886723ee3e5006a9a9b454549c76"
        },
        "date": 1707406486213,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09127870230634554,
            "unit": "iter/sec",
            "range": "stddev: 0.06513372173582956",
            "extra": "mean: 10.955458115999988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.10596103033283073,
            "unit": "iter/sec",
            "range": "stddev: 0.040622328239833284",
            "extra": "mean: 9.437431826199997 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54800b32fb04b8e2491a120ca6a3004d5ede9087",
          "message": "Validate the pyproject.toml file in pre-commit (#3618)\n\nThe Python tool \"validate-pyproject\" validates the pyproject.toml\r\nagainst a schema. The schemas are shipped in\r\nvalidate-pyproject-schema-store. We want to pin the version of the\r\nschema used to validate our pyproject.toml. We do that by using\r\nvalidate-pyproject-schema-store directly (which depends on\r\nvalidate-pyproject).\r\n\r\nAs a downside, the schema validation adds around 1.5 seconds to a\r\npre-commit run (or in relative numbers, a run now takes roughly 2.5x as\r\nlong on my machine).\r\n\r\nFixes #3617",
          "timestamp": "2024-02-12T08:51:24-06:00",
          "tree_id": "2afac0c1ccf33cafee92885e435613c965997376",
          "url": "https://github.com/cocotb/cocotb/commit/54800b32fb04b8e2491a120ca6a3004d5ede9087"
        },
        "date": 1707749697143,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09011043301229696,
            "unit": "iter/sec",
            "range": "stddev: 0.05052798367718789",
            "extra": "mean: 11.09749411439999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2892530876907149,
            "unit": "iter/sec",
            "range": "stddev: 0.034022082032106715",
            "extra": "mean: 3.4571800356000155 sec\nrounds: 5"
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
          "id": "87e85fd20b19ec73551496a63f4da7479259e383",
          "message": "Rename cocotb.log to cocotb.logging",
          "timestamp": "2024-02-14T12:42:33-06:00",
          "tree_id": "808c03775e67cf19ebef0f59629d8859bc0780a4",
          "url": "https://github.com/cocotb/cocotb/commit/87e85fd20b19ec73551496a63f4da7479259e383"
        },
        "date": 1707936364050,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09117765783676048,
            "unit": "iter/sec",
            "range": "stddev: 0.06663630244193448",
            "extra": "mean: 10.967599121600006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.29445179322278475,
            "unit": "iter/sec",
            "range": "stddev: 0.03241378342667456",
            "extra": "mean: 3.3961416537999867 sec\nrounds: 5"
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
          "id": "a4f93e95419ad1c1826938b5222891ebcfe3e4f5",
          "message": "Add support for casting LogicArray to str and int literal reprs",
          "timestamp": "2024-02-14T17:29:07-06:00",
          "tree_id": "3e6e10effd658055146c70fcf02ef05b885f12d8",
          "url": "https://github.com/cocotb/cocotb/commit/a4f93e95419ad1c1826938b5222891ebcfe3e4f5"
        },
        "date": 1707953553486,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10137893578162581,
            "unit": "iter/sec",
            "range": "stddev: 0.057423583356015606",
            "extra": "mean: 9.86398202239999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.3047087306112769,
            "unit": "iter/sec",
            "range": "stddev: 0.03815372556229728",
            "extra": "mean: 3.2818226047999928 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ecb564e616c17f1617e07b91e2d937a4d640ac5",
          "message": "Update pre-commit hooks (#3713)\n\nCo-authored-by: github-actions[bot] <github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-14T21:25:17-06:00",
          "tree_id": "dfc6a37fbb2245d1b4a968849b5340b8f8256635",
          "url": "https://github.com/cocotb/cocotb/commit/6ecb564e616c17f1617e07b91e2d937a4d640ac5"
        },
        "date": 1707967724773,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10136761844868623,
            "unit": "iter/sec",
            "range": "stddev: 0.05353399560928395",
            "extra": "mean: 9.865083300799995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.305445848027305,
            "unit": "iter/sec",
            "range": "stddev: 0.045791338055472454",
            "extra": "mean: 3.2739027439999973 sec\nrounds: 5"
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
          "id": "bb2be9cd00da651c930dc61daf7adec9dc994903",
          "message": "Remove unused Queue._finished Event\n\nThis was used to support the proposed Queue.task_done() and Queue.join(),\nbut those were removed during review of #2404. Removing the unused _finished\nEvent was overlooked.",
          "timestamp": "2024-02-16T17:17:09-08:00",
          "tree_id": "ca5ea1dcfddee632c45959f673e51f934db3d7b0",
          "url": "https://github.com/cocotb/cocotb/commit/bb2be9cd00da651c930dc61daf7adec9dc994903"
        },
        "date": 1708132838614,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09974613934847852,
            "unit": "iter/sec",
            "range": "stddev: 0.1889179116216828",
            "extra": "mean: 10.025450674399996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2934649896911726,
            "unit": "iter/sec",
            "range": "stddev: 0.037151219307684225",
            "extra": "mean: 3.4075614984000255 sec\nrounds: 5"
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
          "id": "0f9934d679ddd41086ffddf4061f780b60ead30f",
          "message": "Fix docstring links to SimTimeoutError (#3723)",
          "timestamp": "2024-02-19T20:08:58+01:00",
          "tree_id": "55c8660383786591c566c21d61c300cb962bbd57",
          "url": "https://github.com/cocotb/cocotb/commit/0f9934d679ddd41086ffddf4061f780b60ead30f"
        },
        "date": 1708369942060,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10096511555005418,
            "unit": "iter/sec",
            "range": "stddev: 0.04501629659890453",
            "extra": "mean: 9.904410989400025 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.3028771318419832,
            "unit": "iter/sec",
            "range": "stddev: 0.029238127197587668",
            "extra": "mean: 3.301668877799989 sec\nrounds: 5"
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
          "id": "54447c6629b84339a752fabc7fb41f3a29f71c01",
          "message": "Add more integer parameters to test_package (#3729)",
          "timestamp": "2024-02-22T16:28:15-08:00",
          "tree_id": "50aefa8abd1fab6dcbfcb1049150742db251353e",
          "url": "https://github.com/cocotb/cocotb/commit/54447c6629b84339a752fabc7fb41f3a29f71c01"
        },
        "date": 1708648295680,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10157999702814781,
            "unit": "iter/sec",
            "range": "stddev: 0.058292849324330785",
            "extra": "mean: 9.844457858400016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.30882880230296067,
            "unit": "iter/sec",
            "range": "stddev: 0.040847793772626935",
            "extra": "mean: 3.2380399514000033 sec\nrounds: 5"
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
          "id": "e80e560e0adb87130c7eacdcc54942bf542975f5",
          "message": "Update version of NVC used in CI",
          "timestamp": "2024-02-24T09:20:53-06:00",
          "tree_id": "5632a8e5bffa8c5b6c0c43ee3fd7f812d8b9e95c",
          "url": "https://github.com/cocotb/cocotb/commit/e80e560e0adb87130c7eacdcc54942bf542975f5"
        },
        "date": 1708788293530,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10085324300162672,
            "unit": "iter/sec",
            "range": "stddev: 0.11319662601316402",
            "extra": "mean: 9.915397564199997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12047411939126203,
            "unit": "iter/sec",
            "range": "stddev: 0.05012545011066427",
            "extra": "mean: 8.300537949999988 sec\nrounds: 5"
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
          "id": "ac4e0112f4aef0ebf5cf4e46fd15ee003f4496ca",
          "message": "Improve `test_multi_dimensional_array` (#3735)\n\n* Run test_multidimensional_array with Icarus\r\n* Only run if above 10.3\r\n* Add additional tests to test_multi_dimension_array",
          "timestamp": "2024-02-24T10:35:03-06:00",
          "tree_id": "d87a8216e340185d26fafa5a5e732f23fc886b23",
          "url": "https://github.com/cocotb/cocotb/commit/ac4e0112f4aef0ebf5cf4e46fd15ee003f4496ca"
        },
        "date": 1708792746681,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1011860230747905,
            "unit": "iter/sec",
            "range": "stddev: 0.029204094052808525",
            "extra": "mean: 9.882787855599991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12015165712296841,
            "unit": "iter/sec",
            "range": "stddev: 0.06182900198604481",
            "extra": "mean: 8.322814881999978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6511d5a9e1c49937583479e7ef3ff55465dc06f7",
          "message": "Update pre-commit hooks (#3721)\n\nCo-authored-by: github-actions[bot] <github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-24T10:35:32-06:00",
          "tree_id": "2a7c55093c5d2a5887d79c0fdfb8070823959165",
          "url": "https://github.com/cocotb/cocotb/commit/6511d5a9e1c49937583479e7ef3ff55465dc06f7"
        },
        "date": 1708792780426,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10222582850092937,
            "unit": "iter/sec",
            "range": "stddev: 0.12133513398324386",
            "extra": "mean: 9.782263589000001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12124071232622538,
            "unit": "iter/sec",
            "range": "stddev: 0.07267528494745729",
            "extra": "mean: 8.248054476200002 sec\nrounds: 5"
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
          "id": "6238c512a7cec30a2aaab6583a4554652c4fc3fc",
          "message": "Refactor of the RegressionManager\n\nYes! Again!\n\nfilter_tests is now add_filters which simply register filters with the\nRegressionManager. Additionally, there is a set_mode method which allows\nthe user to set the mode of the RegressionManager. Currently this is\njust used for informing the test initialization logic that we specified\nTESTCASE and want to still run skipped tests. All of this is synthesized\nin the start_regression call.\n\nThe other upshot of doing it this way is that excluded tests appear in\nthe results.xml in order of declaration rather than all pushed towards\nthe beginning.\n\nMore documentation and comments have been added throughout.\n\nThe awkward combination of _start_test, _init_test, and _next_test have\nall been combined into _execute, so it's easier to see the full logic\nbeing applied to each test.\n\nThe sim_failed logic in the callback side of the regression manager has\nbeen piped out so it can work with the new _execute to save some logic.",
          "timestamp": "2024-02-24T14:56:25-06:00",
          "tree_id": "d4065484cac5d91e61517de31aec74f4f6a38108",
          "url": "https://github.com/cocotb/cocotb/commit/6238c512a7cec30a2aaab6583a4554652c4fc3fc"
        },
        "date": 1708808428543,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10039722149842936,
            "unit": "iter/sec",
            "range": "stddev: 0.03205730136789127",
            "extra": "mean: 9.960435010800017 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1192690990241576,
            "unit": "iter/sec",
            "range": "stddev: 0.06440885945922144",
            "extra": "mean: 8.384401392999985 sec\nrounds: 5"
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
          "id": "393b3284b05a27b4c7e8c0d6635492347a7f03fe",
          "message": "CI: Update pinned Verilator version to latest release (#3739)",
          "timestamp": "2024-02-24T16:02:17-08:00",
          "tree_id": "a51789f02c6cdf243ed96e31ffaf00142cb53020",
          "url": "https://github.com/cocotb/cocotb/commit/393b3284b05a27b4c7e8c0d6635492347a7f03fe"
        },
        "date": 1708819602382,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10061633669175576,
            "unit": "iter/sec",
            "range": "stddev: 0.05376436266934655",
            "extra": "mean: 9.938743874799979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12121824068211577,
            "unit": "iter/sec",
            "range": "stddev: 0.06075680949860217",
            "extra": "mean: 8.249583514600022 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "78746991+hakan-demirli@users.noreply.github.com",
            "name": "hakan-demirli",
            "username": "hakan-demirli"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4604cfa64a47312a2927e14399501b56f29174a",
          "message": "Add pre_cmd runner test argument to Questa/Modelsim\n\nCo-authored-by: Vladislav Borshch <borchsh.vn@gmail.com>",
          "timestamp": "2024-02-28T12:31:43-06:00",
          "tree_id": "450a62a2208a053a11e83f19e56b307ea34a9a67",
          "url": "https://github.com/cocotb/cocotb/commit/e4604cfa64a47312a2927e14399501b56f29174a"
        },
        "date": 1709145341025,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1005946915813558,
            "unit": "iter/sec",
            "range": "stddev: 0.0972183511332269",
            "extra": "mean: 9.94088240920001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12037856349702135,
            "unit": "iter/sec",
            "range": "stddev: 0.06464949368462539",
            "extra": "mean: 8.307126875 sec\nrounds: 5"
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
          "id": "65d102f2fb38b1cc4327bbd0371deee09758442a",
          "message": "Merge pull request #3737 from ktbarrett/split-vpi-cb-1\n\nSplit VpiCbHdl.cpp (with history)",
          "timestamp": "2024-02-28T16:30:39-06:00",
          "tree_id": "1ddc6d849133c5a43df406c0f805a7c01abeed14",
          "url": "https://github.com/cocotb/cocotb/commit/65d102f2fb38b1cc4327bbd0371deee09758442a"
        },
        "date": 1709159687024,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10117603064671511,
            "unit": "iter/sec",
            "range": "stddev: 0.05602114221714485",
            "extra": "mean: 9.88376390740001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12068490826584231,
            "unit": "iter/sec",
            "range": "stddev: 0.08067154885256897",
            "extra": "mean: 8.286040188200001 sec\nrounds: 5"
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
          "id": "2a0fbd82bb3005c6fa5063b99053e001f0a367c8",
          "message": "Move extensions page from Reference to Howto (#3750)\n\nCloses #3641",
          "timestamp": "2024-03-01T23:04:24+01:00",
          "tree_id": "645a02acf0cf5ee2801c6214c535e59e1d4e0563",
          "url": "https://github.com/cocotb/cocotb/commit/2a0fbd82bb3005c6fa5063b99053e001f0a367c8"
        },
        "date": 1709330905725,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10034423631524776,
            "unit": "iter/sec",
            "range": "stddev: 0.18222679828587857",
            "extra": "mean: 9.96569446059998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12138862663748733,
            "unit": "iter/sec",
            "range": "stddev: 0.029094855886472645",
            "extra": "mean: 8.238004067600013 sec\nrounds: 5"
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
          "id": "5aa56087f2123cff6670b5e635670d6cb01d27f4",
          "message": "Move triggers list to Library Reference page (#3752)\n\nCloses #3640",
          "timestamp": "2024-03-01T23:07:04+01:00",
          "tree_id": "81f46ca3ecac03735234fe0a4554aac809b24564",
          "url": "https://github.com/cocotb/cocotb/commit/5aa56087f2123cff6670b5e635670d6cb01d27f4"
        },
        "date": 1709331071471,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10062086276496733,
            "unit": "iter/sec",
            "range": "stddev: 0.05274225753946933",
            "extra": "mean: 9.938296815600006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11859627016295807,
            "unit": "iter/sec",
            "range": "stddev: 0.09842967739247788",
            "extra": "mean: 8.43196838 sec\nrounds: 5"
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
          "id": "21f1adc39db198fa5752c8d241d501104d9adf6e",
          "message": "Add lru_cache to want_color_output() (#3753)\n\nCloses #3720",
          "timestamp": "2024-03-01T23:07:47+01:00",
          "tree_id": "a61cff1711567bc9fe591c47cbafe331194bf074",
          "url": "https://github.com/cocotb/cocotb/commit/21f1adc39db198fa5752c8d241d501104d9adf6e"
        },
        "date": 1709331380070,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10114077912830152,
            "unit": "iter/sec",
            "range": "stddev: 0.09869919180583506",
            "extra": "mean: 9.887208785799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11987281886909049,
            "unit": "iter/sec",
            "range": "stddev: 0.038987540117972855",
            "extra": "mean: 8.342174726799993 sec\nrounds: 5"
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
          "id": "cd1b5b4d7e797646874ca1c98c4b227ea67ce591",
          "message": "Add missing `--trace` option to Verilator docs (#3751)\n\nCloses #3687",
          "timestamp": "2024-03-01T23:11:09+01:00",
          "tree_id": "db0e1225f8fa991c039f2c1bc2803371348bd9ca",
          "url": "https://github.com/cocotb/cocotb/commit/cd1b5b4d7e797646874ca1c98c4b227ea67ce591"
        },
        "date": 1709332083780,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10143465899459268,
            "unit": "iter/sec",
            "range": "stddev: 0.06886812877596986",
            "extra": "mean: 9.858563235799988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12023483972636692,
            "unit": "iter/sec",
            "range": "stddev: 0.045555910964285",
            "extra": "mean: 8.317056872000013 sec\nrounds: 5"
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
          "id": "98f19f690093ebcf9389a1bb68bb81c4f66ce938",
          "message": "Simplify TestFactory.generate_tests now that parameterize is standalone",
          "timestamp": "2024-03-01T19:51:42-06:00",
          "tree_id": "6f37e4addad81440b0d95f60b00aebab198493e6",
          "url": "https://github.com/cocotb/cocotb/commit/98f19f690093ebcf9389a1bb68bb81c4f66ce938"
        },
        "date": 1709344553360,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10107957780878246,
            "unit": "iter/sec",
            "range": "stddev: 0.035365909528094715",
            "extra": "mean: 9.893195259399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1215668695847991,
            "unit": "iter/sec",
            "range": "stddev: 0.09177856652020852",
            "extra": "mean: 8.225925397399896 sec\nrounds: 5"
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
          "id": "98c31e425cd7a275a992bad69e84827eb4a6b4b8",
          "message": "Docs: Update Verilator support section for minimum supported version of 5.022 (#3740)",
          "timestamp": "2024-03-03T07:51:53-08:00",
          "tree_id": "4b2f4a1dabbc88a23b396803a86755102e267f22",
          "url": "https://github.com/cocotb/cocotb/commit/98c31e425cd7a275a992bad69e84827eb4a6b4b8"
        },
        "date": 1709481381200,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10046690536695434,
            "unit": "iter/sec",
            "range": "stddev: 0.10504398322007111",
            "extra": "mean: 9.953526450799995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12072639998862902,
            "unit": "iter/sec",
            "range": "stddev: 0.1130011273576987",
            "extra": "mean: 8.283192409399998 sec\nrounds: 5"
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
          "id": "318ec4b2653d479bb0a7b44e3e58eac20fb68bc7",
          "message": "Remove Makefile variables that are cocotb-config calls\n\nThis should increase startup speed. Also the documentation for these\nvariables was removed.",
          "timestamp": "2024-03-06T14:26:17-07:00",
          "tree_id": "9e627ed2fef93ac494747b378a8fcc504c1f6d97",
          "url": "https://github.com/cocotb/cocotb/commit/318ec4b2653d479bb0a7b44e3e58eac20fb68bc7"
        },
        "date": 1709760627742,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10094668767337184,
            "unit": "iter/sec",
            "range": "stddev: 0.10439184724754205",
            "extra": "mean: 9.906219045399984 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12115215681259886,
            "unit": "iter/sec",
            "range": "stddev: 0.04157933043947162",
            "extra": "mean: 8.254083346999959 sec\nrounds: 5"
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
          "id": "9047604b8e811aef8e81e43674f07f5823b8a081",
          "message": "Remove remaining uses of COCOTB_SIM (#3762)",
          "timestamp": "2024-03-09T09:39:02-08:00",
          "tree_id": "7fa5c1f9215232d5c52a4ca09bb969b3a9ded08b",
          "url": "https://github.com/cocotb/cocotb/commit/9047604b8e811aef8e81e43674f07f5823b8a081"
        },
        "date": 1710006188894,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.100665992061923,
            "unit": "iter/sec",
            "range": "stddev: 0.08249381393752017",
            "extra": "mean: 9.933841404800011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12106649992836879,
            "unit": "iter/sec",
            "range": "stddev: 0.05731280576081368",
            "extra": "mean: 8.2599232702 sec\nrounds: 5"
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
          "id": "2850d55af8cfdfeca2dd3a3f87f78516c8616fea",
          "message": "Fix logic on deducing direction HierarchyArrayObject",
          "timestamp": "2024-03-09T12:17:42-06:00",
          "tree_id": "0107be4b387cc982796a9ce846deb7b7db181de4",
          "url": "https://github.com/cocotb/cocotb/commit/2850d55af8cfdfeca2dd3a3f87f78516c8616fea"
        },
        "date": 1710008514107,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10071874097754847,
            "unit": "iter/sec",
            "range": "stddev: 0.07204968605777956",
            "extra": "mean: 9.928638804399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11932858018985047,
            "unit": "iter/sec",
            "range": "stddev: 0.07238167385981402",
            "extra": "mean: 8.38022205919999 sec\nrounds: 5"
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
          "id": "1f0380b3fdc8017062b637a372fb916430f407e5",
          "message": "Remove redundant coverage configuration\n\nThe `run` section is only applied when `coverage run` is used. We are never doing this. Also, the configuration was stale.",
          "timestamp": "2024-03-11T17:18:02-05:00",
          "tree_id": "7becba8fc0f1aab59f2c8c21ca6e04490f8c255f",
          "url": "https://github.com/cocotb/cocotb/commit/1f0380b3fdc8017062b637a372fb916430f407e5"
        },
        "date": 1710195721691,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10095196303563649,
            "unit": "iter/sec",
            "range": "stddev: 0.14341353817244615",
            "extra": "mean: 9.90570138439998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12060308477062671,
            "unit": "iter/sec",
            "range": "stddev: 0.06096781910583962",
            "extra": "mean: 8.291661875000012 sec\nrounds: 5"
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
          "id": "b24ce2936cd1bc3b506eee25cb8554f19d938334",
          "message": "Fixed pre-commit autoupdate (#3771)",
          "timestamp": "2024-03-13T15:22:53-05:00",
          "tree_id": "6ca11a4070eb4ac1d68c89ff0d4a9c637532f860",
          "url": "https://github.com/cocotb/cocotb/commit/b24ce2936cd1bc3b506eee25cb8554f19d938334"
        },
        "date": 1710361629598,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1010911438563355,
            "unit": "iter/sec",
            "range": "stddev: 0.0747076012771012",
            "extra": "mean: 9.892063358400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11997520753895616,
            "unit": "iter/sec",
            "range": "stddev: 0.09564545589829503",
            "extra": "mean: 8.335055387800002 sec\nrounds: 5"
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
          "id": "3c767afed12aede04551f04550acd488acef621e",
          "message": "CI: Test more Questa and Riviera-PRO versions\n\nIn the previous private CI setup, we ran a number of Questa and\nRiviera-PRO versions in extended tests. Add those same tests to our\nnew CI setup.",
          "timestamp": "2024-03-13T23:36:45+01:00",
          "tree_id": "553c5f4b748663aae5988e02415cd68307efbd21",
          "url": "https://github.com/cocotb/cocotb/commit/3c767afed12aede04551f04550acd488acef621e"
        },
        "date": 1710369657077,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10077569118632614,
            "unit": "iter/sec",
            "range": "stddev: 0.08270161119767008",
            "extra": "mean: 9.923027946799994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1193455511788269,
            "unit": "iter/sec",
            "range": "stddev: 0.03657528179382329",
            "extra": "mean: 8.379030388 sec\nrounds: 5"
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
          "id": "e1b92e9860b8eb57b3a00204f220433492da0514",
          "message": "CI: Update the codecov GH action to v4\n\nUpdate to the latest version of the codecov GH Action and its uploader.\n\nMost notably, this action now uses nodejs 20 instead of 16, which\nGitHub prominently warns about.\n\nLess notably, this action is a significant rewrite from the previous\nversion, which uses the codecov-cli behind the covers.",
          "timestamp": "2024-03-13T23:41:55+01:00",
          "tree_id": "87b2989237af2a8f632d695efd140c515f23361b",
          "url": "https://github.com/cocotb/cocotb/commit/e1b92e9860b8eb57b3a00204f220433492da0514"
        },
        "date": 1710369957444,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10164325877053805,
            "unit": "iter/sec",
            "range": "stddev: 0.04932953761859574",
            "extra": "mean: 9.838330766800016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12160648931172141,
            "unit": "iter/sec",
            "range": "stddev: 0.04377676922861514",
            "extra": "mean: 8.223245368400024 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rk.ryan.king@gmail.com",
            "name": "Ryan King",
            "username": "rkryan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "381502c29f084f2f8f9408f856146b5d2801eba9",
          "message": "Add failing testcase for vhdl architecture naming (#3770)\n\nWith Xcelium and a vhdl top level, a design where the top level has an\r\nentity and architecture with the same name will lead to an error:\r\n`VHPI: Not able to map type (vhpiArchBodyK) 1007 to object`. This\r\ntestcase deliberately hits this error.\r\n\r\nThis is detailed in https://github.com/cocotb/cocotb/issues/3769.",
          "timestamp": "2024-03-13T19:09:27-05:00",
          "tree_id": "bcf34af7d54d6a44bd00135139219dfdb766160f",
          "url": "https://github.com/cocotb/cocotb/commit/381502c29f084f2f8f9408f856146b5d2801eba9"
        },
        "date": 1710375465501,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10097264843117067,
            "unit": "iter/sec",
            "range": "stddev: 0.09403667570253432",
            "extra": "mean: 9.903672088799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11987980530688805,
            "unit": "iter/sec",
            "range": "stddev: 0.02909030034042323",
            "extra": "mean: 8.3416885558 sec\nrounds: 5"
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
          "id": "22ce6d980c69f31e7565ae012d1ba2990ef5f1d8",
          "message": "Small typing cleanup of Task and related functions (#3783)",
          "timestamp": "2024-03-15T19:23:47-07:00",
          "tree_id": "f04f13387f7989182413e09105af19f06ac20575",
          "url": "https://github.com/cocotb/cocotb/commit/22ce6d980c69f31e7565ae012d1ba2990ef5f1d8"
        },
        "date": 1710556068088,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10105108210701032,
            "unit": "iter/sec",
            "range": "stddev: 0.050388595291326166",
            "extra": "mean: 9.8959850716 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11997246223605393,
            "unit": "iter/sec",
            "range": "stddev: 0.11346859059674315",
            "extra": "mean: 8.33524611700002 sec\nrounds: 5"
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
          "id": "0d4f8e051a593bf28192f5f93d584f1f6e275623",
          "message": "Change docstring on cocotb.SIM_NAME",
          "timestamp": "2024-03-17T13:50:09-05:00",
          "tree_id": "c68fb05aee39333b9c629462cfc602ea92c93b53",
          "url": "https://github.com/cocotb/cocotb/commit/0d4f8e051a593bf28192f5f93d584f1f6e275623"
        },
        "date": 1710701681954,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1011445933948198,
            "unit": "iter/sec",
            "range": "stddev: 0.05022955053975652",
            "extra": "mean: 9.886835928999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1201129562457948,
            "unit": "iter/sec",
            "range": "stddev: 0.0728221216470238",
            "extra": "mean: 8.325496526400002 sec\nrounds: 5"
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
          "id": "961cf4b6e4c880946bfa70c7254d26930bac0b58",
          "message": "Use pre-commit.ci (#3780)\n\nLet's give up trying to make our own pre-commit update action and\r\ninstead use pre-commit.ci.\r\n\r\nDisabling autofixing PRs because we want clean history.",
          "timestamp": "2024-03-18T17:56:53-05:00",
          "tree_id": "c99d1ab8b841151aec6f04e21dbc75bc9fb3e566",
          "url": "https://github.com/cocotb/cocotb/commit/961cf4b6e4c880946bfa70c7254d26930bac0b58"
        },
        "date": 1710802854821,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10089271373182782,
            "unit": "iter/sec",
            "range": "stddev: 0.05351082232490427",
            "extra": "mean: 9.911518513200008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12063087981738038,
            "unit": "iter/sec",
            "range": "stddev: 0.06781334995745543",
            "extra": "mean: 8.289751359800004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "785e0896930039023db3c2e2be47bed5375326c5",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3784)\n\n* [pre-commit.ci] pre-commit autoupdate\r\n\r\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.2.2 → v0.3.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.2.2...v0.3.3)\r\n- [github.com/pre-commit/mirrors-clang-format: v17.0.6 → v18.1.1](https://github.com/pre-commit/mirrors-clang-format/compare/v17.0.6...v18.1.1)\r\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.02.13 → 2024.03.18](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.02.13...2024.03.18)\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n---------\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T19:00:06-05:00",
          "tree_id": "63d65de57800dc31c141b78fcfe7002cd5ed181c",
          "url": "https://github.com/cocotb/cocotb/commit/785e0896930039023db3c2e2be47bed5375326c5"
        },
        "date": 1710806691608,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1012063490372658,
            "unit": "iter/sec",
            "range": "stddev: 0.11663468257496601",
            "extra": "mean: 9.880803027800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12098527855744891,
            "unit": "iter/sec",
            "range": "stddev: 0.0540203405622448",
            "extra": "mean: 8.2654684266 sec\nrounds: 5"
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
          "id": "9c026e6a61b5cfe63dada039caf485e9db594149",
          "message": "Cleanup after pre-commit autoupdate (#3786)",
          "timestamp": "2024-03-19T23:32:24-05:00",
          "tree_id": "15fc4d18ce9e64007c908b4a5664d224c6633666",
          "url": "https://github.com/cocotb/cocotb/commit/9c026e6a61b5cfe63dada039caf485e9db594149"
        },
        "date": 1710909397820,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10018994488659551,
            "unit": "iter/sec",
            "range": "stddev: 0.08289317027113628",
            "extra": "mean: 9.981041521999988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12059451499413601,
            "unit": "iter/sec",
            "range": "stddev: 0.14912592474339734",
            "extra": "mean: 8.292251103200055 sec\nrounds: 5"
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
          "id": "52ddbfa9dedbf06a2a66810ac761566713ba36f8",
          "message": "Limit setting of CFLAGS to cocotb build only in noxfile",
          "timestamp": "2024-03-20T11:27:23-05:00",
          "tree_id": "2d6f8c9181aa3582775194ad6ba766d6ee163b75",
          "url": "https://github.com/cocotb/cocotb/commit/52ddbfa9dedbf06a2a66810ac761566713ba36f8"
        },
        "date": 1710952294084,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10066725596791076,
            "unit": "iter/sec",
            "range": "stddev: 0.030450761014607367",
            "extra": "mean: 9.933716682600004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1204882004891474,
            "unit": "iter/sec",
            "range": "stddev: 0.06132511396259728",
            "extra": "mean: 8.299567890799995 sec\nrounds: 5"
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
          "id": "3782fb2bcd5e7d75754a017a89002e012a0f6083",
          "message": "Update gcovr comment in noxfile",
          "timestamp": "2024-03-20T18:52:08+01:00",
          "tree_id": "26716ab3e6169f98e85ca9d154e3a4ff94597ac6",
          "url": "https://github.com/cocotb/cocotb/commit/3782fb2bcd5e7d75754a017a89002e012a0f6083"
        },
        "date": 1710957373296,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10126832553892412,
            "unit": "iter/sec",
            "range": "stddev: 0.04927539061672675",
            "extra": "mean: 9.874755948400013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12099043284130248,
            "unit": "iter/sec",
            "range": "stddev: 0.05928736191489483",
            "extra": "mean: 8.265116311400039 sec\nrounds: 5"
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
          "id": "722042df40818b1d624abd434e58d6bb4c280190",
          "message": "Update test_package_access",
          "timestamp": "2024-03-20T12:56:54-05:00",
          "tree_id": "a47a46861d86206825824175d6d0e95858a00d80",
          "url": "https://github.com/cocotb/cocotb/commit/722042df40818b1d624abd434e58d6bb4c280190"
        },
        "date": 1710957667923,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10183329723088011,
            "unit": "iter/sec",
            "range": "stddev: 0.0887945737224606",
            "extra": "mean: 9.819970748200012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12029874540516589,
            "unit": "iter/sec",
            "range": "stddev: 0.07927966682943259",
            "extra": "mean: 8.312638645000016 sec\nrounds: 5"
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
          "id": "5434dc2bcd2d6168421c833c6fe77c13645620b7",
          "message": "[Vpi] test_discovery scope tests (#3782)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-03-21T00:46:46-05:00",
          "tree_id": "65827aefb43446bd7f457ca346963e1e8f4bd826",
          "url": "https://github.com/cocotb/cocotb/commit/5434dc2bcd2d6168421c833c6fe77c13645620b7"
        },
        "date": 1711000241602,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1013375175915383,
            "unit": "iter/sec",
            "range": "stddev: 0.058537035758767154",
            "extra": "mean: 9.86801358240001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12042622869967944,
            "unit": "iter/sec",
            "range": "stddev: 0.048072669033190255",
            "extra": "mean: 8.303838879600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rk.ryan.king@gmail.com",
            "name": "Ryan King",
            "username": "rkryan"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "30b769a55652fbf6ac34f2cbd6c472b9af48aa6d",
          "message": "Integrate combine_results into cocotb_tools\n\nThis removes the last script from the standalone bin directory,\npreferring instead to deliver this functionality as part of the\ncocotb_tools package. As all usage of this is internal to the cocotb\nrepository, no console_scripts entry is added for this.\n\n`python -m cocotb_tools.combine_results` is a drop-in replacement for\n`combine_results.py`.",
          "timestamp": "2024-03-21T13:43:49-05:00",
          "tree_id": "020915d7217286661628bbb93e3c03f2deb6a170",
          "url": "https://github.com/cocotb/cocotb/commit/30b769a55652fbf6ac34f2cbd6c472b9af48aa6d"
        },
        "date": 1711046870017,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10123128980156369,
            "unit": "iter/sec",
            "range": "stddev: 0.05510179709787954",
            "extra": "mean: 9.87836865419997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12090435005016559,
            "unit": "iter/sec",
            "range": "stddev: 0.059688062923852044",
            "extra": "mean: 8.27100099859997 sec\nrounds: 5"
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
          "id": "5ab5431bfce09f200ef0fc02080bedd36d8916e0",
          "message": "VHPI: Improve get_root_handle() (#3774)\n\nWhen a name is passed in, it is first used as a check on the object names.\r\n\r\nFirst, vhpiRootInst is used. If its name fails the check, we attempt to get\r\nthe entity associated with the rootInst, and check the entity name.\r\n\r\nIf both of those checks fail, we search for a handle using the passed in name.\r\nIf the passed in name does not start with ':', it is added to the beginning so that\r\nthe search uses the FullName of the instantiated object, rather than the more\r\nambiguous name that may match objects in the library information model.\r\n\r\nThis change moves the lookup by name to the last fallback, so that the name acts first\r\nas a check, which matches VPI and FLI implementations.\r\n\r\nAlso modify issue_3769 test to expect it to pass on Xcelium.",
          "timestamp": "2024-03-21T17:49:08-07:00",
          "tree_id": "726a899e01863d9efc0651c3ffae9959c4899ffd",
          "url": "https://github.com/cocotb/cocotb/commit/5ab5431bfce09f200ef0fc02080bedd36d8916e0"
        },
        "date": 1711068947412,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10133988572312891,
            "unit": "iter/sec",
            "range": "stddev: 0.025410632115636916",
            "extra": "mean: 9.867782984600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12124275406541403,
            "unit": "iter/sec",
            "range": "stddev: 0.061721901654172816",
            "extra": "mean: 8.247915578200002 sec\nrounds: 5"
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
          "id": "f2fb4e2a4f979a01656c175ebcfada5db36efe14",
          "message": "Fix small doc linking problems (#3800)",
          "timestamp": "2024-03-22T07:14:54+01:00",
          "tree_id": "22bbddb8706778eba70b1e34ac2bb4db78bb2531",
          "url": "https://github.com/cocotb/cocotb/commit/f2fb4e2a4f979a01656c175ebcfada5db36efe14"
        },
        "date": 1711088332961,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10164128128904708,
            "unit": "iter/sec",
            "range": "stddev: 0.037485739080440277",
            "extra": "mean: 9.8385221764 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12096167183589243,
            "unit": "iter/sec",
            "range": "stddev: 0.07092735502008676",
            "extra": "mean: 8.267081504599991 sec\nrounds: 5"
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
          "id": "a0acd44cd930dc42d6dd6edf960134dd17c7d041",
          "message": "Remove leftover trace of MEMCHECK envvar (#3799)\n\nSupport has been removed in #3543",
          "timestamp": "2024-03-22T07:54:53+01:00",
          "tree_id": "30be3b4aaff6a2c60e9cef142c500cf21283a248",
          "url": "https://github.com/cocotb/cocotb/commit/a0acd44cd930dc42d6dd6edf960134dd17c7d041"
        },
        "date": 1711090740941,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10060085123354333,
            "unit": "iter/sec",
            "range": "stddev: 0.06732073577134759",
            "extra": "mean: 9.940273742600004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11967438132482122,
            "unit": "iter/sec",
            "range": "stddev: 0.029801707823461168",
            "extra": "mean: 8.356007266799997 sec\nrounds: 5"
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
          "id": "7414f1c3e7ce35418b64f64bb596b3f065fa7df3",
          "message": "Improve combine_results script (#3803)\n\n* Allow multiple directories to be provided to script to search for\r\n  results.xml files.\r\n* Removed --suppress-rc, just use the shell to ignore the return code if\r\n  desired.\r\n* Typing and public API cleanup.\r\n* Cleanup configuration of ArgumentParser.\r\n* Add newsfragment.\r\n* Add --input-filename option to specify the input filename.\r\n* Renamed --testsuites-name to --output-testsuites-name for clarity\r\n* Added -i and -o aliases for --input-filename and --output-file",
          "timestamp": "2024-03-24T18:05:54-05:00",
          "tree_id": "3554be2e41aa6309450e5c22cf15a2643b58e333",
          "url": "https://github.com/cocotb/cocotb/commit/7414f1c3e7ce35418b64f64bb596b3f065fa7df3"
        },
        "date": 1711321796306,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10067752212487305,
            "unit": "iter/sec",
            "range": "stddev: 0.11886599747707269",
            "extra": "mean: 9.932703734599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1202199915791709,
            "unit": "iter/sec",
            "range": "stddev: 0.04829326110162401",
            "extra": "mean: 8.318084096200005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "",
            "name": "ruff"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "80a80ed6f73e3572889da3d4ed1f1d9580e948bf",
          "message": "ruff-format",
          "timestamp": "2024-03-24T19:00:42-05:00",
          "tree_id": "cd1871b9827bb6ab581e2c1b0e7a50119a3e7626",
          "url": "https://github.com/cocotb/cocotb/commit/80a80ed6f73e3572889da3d4ed1f1d9580e948bf"
        },
        "date": 1711325104068,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09613899061095996,
            "unit": "iter/sec",
            "range": "stddev: 0.07152808280537842",
            "extra": "mean: 10.401607023799965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1154939069009126,
            "unit": "iter/sec",
            "range": "stddev: 0.060420070687902075",
            "extra": "mean: 8.658465427599959 sec\nrounds: 5"
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
          "id": "51a489f181e38e2b4b64725ce684e0dc805a6ece",
          "message": "Improve cocotb-config script (#3804)\n\n* Make things private besides\r\n   * directories\r\n   * lib_name\r\n   * lib_name_path\r\n   * main\r\n* Reword documentation\r\n* Use mutually exclusive group for options\r\n* Remove unused -v alias for --version\r\n* Refactor to not use custom actions\r\n* Make lib_name_path return a Path instead of a as_posix string\r\n* Remove unused --prefix option\r\n\r\nThe things remaining public are used by other parts of cocotb and are\r\nnot available in any other way.\r\n\r\nThe refactor to not use custom actions leads to better generated\r\ndocumentation with sphinx_argparse_cli.",
          "timestamp": "2024-03-24T20:25:59-05:00",
          "tree_id": "957298fe87a1a352d2fda5891bf0a4b90c941db5",
          "url": "https://github.com/cocotb/cocotb/commit/51a489f181e38e2b4b64725ce684e0dc805a6ece"
        },
        "date": 1711330212238,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10112721151018363,
            "unit": "iter/sec",
            "range": "stddev: 0.06085969828450944",
            "extra": "mean: 9.888535292000006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12084659030207417,
            "unit": "iter/sec",
            "range": "stddev: 0.07719928472964803",
            "extra": "mean: 8.274954200200023 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ab72bf7094b948365719ca3d38cb6f3aa28c2a84",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.3.3 → v0.3.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.3.3...v0.3.4)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.1 → v18.1.2](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.1...v18.1.2)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.03.18 → 2024.03.25](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.03.18...2024.03.25)",
          "timestamp": "2024-03-25T22:08:35-05:00",
          "tree_id": "8bd6c66ff58f1c6956d3f45a6748c7e04cc54687",
          "url": "https://github.com/cocotb/cocotb/commit/ab72bf7094b948365719ca3d38cb6f3aa28c2a84"
        },
        "date": 1711422751628,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10155915905864803,
            "unit": "iter/sec",
            "range": "stddev: 0.047164356323202025",
            "extra": "mean: 9.846477750199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12002301229059992,
            "unit": "iter/sec",
            "range": "stddev: 0.048645668622385424",
            "extra": "mean: 8.331735563999995 sec\nrounds: 5"
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
          "id": "ea53fb0a793f63479e9b77b90751a30d8a20402f",
          "message": "Move documentation of cocotb.config",
          "timestamp": "2024-03-26T12:00:58-05:00",
          "tree_id": "a455fdf84b927c63212812cd7238a5c399225fe5",
          "url": "https://github.com/cocotb/cocotb/commit/ea53fb0a793f63479e9b77b90751a30d8a20402f"
        },
        "date": 1711472710041,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1000342842220504,
            "unit": "iter/sec",
            "range": "stddev: 0.13546896396302224",
            "extra": "mean: 9.9965727528 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11929635724696487,
            "unit": "iter/sec",
            "range": "stddev: 0.045439118854008864",
            "extra": "mean: 8.382485627200003 sec\nrounds: 5"
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
          "id": "4be76688dd0d06e29bff9036f719f050fb7f2e05",
          "message": "doc: Various fixes and cleanup (#3802)\n\n* Remove leftover reference to cocotb.types.concat()\r\n* Add cocotb.logging module to Global Module Index and fix newsfragment link to it\r\n* Add cocotb.log default Logger\r\n* Add missing synopses for cocotb modules\r\n* Clean up various function/method docstrings\r\n* Clean up various newsfragments and release notes",
          "timestamp": "2024-03-28T09:39:46-07:00",
          "tree_id": "cc9bb4333ff60544b9ca7895534660abf35c0458",
          "url": "https://github.com/cocotb/cocotb/commit/4be76688dd0d06e29bff9036f719f050fb7f2e05"
        },
        "date": 1711644240169,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10134609685547423,
            "unit": "iter/sec",
            "range": "stddev: 0.07000901345343735",
            "extra": "mean: 9.867178224200007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12027963970857833,
            "unit": "iter/sec",
            "range": "stddev: 0.09734343894528469",
            "extra": "mean: 8.313959057600005 sec\nrounds: 5"
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
          "id": "5c01a407964643a446bacd7f1bd6162e93787cd0",
          "message": "VPI: Use iteration fallback when looking for vpiGenScope by name (#3817)\n\nLike Icarus Verilog, Verilator does not support vpiGenScopeArray,\r\nbut vpiGenScope support has been added. Add the fallback for all simulators.\r\n\r\nWhen looking up a vpiGenScopeArray handle by name, iterate over parent handle\r\nto check if a vpiGenScope object exists with the right generate label\r\nbefore the index.\r\nIf it does, create the pseudo-region representing the vpiGenScopeArray.\r\n\r\nThis change also allows Questa to find generate scopes,\r\nso update test_discovery for the now-passing tests.",
          "timestamp": "2024-03-29T22:12:11-07:00",
          "tree_id": "e1b7a6d21fc9d923a9bd3b92d45c68eb0f9713f0",
          "url": "https://github.com/cocotb/cocotb/commit/5c01a407964643a446bacd7f1bd6162e93787cd0"
        },
        "date": 1711775766743,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1010722309680597,
            "unit": "iter/sec",
            "range": "stddev: 0.05911064888120608",
            "extra": "mean: 9.893914385999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12160017078687571,
            "unit": "iter/sec",
            "range": "stddev: 0.035113923085964116",
            "extra": "mean: 8.223672660399995 sec\nrounds: 5"
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
          "id": "19d11b91a0598000bcd932897299d2337b3dac51",
          "message": "Remove check if Questa GPI backends are built (#3818)\n\nThis is leftover from when FLI was only optionally built. It is now always built.",
          "timestamp": "2024-03-30T09:01:07-06:00",
          "tree_id": "44ac8d5d38c80b9fdac2ddf028e6d1882f8c1bd4",
          "url": "https://github.com/cocotb/cocotb/commit/19d11b91a0598000bcd932897299d2337b3dac51"
        },
        "date": 1711811115573,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10074275157298726,
            "unit": "iter/sec",
            "range": "stddev: 0.11626935614276065",
            "extra": "mean: 9.926272455200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12079252216051009,
            "unit": "iter/sec",
            "range": "stddev: 0.055335441820903795",
            "extra": "mean: 8.278658166199989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53a5f5e41f3f4b22f4b5adcf14fa197faf54a19b",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3819)\n\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.3.4 → v0.3.5](https://github.com/astral-sh/ruff-pre-commit/compare/v0.3.4...v0.3.5)\r\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.03.25 → 2024.04.01](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.03.25...2024.04.01)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-01T19:29:43-06:00",
          "tree_id": "bca9696407262e8f86ca2f0ba95aa3309bb6eff4",
          "url": "https://github.com/cocotb/cocotb/commit/53a5f5e41f3f4b22f4b5adcf14fa197faf54a19b"
        },
        "date": 1712021638284,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10174851237787713,
            "unit": "iter/sec",
            "range": "stddev: 0.040476168827984584",
            "extra": "mean: 9.82815351920002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12024122220014309,
            "unit": "iter/sec",
            "range": "stddev: 0.02603141998485153",
            "extra": "mean: 8.316615397799989 sec\nrounds: 5"
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
          "id": "e7e4d43b570e6627a06e696656941427308e90b1",
          "message": "Cleanup LogicArray interface (#3792)\n\n* Deprecate LogicArray.integer, .signed_integer, and .binstr\r\n* Deprecate constructing LogicArray from ints.\r\n* Introduce LogicArray.from_unsigned, from_signed, to_signed, and\r\n  to_unsigned to replace what was deprecated.\r\n* Cleanup usage of .integer, .signed_integer, and .binstr in regression\r\n* Change exception used value doesn't fit in range",
          "timestamp": "2024-04-07T12:20:44-06:00",
          "tree_id": "dc77840e23e19faacc0414587d415aad23967b56",
          "url": "https://github.com/cocotb/cocotb/commit/e7e4d43b570e6627a06e696656941427308e90b1"
        },
        "date": 1712514287926,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10022129440683226,
            "unit": "iter/sec",
            "range": "stddev: 0.020695895240624106",
            "extra": "mean: 9.977919422399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11839789856467778,
            "unit": "iter/sec",
            "range": "stddev: 0.11103912173858307",
            "extra": "mean: 8.446095852399992 sec\nrounds: 5"
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
          "id": "9c97de502d877dcffd91fac53b41ea600e1f569d",
          "message": "Improve force/release tests (#3828)",
          "timestamp": "2024-04-09T06:52:46-06:00",
          "tree_id": "8dfec1a231802add798ce4ed4a0ae93038bcc8c5",
          "url": "https://github.com/cocotb/cocotb/commit/9c97de502d877dcffd91fac53b41ea600e1f569d"
        },
        "date": 1712667415250,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09931084218483154,
            "unit": "iter/sec",
            "range": "stddev: 0.06863442983195789",
            "extra": "mean: 10.069394015799991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11794412429253752,
            "unit": "iter/sec",
            "range": "stddev: 0.09583802631489875",
            "extra": "mean: 8.478591078600015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001b2a1e019601f28a2410cdf773afce5b2a439c",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3834)\n\nupdates:\r\n- [github.com/pre-commit/mirrors-clang-format: v18.1.2 → v18.1.3](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.2...v18.1.3)\r\n- [github.com/pre-commit/pre-commit-hooks: v4.5.0 → v4.6.0](https://github.com/pre-commit/pre-commit-hooks/compare/v4.5.0...v4.6.0)\r\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.04.01 → 2024.04.08](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.04.01...2024.04.08)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-09T06:53:16-06:00",
          "tree_id": "51c75e86c3c1c576203d7863bfdefe2750ed0a17",
          "url": "https://github.com/cocotb/cocotb/commit/001b2a1e019601f28a2410cdf773afce5b2a439c"
        },
        "date": 1712667689936,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09963250081807853,
            "unit": "iter/sec",
            "range": "stddev: 0.10600595538718093",
            "extra": "mean: 10.036885471999994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11888351324512297,
            "unit": "iter/sec",
            "range": "stddev: 0.02466711049333554",
            "extra": "mean: 8.411595289400008 sec\nrounds: 5"
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
          "id": "e786e02a935758e2712c17067bc5a130bd1f7163",
          "message": "Introduce language-agnostic \"sources\" arg to runner (#3796)",
          "timestamp": "2024-04-09T19:27:41-06:00",
          "tree_id": "40ced853f008202712558e885c489c4eb5986839",
          "url": "https://github.com/cocotb/cocotb/commit/e786e02a935758e2712c17067bc5a130bd1f7163"
        },
        "date": 1712712713475,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10041145776962913,
            "unit": "iter/sec",
            "range": "stddev: 0.04744116388259414",
            "extra": "mean: 9.959022826799991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11787490296217927,
            "unit": "iter/sec",
            "range": "stddev: 0.11234504109523423",
            "extra": "mean: 8.483570080400023 sec\nrounds: 5"
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
          "id": "39fbb9169a7588681757ecdc27230f2ff1c7aadc",
          "message": "Deprecate cocotb.runner.Simulator.build verilog_sources and vhdl_sources (#3836)\n\nReplaced with *sources* parameter.",
          "timestamp": "2024-04-10T10:09:07-06:00",
          "tree_id": "31e0892447e2f30cd0f539a6eb3dd8333308f069",
          "url": "https://github.com/cocotb/cocotb/commit/39fbb9169a7588681757ecdc27230f2ff1c7aadc"
        },
        "date": 1712765597218,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09973547617838008,
            "unit": "iter/sec",
            "range": "stddev: 0.15427138576654437",
            "extra": "mean: 10.026522540599979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11831676266580264,
            "unit": "iter/sec",
            "range": "stddev: 0.07259467787803511",
            "extra": "mean: 8.451887775399996 sec\nrounds: 5"
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
          "id": "6bb8f35162b2a33989c9fe504263e18a6a178618",
          "message": "Document CI test generation (#3838)",
          "timestamp": "2024-04-11T00:03:25-06:00",
          "tree_id": "f1ffa7bcd0f008000df17af5ef2b2fe1dde58b00",
          "url": "https://github.com/cocotb/cocotb/commit/6bb8f35162b2a33989c9fe504263e18a6a178618"
        },
        "date": 1712815673761,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09928599101686232,
            "unit": "iter/sec",
            "range": "stddev: 0.11893276085417069",
            "extra": "mean: 10.071914373400011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11804539358833703,
            "unit": "iter/sec",
            "range": "stddev: 0.09957183015023477",
            "extra": "mean: 8.47131742800001 sec\nrounds: 5"
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
          "id": "165f6c2ea72036f3527a8a923fd071416d9f79bb",
          "message": "Introduce new COCOTB_TEST_FILTER variable (#3841)",
          "timestamp": "2024-04-15T12:56:49-04:00",
          "tree_id": "05736e5f887f39126151da7672e46496428ee7d7",
          "url": "https://github.com/cocotb/cocotb/commit/165f6c2ea72036f3527a8a923fd071416d9f79bb"
        },
        "date": 1713200464229,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09939877340241325,
            "unit": "iter/sec",
            "range": "stddev: 0.04029883758705672",
            "extra": "mean: 10.060486319600011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11732500244545722,
            "unit": "iter/sec",
            "range": "stddev: 0.09713820005339366",
            "extra": "mean: 8.523332445400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38e0c245d4850199c715941a95bfddb601578028",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3842)\n\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.3.5 → v0.3.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.3.5...v0.3.7)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-15T22:41:30-04:00",
          "tree_id": "32845be9a268a906cd35217071e3eec7b7e998a0",
          "url": "https://github.com/cocotb/cocotb/commit/38e0c245d4850199c715941a95bfddb601578028"
        },
        "date": 1713235540961,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09993176304861,
            "unit": "iter/sec",
            "range": "stddev: 0.0683099555166086",
            "extra": "mean: 10.006828354600009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11800758777276521,
            "unit": "iter/sec",
            "range": "stddev: 0.08730896025779804",
            "extra": "mean: 8.474031364200027 sec\nrounds: 5"
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
          "id": "ccbdd935ce2aa0d98052f8b8f8a21c849b5c40c6",
          "message": "Use latest release ghdl 4.1.0 (#3843)\n\nhttps://github.com/ghdl/ghdl/releases/tag/v4.1.0",
          "timestamp": "2024-04-16T14:33:53+02:00",
          "tree_id": "748969a920e54804ceea0c33c68569aa03e6dbfd",
          "url": "https://github.com/cocotb/cocotb/commit/ccbdd935ce2aa0d98052f8b8f8a21c849b5c40c6"
        },
        "date": 1713271076261,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09978997932117854,
            "unit": "iter/sec",
            "range": "stddev: 0.10519875576213081",
            "extra": "mean: 10.021046269400006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11883414619094698,
            "unit": "iter/sec",
            "range": "stddev: 0.049020673777686916",
            "extra": "mean: 8.415089703199987 sec\nrounds: 5"
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
          "id": "d4b8f669f73669721ff48dec0212ad5227ff3bf0",
          "message": "Make Verilator happy",
          "timestamp": "2024-04-21T09:42:33-04:00",
          "tree_id": "2ea27b48a9b3099fd109846dec42d21812ebd1b2",
          "url": "https://github.com/cocotb/cocotb/commit/d4b8f669f73669721ff48dec0212ad5227ff3bf0"
        },
        "date": 1713707223491,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09971866388714186,
            "unit": "iter/sec",
            "range": "stddev: 0.06086246221284561",
            "extra": "mean: 10.028212984600009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11867653355699508,
            "unit": "iter/sec",
            "range": "stddev: 0.05200567864607668",
            "extra": "mean: 8.426265665400013 sec\nrounds: 5"
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
          "id": "06126ddad4c5253b24aeb32a1a70e30f365eb054",
          "message": "Make ANSI module private",
          "timestamp": "2024-04-21T13:50:18-04:00",
          "tree_id": "a948033df7af857b71adc40e7e1f9a575ebd8ffe",
          "url": "https://github.com/cocotb/cocotb/commit/06126ddad4c5253b24aeb32a1a70e30f365eb054"
        },
        "date": 1713722075029,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1001029927018292,
            "unit": "iter/sec",
            "range": "stddev: 0.0441891854130283",
            "extra": "mean: 9.989711326400004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11869792037716961,
            "unit": "iter/sec",
            "range": "stddev: 0.04070502558624582",
            "extra": "mean: 8.424747433000016 sec\nrounds: 5"
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
          "id": "9b59e19ae38127879b073b0b1c8a73a74c5e4b3f",
          "message": "Verilator: Use latest release in CI, add minimum supported version to extended tests (#3827)",
          "timestamp": "2024-04-21T12:21:27-06:00",
          "tree_id": "1022993916561f5cc5114fecdc44ed310e35e599",
          "url": "https://github.com/cocotb/cocotb/commit/9b59e19ae38127879b073b0b1c8a73a74c5e4b3f"
        },
        "date": 1713723975630,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0991998483981888,
            "unit": "iter/sec",
            "range": "stddev: 0.11142495684029727",
            "extra": "mean: 10.080660567 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11801197314774611,
            "unit": "iter/sec",
            "range": "stddev: 0.0165771478077648",
            "extra": "mean: 8.473716465599988 sec\nrounds: 5"
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
          "id": "6e6c6a3620b56bba4feef06b63a29cf010f56463",
          "message": "Support interface arrays in Verilator (#3824)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-04-21T13:11:51-06:00",
          "tree_id": "a1893640fd51ae40aab9bb2a6c9f9f8fd430f7f7",
          "url": "https://github.com/cocotb/cocotb/commit/6e6c6a3620b56bba4feef06b63a29cf010f56463"
        },
        "date": 1713726957413,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10040171066606518,
            "unit": "iter/sec",
            "range": "stddev: 0.07320545327702675",
            "extra": "mean: 9.959989659200005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11897771175260899,
            "unit": "iter/sec",
            "range": "stddev: 0.09152824253436061",
            "extra": "mean: 8.404935556999998 sec\nrounds: 5"
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
          "id": "96035d9f74180fa52e6cd1bf09f4dd60b4297f69",
          "message": "Better error messages if the makefile fails (#3853)",
          "timestamp": "2024-04-21T16:56:23-04:00",
          "tree_id": "7d721df358d556ed73fca9e9fac6c88d0830661a",
          "url": "https://github.com/cocotb/cocotb/commit/96035d9f74180fa52e6cd1bf09f4dd60b4297f69"
        },
        "date": 1713733229688,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09995136747872922,
            "unit": "iter/sec",
            "range": "stddev: 0.061212943617433124",
            "extra": "mean: 10.00486561839998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11688756984989017,
            "unit": "iter/sec",
            "range": "stddev: 0.13950700923337578",
            "extra": "mean: 8.555229621800027 sec\nrounds: 5"
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
          "id": "248b95c5ad4074539ece038fc07632b5f634708a",
          "message": "Update version of macOS to use in CI\n\nMac OS X version 11 was deprecated November 2023 and Github is removing\nthe runners in June 2024.",
          "timestamp": "2024-04-22T07:33:35-04:00",
          "tree_id": "24dd7f041b6519bdb6a00cfd88d116fa2d4c5142",
          "url": "https://github.com/cocotb/cocotb/commit/248b95c5ad4074539ece038fc07632b5f634708a"
        },
        "date": 1713785858300,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1007418957754999,
            "unit": "iter/sec",
            "range": "stddev: 0.09121726146243611",
            "extra": "mean: 9.926356778400002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11873984067622669,
            "unit": "iter/sec",
            "range": "stddev: 0.1003976657046529",
            "extra": "mean: 8.421773132800013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "698866342b66de0adbf79535c184670188ff0341",
          "message": "[pre-commit.ci] pre-commit autoupdate (#3859)\n\n* [pre-commit.ci] pre-commit autoupdate\r\n\r\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.3.7 → v0.4.1](https://github.com/astral-sh/ruff-pre-commit/compare/v0.3.7...v0.4.1)\r\n- [github.com/pre-commit/mirrors-clang-format: v18.1.3 → v18.1.4](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.3...v18.1.4)\r\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.04.08 → 2024.04.20](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.04.08...2024.04.20)\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n---------\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-25T16:51:42-04:00",
          "tree_id": "537958abc0c76e22eb39e9f6ba111b1634b6cb89",
          "url": "https://github.com/cocotb/cocotb/commit/698866342b66de0adbf79535c184670188ff0341"
        },
        "date": 1714078544691,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10026794100535161,
            "unit": "iter/sec",
            "range": "stddev: 0.04369487261422009",
            "extra": "mean: 9.973277499999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11803226466499697,
            "unit": "iter/sec",
            "range": "stddev: 0.07393138930864636",
            "extra": "mean: 8.472259706599994 sec\nrounds: 5"
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
          "id": "c81f13f5d2e56a135377fdd5513a7abb9c46af81",
          "message": "Better document cocotb.result",
          "timestamp": "2024-04-30T08:40:59-06:00",
          "tree_id": "d7c773d923456f2004bc7b499cf47a6e20eeb3dd",
          "url": "https://github.com/cocotb/cocotb/commit/c81f13f5d2e56a135377fdd5513a7abb9c46af81"
        },
        "date": 1714488304232,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.099941224709663,
            "unit": "iter/sec",
            "range": "stddev: 0.015671874958060238",
            "extra": "mean: 10.005880985600061 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11864164039628941,
            "unit": "iter/sec",
            "range": "stddev: 0.07874108158410685",
            "extra": "mean: 8.42874387659997 sec\nrounds: 5"
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
          "id": "ed010083689db23a11c4d7780e6af3cdcf15665d",
          "message": "CI: Add pre-commit hook to display git diff after running other steps (#3869)",
          "timestamp": "2024-04-30T09:11:00-07:00",
          "tree_id": "6f709cea5da4c174058d17aa4c028f477b7bec70",
          "url": "https://github.com/cocotb/cocotb/commit/ed010083689db23a11c4d7780e6af3cdcf15665d"
        },
        "date": 1714493971095,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10031168449170358,
            "unit": "iter/sec",
            "range": "stddev: 0.042553066729081844",
            "extra": "mean: 9.96892839620001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11861189587025364,
            "unit": "iter/sec",
            "range": "stddev: 0.06168503581608881",
            "extra": "mean: 8.430857568399995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "corrin.meyer@dornerworks.com",
            "name": "Corrin Meyer"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9e47d04791ca61096d68ab3c68a27277756f7ec0",
          "message": "Fix pre-commit errors",
          "timestamp": "2024-05-01T08:54:15-06:00",
          "tree_id": "83369afbf755c1619ff72039578522c15627a814",
          "url": "https://github.com/cocotb/cocotb/commit/9e47d04791ca61096d68ab3c68a27277756f7ec0"
        },
        "date": 1714575499784,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09925532878267726,
            "unit": "iter/sec",
            "range": "stddev: 0.06507295098445127",
            "extra": "mean: 10.075025817400013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11835951760403135,
            "unit": "iter/sec",
            "range": "stddev: 0.0734998882654469",
            "extra": "mean: 8.448834705000014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "102625f3b45e501bb498ce46289c5f5c2c61c3ae",
          "message": "[pre-commit.ci] pre-commit check --fix --unsafe-fixes",
          "timestamp": "2024-05-03T00:38:27-06:00",
          "tree_id": "7ad3ea39bb16be7be68ad50dfdef38178db6136a",
          "url": "https://github.com/cocotb/cocotb/commit/102625f3b45e501bb498ce46289c5f5c2c61c3ae"
        },
        "date": 1714718549447,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10073441081004106,
            "unit": "iter/sec",
            "range": "stddev: 0.18341007209808285",
            "extra": "mean: 9.927094346 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11949853899720352,
            "unit": "iter/sec",
            "range": "stddev: 0.03486913198492496",
            "extra": "mean: 8.368303147400002 sec\nrounds: 5"
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
          "id": "683194d22c1b4969f5ed88fe7c607009b38254a7",
          "message": "Add libpython package to normal installation instructions (#3879)",
          "timestamp": "2024-05-05T09:00:30-06:00",
          "tree_id": "65295df7ef91cc2ca3dd0d84f43a838b4e5ec7ac",
          "url": "https://github.com/cocotb/cocotb/commit/683194d22c1b4969f5ed88fe7c607009b38254a7"
        },
        "date": 1714921482617,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10064800130616987,
            "unit": "iter/sec",
            "range": "stddev: 0.06508390565026952",
            "extra": "mean: 9.935617071599996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11791021229464106,
            "unit": "iter/sec",
            "range": "stddev: 0.1292806217255596",
            "extra": "mean: 8.481029594799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b06cd23f7523b24a63d617fba6776133cb5632c3",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.2 → v0.4.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.2...v0.4.3)",
          "timestamp": "2024-05-07T09:34:40-06:00",
          "tree_id": "0ff5c35ba928891a46ef841ca31cce6c536e3dd4",
          "url": "https://github.com/cocotb/cocotb/commit/b06cd23f7523b24a63d617fba6776133cb5632c3"
        },
        "date": 1715096335734,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10002033407790661,
            "unit": "iter/sec",
            "range": "stddev: 0.058892436206884405",
            "extra": "mean: 9.997967005600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11977942042870349,
            "unit": "iter/sec",
            "range": "stddev: 0.057362209450098144",
            "extra": "mean: 8.348679568000012 sec\nrounds: 5"
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
          "id": "17038c0ff372423f64282146a90c8d73cf021b8d",
          "message": "Conditional scope negative test case (#3860)",
          "timestamp": "2024-05-08T12:24:58-06:00",
          "tree_id": "2e4dc5b60eafd45750f12e4fde3c129095546736",
          "url": "https://github.com/cocotb/cocotb/commit/17038c0ff372423f64282146a90c8d73cf021b8d"
        },
        "date": 1715192967240,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10013792796720689,
            "unit": "iter/sec",
            "range": "stddev: 0.056122661545505347",
            "extra": "mean: 9.986226201200003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11829242230233925,
            "unit": "iter/sec",
            "range": "stddev: 0.08653420104173805",
            "extra": "mean: 8.453626872599978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6c42eef3673b477be974f47aec5b9cafc83680f1",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.3 → v0.4.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.3...v0.4.4)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.4 → v18.1.5](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.4...v18.1.5)",
          "timestamp": "2024-05-13T16:50:23-06:00",
          "tree_id": "9cb7c7c8c75db568572d398c1e0942a437c8c729",
          "url": "https://github.com/cocotb/cocotb/commit/6c42eef3673b477be974f47aec5b9cafc83680f1"
        },
        "date": 1715640875356,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09967084363312448,
            "unit": "iter/sec",
            "range": "stddev: 0.08438401948145977",
            "extra": "mean: 10.033024338400015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11885535502570972,
            "unit": "iter/sec",
            "range": "stddev: 0.11464477712286596",
            "extra": "mean: 8.41358809440003 sec\nrounds: 5"
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
          "id": "ce15cd8b2b6fcaa93dc098fcd7c35dda47343752",
          "message": "Improve documentation on triggers and utils.",
          "timestamp": "2024-05-15T19:40:04-06:00",
          "tree_id": "45047606c38d8e1194b722327d1fe8f74860a80d",
          "url": "https://github.com/cocotb/cocotb/commit/ce15cd8b2b6fcaa93dc098fcd7c35dda47343752"
        },
        "date": 1715823850092,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09975827551709253,
            "unit": "iter/sec",
            "range": "stddev: 0.0554950166123835",
            "extra": "mean: 10.024231020599995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11817587770218727,
            "unit": "iter/sec",
            "range": "stddev: 0.06681435564476573",
            "extra": "mean: 8.461963807199982 sec\nrounds: 5"
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
          "id": "10feab69112011358f4e31e6c138a249e393667a",
          "message": "Add the mixed_signal example to CI (#3900)",
          "timestamp": "2024-05-19T21:59:05+02:00",
          "tree_id": "5d4b708da0f0464cded240e5b748aa3d6d9dff4e",
          "url": "https://github.com/cocotb/cocotb/commit/10feab69112011358f4e31e6c138a249e393667a"
        },
        "date": 1716148991108,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09900173723431065,
            "unit": "iter/sec",
            "range": "stddev: 0.0705666423169973",
            "extra": "mean: 10.10083285340001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11784596395533158,
            "unit": "iter/sec",
            "range": "stddev: 0.09611793083123808",
            "extra": "mean: 8.485653360000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c5ea66bb7d0069936e44f4ceba80db9622abb05d",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.04.29 → 2024.05.13](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.04.29...2024.05.13)",
          "timestamp": "2024-05-20T16:34:35-06:00",
          "tree_id": "3d3b6fb399549cb401822e61f073cfac7dd3f930",
          "url": "https://github.com/cocotb/cocotb/commit/c5ea66bb7d0069936e44f4ceba80db9622abb05d"
        },
        "date": 1716244740603,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09888555114653852,
            "unit": "iter/sec",
            "range": "stddev: 0.07480101651961386",
            "extra": "mean: 10.112700879000005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11634044473887478,
            "unit": "iter/sec",
            "range": "stddev: 0.0518883469567707",
            "extra": "mean: 8.595463101799998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "olof.kindgren@gmail.com",
            "name": "Olof Kindgren",
            "username": "olofk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dfdc6403961b3e2306c719fdf57507e8e175d96",
          "message": "Fix instructions for extending build flow with Verilator (#3901)",
          "timestamp": "2024-05-21T09:56:08-06:00",
          "tree_id": "d016a0236dff6478a2cbdec0b375fd3db15c89ed",
          "url": "https://github.com/cocotb/cocotb/commit/0dfdc6403961b3e2306c719fdf57507e8e175d96"
        },
        "date": 1716307216505,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09826210486725169,
            "unit": "iter/sec",
            "range": "stddev: 0.09214213499463558",
            "extra": "mean: 10.176863210399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11681755343419657,
            "unit": "iter/sec",
            "range": "stddev: 0.0929703124263907",
            "extra": "mean: 8.560357331600006 sec\nrounds: 5"
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
          "id": "899021a9c4829a14c1a0442f927c78cc8a8de19a",
          "message": "Xcelium cond scope segfault fix (#3890)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-05-21T11:37:29-06:00",
          "tree_id": "7771739b088192abd7e44e793725477213df9474",
          "url": "https://github.com/cocotb/cocotb/commit/899021a9c4829a14c1a0442f927c78cc8a8de19a"
        },
        "date": 1716313299908,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0986596831955322,
            "unit": "iter/sec",
            "range": "stddev: 0.13918401765435334",
            "extra": "mean: 10.1358525348 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1168702701181124,
            "unit": "iter/sec",
            "range": "stddev: 0.10911670520676577",
            "extra": "mean: 8.556496010400007 sec\nrounds: 5"
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
          "id": "dd94601f1faa8f6100ea62750304fd3cb4bfdba0",
          "message": "[Verilog] Interface Array Testcase (#3704)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-05-21T16:11:48-06:00",
          "tree_id": "3989855a245b833fd63c183eb44eb9d78d7f651e",
          "url": "https://github.com/cocotb/cocotb/commit/dd94601f1faa8f6100ea62750304fd3cb4bfdba0"
        },
        "date": 1716329752423,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09877844602878855,
            "unit": "iter/sec",
            "range": "stddev: 0.09203331044823362",
            "extra": "mean: 10.123666044599997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11663762123380968,
            "unit": "iter/sec",
            "range": "stddev: 0.062218045231721315",
            "extra": "mean: 8.57356305300001 sec\nrounds: 5"
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
          "id": "36832c15fbad184c418204c60bfaa6b82d4f01be",
          "message": "[Vpi] Allow using packed struct as a signal on sim module (#3608)\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2024-05-22T11:11:46-06:00",
          "tree_id": "21f49429d159b0f379befb5ce1c578995f07cdae",
          "url": "https://github.com/cocotb/cocotb/commit/36832c15fbad184c418204c60bfaa6b82d4f01be"
        },
        "date": 1716398148195,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09843503998235409,
            "unit": "iter/sec",
            "range": "stddev: 0.03518690284891195",
            "extra": "mean: 10.15898403839999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11626883351882493,
            "unit": "iter/sec",
            "range": "stddev: 0.050198844627996134",
            "extra": "mean: 8.600757139600024 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4c65998210f41fd780f2ceb9ff0e3fbfbe3f5d9b",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2024-05-28T09:54:58-06:00",
          "tree_id": "048a777c3734a5d62d58a1e02889a444c0c84472",
          "url": "https://github.com/cocotb/cocotb/commit/4c65998210f41fd780f2ceb9ff0e3fbfbe3f5d9b"
        },
        "date": 1716911944516,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09939842590808681,
            "unit": "iter/sec",
            "range": "stddev: 0.07047219198830056",
            "extra": "mean: 10.06052149080001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11711407908674673,
            "unit": "iter/sec",
            "range": "stddev: 0.08826596775369507",
            "extra": "mean: 8.538683032799986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3bcec2469df1b9338cfef9d7fe717724be0dad78",
          "message": "Fix Sphinx reported errors",
          "timestamp": "2024-05-30T10:20:07-06:00",
          "tree_id": "64d4f79737f15c905b525cdac882f4f7fe6853f3",
          "url": "https://github.com/cocotb/cocotb/commit/3bcec2469df1b9338cfef9d7fe717724be0dad78"
        },
        "date": 1717086255585,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09875386936176524,
            "unit": "iter/sec",
            "range": "stddev: 0.07179170051584657",
            "extra": "mean: 10.126185499999986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11705967180321844,
            "unit": "iter/sec",
            "range": "stddev: 0.0806458992583077",
            "extra": "mean: 8.542651663000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0c4b24c32697f8cdf44620848425f72e1be10bbf",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.5 → v0.4.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.5...v0.4.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.05.24 → 2024.06.03](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.05.24...2024.06.03)",
          "timestamp": "2024-06-04T07:44:05-06:00",
          "tree_id": "5591f087c8ce73df826e96ad62e284e1426ce3c7",
          "url": "https://github.com/cocotb/cocotb/commit/0c4b24c32697f8cdf44620848425f72e1be10bbf"
        },
        "date": 1717508891424,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09862407950744319,
            "unit": "iter/sec",
            "range": "stddev: 0.131264279305668",
            "extra": "mean: 10.139511618199993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11721092475806792,
            "unit": "iter/sec",
            "range": "stddev: 0.03121159109539557",
            "extra": "mean: 8.531627935400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "514558f359cbdf6af4de8ea54cc7931dcc1a6be9",
          "message": "Python runner in quickstart guide\n\nFixes #3844",
          "timestamp": "2024-06-04T07:44:34-06:00",
          "tree_id": "783a088c45e5cbf3bc01f84c73467ca0f16b0d8f",
          "url": "https://github.com/cocotb/cocotb/commit/514558f359cbdf6af4de8ea54cc7931dcc1a6be9"
        },
        "date": 1717509132235,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09946771318646616,
            "unit": "iter/sec",
            "range": "stddev: 0.03922313324048736",
            "extra": "mean: 10.053513526799998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11660367457755283,
            "unit": "iter/sec",
            "range": "stddev: 0.07663052650182973",
            "extra": "mean: 8.576059061799999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d53dad836335cc0343685b1c75cd7df4dae3ccd5",
          "message": "Remove last traces of COCOTB_RESOLVE_X",
          "timestamp": "2024-06-05T13:08:11-06:00",
          "tree_id": "44d5e6dee9095447246b72ba8d155a2f03622e6a",
          "url": "https://github.com/cocotb/cocotb/commit/d53dad836335cc0343685b1c75cd7df4dae3ccd5"
        },
        "date": 1717614738799,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09823540474892677,
            "unit": "iter/sec",
            "range": "stddev: 0.03155712677408876",
            "extra": "mean: 10.179629254400004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1171786026552487,
            "unit": "iter/sec",
            "range": "stddev: 0.1023701768816517",
            "extra": "mean: 8.533981267399998 sec\nrounds: 5"
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
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3fd24f5ffa02b53d4d7e260f1fd575b5b5297ff4",
          "message": "Document COVERAGE_RCFILE\n\nCloses #3574.",
          "timestamp": "2024-06-05T21:00:03-06:00",
          "tree_id": "47e70e8abb506bc34608216052efc4bf82969fd9",
          "url": "https://github.com/cocotb/cocotb/commit/3fd24f5ffa02b53d4d7e260f1fd575b5b5297ff4"
        },
        "date": 1717643056769,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09896221444995339,
            "unit": "iter/sec",
            "range": "stddev: 0.05266077357374904",
            "extra": "mean: 10.104866847999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11659775182507486,
            "unit": "iter/sec",
            "range": "stddev: 0.052500053785080145",
            "extra": "mean: 8.576494695199994 sec\nrounds: 5"
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
          "id": "e77b72556fc732f4d69074495cbff5983e1cc1d2",
          "message": "Fix `cocotb-config --help-vars`",
          "timestamp": "2024-06-07T15:14:59-06:00",
          "tree_id": "d0be502d92860968a98badc443743ebacdaea6d2",
          "url": "https://github.com/cocotb/cocotb/commit/e77b72556fc732f4d69074495cbff5983e1cc1d2"
        },
        "date": 1717795143166,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09946686091189744,
            "unit": "iter/sec",
            "range": "stddev: 0.05789385966334951",
            "extra": "mean: 10.053599669599986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.11628911314160394,
            "unit": "iter/sec",
            "range": "stddev: 0.03500492608522202",
            "extra": "mean: 8.599257256199996 sec\nrounds: 5"
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
          "id": "5567157fd77ffe5f50e636db6daae556ba73e330",
          "message": "Introduce COCOTB_TRUST_INERTIAL_WRITES\n\nBehavior and performance optimization by trusting inertial writes in the\nVPI/VHPI/FLI rather than mimicing that behavior by applying writes in\nthe ReadWrite callback.\n\nAdd a couple tests for write scheduling behavior.",
          "timestamp": "2024-06-08T07:32:52-06:00",
          "tree_id": "dd0fd401f63e865c39b713f68797ddcd86bb56cd",
          "url": "https://github.com/cocotb/cocotb/commit/5567157fd77ffe5f50e636db6daae556ba73e330"
        },
        "date": 1717853819824,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09878840899283761,
            "unit": "iter/sec",
            "range": "stddev: 0.07411939819335378",
            "extra": "mean: 10.122645057200003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12677538412298564,
            "unit": "iter/sec",
            "range": "stddev: 0.06614174217726011",
            "extra": "mean: 7.887966634200007 sec\nrounds: 5"
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
          "id": "eab2b463392ac3a1d5a0a0a9c9c1f939414832ef",
          "message": "Make cocotb.Task not a Coroutine\n\nThere is no reason it should be a Coroutine. In fact if used as a\nCoroutine it has the opportunity to skip a lot of the state keeping that\nTask does.",
          "timestamp": "2024-06-09T10:52:35-06:00",
          "tree_id": "230f930cfcc769c0c4ad4ca078692cfe1f7bade7",
          "url": "https://github.com/cocotb/cocotb/commit/eab2b463392ac3a1d5a0a0a9c9c1f939414832ef"
        },
        "date": 1717952207519,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09748079468130212,
            "unit": "iter/sec",
            "range": "stddev: 0.06522221440508091",
            "extra": "mean: 10.258430937800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12498662628100399,
            "unit": "iter/sec",
            "range": "stddev: 0.014268337696056291",
            "extra": "mean: 8.0008560096 sec\nrounds: 5"
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
          "id": "242a909726d0adea5bbc998dfd1c5ac69c70e892",
          "message": "Rename `SIM_OUTPUT_REDIRECT` to `SIM_CMD_SUFFIX` and add to all Makefiles (#3927)\n\n* Rename SIM_OUTPUT_REDIRECT to SIM_CMD_SUFFIX and add to all sims\r\n\r\nWe intended to add SIM_OUTPUT_REDIRECT to all simulators and make it\r\nempty by default, but the name makes this a little more generic and\r\nparallels the extant SIM_CMD_PREFIX variable.",
          "timestamp": "2024-06-09T18:22:54-06:00",
          "tree_id": "78dcb09162ef1b7664a5ec8d89db7b4891655664",
          "url": "https://github.com/cocotb/cocotb/commit/242a909726d0adea5bbc998dfd1c5ac69c70e892"
        },
        "date": 1717979218637,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09876627245586223,
            "unit": "iter/sec",
            "range": "stddev: 0.04816140817527088",
            "extra": "mean: 10.124913851000008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1272525454595425,
            "unit": "iter/sec",
            "range": "stddev: 0.05117065274647933",
            "extra": "mean: 7.858388972800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "98ccb51379ee1579a6ad6257292f9f4ff90b0502",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.7 → v0.4.8](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.7...v0.4.8)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.5 → v18.1.6](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.5...v18.1.6)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.06.03 → 2024.06.10](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.06.03...2024.06.10)",
          "timestamp": "2024-06-10T16:38:46-06:00",
          "tree_id": "9155e4310f3778c5a469f6051b5eba13b37956c0",
          "url": "https://github.com/cocotb/cocotb/commit/98ccb51379ee1579a6ad6257292f9f4ff90b0502"
        },
        "date": 1718059372582,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09976154668293018,
            "unit": "iter/sec",
            "range": "stddev: 0.09098360803529178",
            "extra": "mean: 10.023902327600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1273276886524432,
            "unit": "iter/sec",
            "range": "stddev: 0.06372394191867435",
            "extra": "mean: 7.8537512978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "olagrottvik@gmail.com",
            "name": "ogre",
            "username": "olagrottvik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a4f9144593829286b1b7878f72b03cdf25e381a",
          "message": "Add support for VHDL libraries in Riviera-PRO Makefile (#3922)\n\nCo-authored-by: Ola Groettvik <ola.groettvik@cern.ch>",
          "timestamp": "2024-06-11T10:22:04-06:00",
          "tree_id": "d638529061e5c016b0407d129cd2872cad73077f",
          "url": "https://github.com/cocotb/cocotb/commit/4a4f9144593829286b1b7878f72b03cdf25e381a"
        },
        "date": 1718123179158,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09835092495394329,
            "unit": "iter/sec",
            "range": "stddev: 0.0603952022743246",
            "extra": "mean: 10.1676725508 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1259203378382101,
            "unit": "iter/sec",
            "range": "stddev: 0.08558037684134162",
            "extra": "mean: 7.941528883800004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4c73e5ad32e350d1448f411536c06025d5695c55",
          "message": "Prefix environment variables with COCOTB_\n\nThis change concerns environment variables MODULE, TESTCASE,\nTOPLEVEL, RANDOM_SEED, COVERAGE, COVERAGE_RCFILE and PLUSARGS.\nA warning is issued when these old variables are used.\nThe Makefile flow and runners are both affected.",
          "timestamp": "2024-06-12T09:16:41-06:00",
          "tree_id": "d085bf2dfc7b8a5b984bbfec412138fbbfc94b3f",
          "url": "https://github.com/cocotb/cocotb/commit/4c73e5ad32e350d1448f411536c06025d5695c55"
        },
        "date": 1718205729571,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09871579182206676,
            "unit": "iter/sec",
            "range": "stddev: 0.05869564688837808",
            "extra": "mean: 10.130091462999962 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12634135813878045,
            "unit": "iter/sec",
            "range": "stddev: 0.0761519192616157",
            "extra": "mean: 7.91506451040002 sec\nrounds: 5"
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
          "id": "cdbf507cbb0bdbfdf19b65a6b6516e5a1fbb074a",
          "message": "CI: Update Riviera-PRO to 2024.04\n\nUse the latest Riviera-PRO 2024.04 in CI, and move\nthe previously used 2023.10 version to the extended\ntests.",
          "timestamp": "2024-06-18T10:52:31+01:00",
          "tree_id": "05fa6156933c56b75e62861b16256f9f6e9a8f53",
          "url": "https://github.com/cocotb/cocotb/commit/cdbf507cbb0bdbfdf19b65a6b6516e5a1fbb074a"
        },
        "date": 1718704591233,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09870947488976345,
            "unit": "iter/sec",
            "range": "stddev: 0.0665022540229824",
            "extra": "mean: 10.130739740199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1262976177065078,
            "unit": "iter/sec",
            "range": "stddev: 0.07307877146009432",
            "extra": "mean: 7.917805720800009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5c5bf832384379774e2216d70a184bdd76d66f6f",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.8 → v0.4.9](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.8...v0.4.9)",
          "timestamp": "2024-06-18T14:10:37-06:00",
          "tree_id": "8866b2421053391e815662f8085dac1ac380c40d",
          "url": "https://github.com/cocotb/cocotb/commit/5c5bf832384379774e2216d70a184bdd76d66f6f"
        },
        "date": 1718741679791,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09912444609476115,
            "unit": "iter/sec",
            "range": "stddev: 0.0904318309176819",
            "extra": "mean: 10.088328756399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.126225481227263,
            "unit": "iter/sec",
            "range": "stddev: 0.02449237193490594",
            "extra": "mean: 7.92233066 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "619edb993b30098063bbc1ef48908812da4076e2",
          "message": "Fix config_file for coverage\n\nThe configuration file is given to the coverage initializer via an\nargument instead of it being read from the environment in the\ncoverage module.",
          "timestamp": "2024-06-19T07:19:17-06:00",
          "tree_id": "8ec03b8e3ec6382a0fdf4797e1ce129751373ad8",
          "url": "https://github.com/cocotb/cocotb/commit/619edb993b30098063bbc1ef48908812da4076e2"
        },
        "date": 1718803396516,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0985135850753872,
            "unit": "iter/sec",
            "range": "stddev: 0.08772929611965348",
            "extra": "mean: 10.150884258600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1265767749484735,
            "unit": "iter/sec",
            "range": "stddev: 0.075490344087503",
            "extra": "mean: 7.900343490400013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49717947+NickolayTernovoy@users.noreply.github.com",
            "name": "Nickolay",
            "username": "NickolayTernovoy"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9659c4710ba8608c41a0bb0c38f60cde28c46e47",
          "message": "Replacing the no longer supported option '+acc+1' with '-debug_access+r+w-memcbk -debug_region+cell'",
          "timestamp": "2024-06-19T11:34:35-06:00",
          "tree_id": "e74ffea8f7d71c0679ebaf28dc4f9d1b77f77106",
          "url": "https://github.com/cocotb/cocotb/commit/9659c4710ba8608c41a0bb0c38f60cde28c46e47"
        },
        "date": 1718818714561,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0988376842342928,
            "unit": "iter/sec",
            "range": "stddev: 0.06022360241825574",
            "extra": "mean: 10.117598441799988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12628720148415334,
            "unit": "iter/sec",
            "range": "stddev: 0.09795409116928502",
            "extra": "mean: 7.918458784799986 sec\nrounds: 5"
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
          "id": "7591c3d46e388a4fa81fdcd6f8f4d399a957c6bc",
          "message": "Fix isort config\n\nWe manually list out first-party and third-party packages so that isort\nkeeps cocotb and external packages in separate import sections.",
          "timestamp": "2024-06-20T09:51:18-06:00",
          "tree_id": "bd26b6543a987756b6cb15cffae878f267d99777",
          "url": "https://github.com/cocotb/cocotb/commit/7591c3d46e388a4fa81fdcd6f8f4d399a957c6bc"
        },
        "date": 1718898942688,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09866460202262343,
            "unit": "iter/sec",
            "range": "stddev: 0.08450093681867447",
            "extra": "mean: 10.135347221800009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.126518207911692,
            "unit": "iter/sec",
            "range": "stddev: 0.04853188288188587",
            "extra": "mean: 7.9040006692000135 sec\nrounds: 5"
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
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9555e71995b87158daf9d408c35c86d555e964c1",
          "message": "CI: Move Verilator on macos to experimental bucket\n\nWe cannot tightly control the version of Verilator being used in our\nCI testing, which led to Verilator 5.026 breaking CI on macOS due to an\nupstream issue (https://github.com/verilator/verilator/issues/5190).\n\nMove this test to the experimental bucket until it's stable again.",
          "timestamp": "2024-06-20T10:44:04-06:00",
          "tree_id": "29a2ac9a5a164974adea34a3ba976b0e6987cbdc",
          "url": "https://github.com/cocotb/cocotb/commit/9555e71995b87158daf9d408c35c86d555e964c1"
        },
        "date": 1718902094086,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09894269359924505,
            "unit": "iter/sec",
            "range": "stddev: 0.04072235581531043",
            "extra": "mean: 10.106860482800016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12658185316598616,
            "unit": "iter/sec",
            "range": "stddev: 0.0644539174324315",
            "extra": "mean: 7.90002654399999 sec\nrounds: 5"
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
          "id": "a3457fc3416a6c2d96ed5bb6a480e284194e3478",
          "message": "Riviera-PRO: Always exit the compilation step\n\nPreviously, we always redirected the output of Riviera-PRO in Makefiles,\nwhich caused Riviera to unconditionally quit the compilation step. We\nno longer do that, so we need to be explicit.\n\nSee also https://github.com/cocotb/cocotb/pull/3495 for the equivalent\nchange in the runner.",
          "timestamp": "2024-06-21T09:39:19+01:00",
          "tree_id": "0fe8e48a90c7b88ee13ee333a970d4a7d41fba87",
          "url": "https://github.com/cocotb/cocotb/commit/a3457fc3416a6c2d96ed5bb6a480e284194e3478"
        },
        "date": 1718959404345,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09849404669015852,
            "unit": "iter/sec",
            "range": "stddev: 0.0537428158307866",
            "extra": "mean: 10.152897901999996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1258868029713278,
            "unit": "iter/sec",
            "range": "stddev: 0.0487047888457473",
            "extra": "mean: 7.943644420199962 sec\nrounds: 5"
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
          "id": "ec406b26a7dc17174a4bc9d570d50761a6b46d55",
          "message": "CI: Run against Xcelium 2403\n\nRun against the latest version of Xcelium, 2403, in CI, and move the\n2309 version to the extended tests bucket.",
          "timestamp": "2024-06-21T15:08:18+01:00",
          "tree_id": "2fbb5c0aaf2668918f9b882c32659b2ba1dd48cf",
          "url": "https://github.com/cocotb/cocotb/commit/ec406b26a7dc17174a4bc9d570d50761a6b46d55"
        },
        "date": 1718979160569,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0989760395524375,
            "unit": "iter/sec",
            "range": "stddev: 0.07063890809154116",
            "extra": "mean: 10.103455387000002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12584314998897447,
            "unit": "iter/sec",
            "range": "stddev: 0.11269631304170821",
            "extra": "mean: 7.946399943799986 sec\nrounds: 5"
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
          "id": "14ae0c6e0490fff90778adbcab72080a919b1abf",
          "message": "Build verilator from source for MacOS CI (#3961)",
          "timestamp": "2024-06-21T08:56:17-06:00",
          "tree_id": "1d24b113d1359eaf3ed8cf08779de6959cecb3a2",
          "url": "https://github.com/cocotb/cocotb/commit/14ae0c6e0490fff90778adbcab72080a919b1abf"
        },
        "date": 1718982018981,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09843232612357382,
            "unit": "iter/sec",
            "range": "stddev: 0.1093758520881981",
            "extra": "mean: 10.159264129800011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12663722362479696,
            "unit": "iter/sec",
            "range": "stddev: 0.0826932559551363",
            "extra": "mean: 7.896572361399978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilbertoabram@tersatech.com",
            "name": "gilbertoabram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "421747f3b60e9491d1ef8497b17686c142ece630",
          "message": "Use raw docstrings in some places where backslashes are present. (#3953)\n\nCo-authored-by: Gilberto Abram <gilberto@hudson-trading.com>",
          "timestamp": "2024-06-21T12:45:42-06:00",
          "tree_id": "3f8e1956cecc1a1077dbbefdd5cc9e41dc247487",
          "url": "https://github.com/cocotb/cocotb/commit/421747f3b60e9491d1ef8497b17686c142ece630"
        },
        "date": 1718995782960,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09907704062122906,
            "unit": "iter/sec",
            "range": "stddev: 0.06992002752946519",
            "extra": "mean: 10.093155727399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12748916325156298,
            "unit": "iter/sec",
            "range": "stddev: 0.04964726212522982",
            "extra": "mean: 7.843803932000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "teobiton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "66b5f12ab310dc7860cb2ab7c665a769413113df",
          "message": "Document changes on cocotb environment variables\n\nCocotb environment variables are now prefixed with COCOTB_ for\nclarity. This is now reflected in the documentation.\n\nFixes #3940",
          "timestamp": "2024-06-23T08:42:07-06:00",
          "tree_id": "b5d77d337a92855a3c54bfcbf929309b4c49bf4c",
          "url": "https://github.com/cocotb/cocotb/commit/66b5f12ab310dc7860cb2ab7c665a769413113df"
        },
        "date": 1719153973530,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09865706536190755,
            "unit": "iter/sec",
            "range": "stddev: 0.0519396621589288",
            "extra": "mean: 10.136121486399997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1258686807112034,
            "unit": "iter/sec",
            "range": "stddev: 0.0588992474247176",
            "extra": "mean: 7.944788126399987 sec\nrounds: 5"
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
          "id": "2bfb730851c18883407f4a3397864fb148cc0ca9",
          "message": "Scheduler refactor (#3942)\n\nRemoved pending_triggers and scheduling queue. Made pending_tasks *the*\r\ntask queue. Whenever triggers fires they now immediately add the tasks\r\nwaiting upon them to the scheduling queue alongside the outcome the\r\nscheduler should inject into the task.\r\n\r\nAlso cleaned up state tracking a bit by using an Enum.\r\n\r\nSeparated react method into one for GPITriggers and the other for\r\nPython Triggers.\r\n\r\nAlso improved documentation of how the scheduler works and the quirks and caveats.",
          "timestamp": "2024-06-23T08:44:31-06:00",
          "tree_id": "d2f4462d6c8cc994a7ded4dc4ca4fb259e9e6299",
          "url": "https://github.com/cocotb/cocotb/commit/2bfb730851c18883407f4a3397864fb148cc0ca9"
        },
        "date": 1719154232541,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09850492207860927,
            "unit": "iter/sec",
            "range": "stddev: 0.08444145793999974",
            "extra": "mean: 10.151776976199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12631195564895192,
            "unit": "iter/sec",
            "range": "stddev: 0.09115886988361624",
            "extra": "mean: 7.916906953599982 sec\nrounds: 5"
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
          "id": "0b68d594e7cc8b160640e46354ce953a2eaf6428",
          "message": "Remove support for `Timer(0)` (#3937)\n\nPreviously we issued a warning, but it was always an invalid operation\r\nthat only sometimes worked in simulators.\r\n\r\nIf we round to 0 steps, we fix it up after the fact to 1. This is valid\r\nsince this only occurs when using a rounding mode, and when using a\r\nrounding mode the user agrees to whatever reasonable value we \"round\"\r\nto.",
          "timestamp": "2024-06-24T10:47:47-06:00",
          "tree_id": "c00c4f65e007765047d6b6c6a7212c5c95713e0c",
          "url": "https://github.com/cocotb/cocotb/commit/0b68d594e7cc8b160640e46354ce953a2eaf6428"
        },
        "date": 1719247904036,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10142140830495043,
            "unit": "iter/sec",
            "range": "stddev: 0.028698141577680334",
            "extra": "mean: 9.859851255399985 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13086192247928172,
            "unit": "iter/sec",
            "range": "stddev: 0.11017093519740839",
            "extra": "mean: 7.64164228259998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "7b6c8337534783be484bf812d698d7f296230a02",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.4.9 → v0.4.10](https://github.com/astral-sh/ruff-pre-commit/compare/v0.4.9...v0.4.10)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.6 → v18.1.7](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.6...v18.1.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.06.10 → 2024.06.24](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.06.10...2024.06.24)",
          "timestamp": "2024-06-24T16:38:38-06:00",
          "tree_id": "0f958d71897be7a4a20e72564a225f6f493b6fc9",
          "url": "https://github.com/cocotb/cocotb/commit/7b6c8337534783be484bf812d698d7f296230a02"
        },
        "date": 1719268958709,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09786019480886267,
            "unit": "iter/sec",
            "range": "stddev: 0.07511634795527053",
            "extra": "mean: 10.218659404399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12579904508788434,
            "unit": "iter/sec",
            "range": "stddev: 0.07625345900685576",
            "extra": "mean: 7.949185936200001 sec\nrounds: 5"
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
          "id": "cb4ce5287c3f090bea0389e3cf2f1f1c133c8560",
          "message": "Make awaiting `Join` trigger not return `Task` result (#3931)\n\nAwaiting the Join trigger will no longer return the task's result, the\r\nuser can use `await task` for the same effect. This allows the user to\r\nhave some way of awaiting a task to finish *without* getting the\r\nresult, which is especially useful if the outcome is anticipated to be\r\nan exception.\r\n\r\nCo-authored-by: Colin Marquardt <cmarqu42@gmail.com>\r\nCo-authored-by: Marlon James <marlon.james@gmail.com>",
          "timestamp": "2024-06-24T17:39:15-06:00",
          "tree_id": "b595e7d966119fcdb6ca22a2d0b3fdaaaf4bcd56",
          "url": "https://github.com/cocotb/cocotb/commit/cb4ce5287c3f090bea0389e3cf2f1f1c133c8560"
        },
        "date": 1719272598414,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09918013218799628,
            "unit": "iter/sec",
            "range": "stddev: 0.08726453479124197",
            "extra": "mean: 10.082664520999998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1273025621757095,
            "unit": "iter/sec",
            "range": "stddev: 0.07787805728009933",
            "extra": "mean: 7.855301440199992 sec\nrounds: 5"
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
          "id": "925b2f5a37e150558a8ccf02e0026ba6f3424ec6",
          "message": "Improve Task's result TypeVar (#3973)",
          "timestamp": "2024-06-25T08:30:07-07:00",
          "tree_id": "d9ba499c5a25079207a9d04c90bd749eae896c3d",
          "url": "https://github.com/cocotb/cocotb/commit/925b2f5a37e150558a8ccf02e0026ba6f3424ec6"
        },
        "date": 1719329655929,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09799110363377628,
            "unit": "iter/sec",
            "range": "stddev: 0.07476556917342124",
            "extra": "mean: 10.205008035600008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12738066793364275,
            "unit": "iter/sec",
            "range": "stddev: 0.11162037152341454",
            "extra": "mean: 7.850484820200006 sec\nrounds: 5"
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
          "id": "a8dfba18b424a67158ed46de9cadf521b2472153",
          "message": "Increase timeout to allow slow Mac OS tests to finish",
          "timestamp": "2024-06-25T10:23:10-06:00",
          "tree_id": "092ed3118deaa94c56a1017a167f722395c88c58",
          "url": "https://github.com/cocotb/cocotb/commit/a8dfba18b424a67158ed46de9cadf521b2472153"
        },
        "date": 1719332829201,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09896059745655351,
            "unit": "iter/sec",
            "range": "stddev: 0.05486538241808193",
            "extra": "mean: 10.105031959200005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12572406273007955,
            "unit": "iter/sec",
            "range": "stddev: 0.04138637440730935",
            "extra": "mean: 7.953926863999993 sec\nrounds: 5"
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
          "id": "ccd3ab7bb758676eae7d9480a6d8dd3c98dfef0a",
          "message": "Remove dead code paths from scheduler (#3976)\n\nSince removing the `yield` syntax there is no way for the scheduler to\r\never see an async generator object, Waitable, or unstarted coroutine function.\r\nPython's `await` statement calls the `__await__` function, and the\r\naforementioned objects either handle this correctly or TypeError. So not our problem anymore.",
          "timestamp": "2024-06-25T10:25:20-06:00",
          "tree_id": "893b4eb2e348298646e764b3c352df9547417389",
          "url": "https://github.com/cocotb/cocotb/commit/ccd3ab7bb758676eae7d9480a6d8dd3c98dfef0a"
        },
        "date": 1719333101973,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09802502229924727,
            "unit": "iter/sec",
            "range": "stddev: 0.07982759300089488",
            "extra": "mean: 10.201476893799992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1250457091084711,
            "unit": "iter/sec",
            "range": "stddev: 0.06846009820642397",
            "extra": "mean: 7.99707568639999 sec\nrounds: 5"
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
          "id": "7e8c7c4c508aead14a270108d62e02b18d5944cf",
          "message": "CI: Update to Questa 2024.2\n\nAs usual, use the latest release version in CI and move the previously\nused version to the extended tests.",
          "timestamp": "2024-06-26T08:56:17+02:00",
          "tree_id": "41e0aa0fdea2d211a404e1ef412e71dde680b1cc",
          "url": "https://github.com/cocotb/cocotb/commit/7e8c7c4c508aead14a270108d62e02b18d5944cf"
        },
        "date": 1719385220414,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09763016950365086,
            "unit": "iter/sec",
            "range": "stddev: 0.037349312184460075",
            "extra": "mean: 10.242735468799992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12478640638695056,
            "unit": "iter/sec",
            "range": "stddev: 0.11699717558435511",
            "extra": "mean: 8.013693389799982 sec\nrounds: 5"
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
          "id": "7a063c31f55e8f2a12d76113e24b2eb267c93d2e",
          "message": "Remove handshaking between Trigger and scheduler for Outcome to resume\n\nPreviously the scheduler asked the Trigger what Outcome it should resume\nthe task with. This is not useful now since we use Trigger.__await__ to\ninstrument this.\n\nAnd now it is hardcoded in Trigger that awaiting a Trigger always\nreturns a Trigger, so the typing was corrected.",
          "timestamp": "2024-06-26T12:31:24-06:00",
          "tree_id": "db89b87317daaa9d8638db38cf57b4a7c1a353fa",
          "url": "https://github.com/cocotb/cocotb/commit/7a063c31f55e8f2a12d76113e24b2eb267c93d2e"
        },
        "date": 1719427239460,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09856546258562034,
            "unit": "iter/sec",
            "range": "stddev: 0.0762624185580223",
            "extra": "mean: 10.145541589999999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1274893825049748,
            "unit": "iter/sec",
            "range": "stddev: 0.061455896700529686",
            "extra": "mean: 7.843790442400007 sec\nrounds: 5"
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
          "id": "cee63b195cfb55377401570dd10f079252aa200d",
          "message": "Add legacy `.buff` property to `LogicArray` (#3944)\n\n\r\nCo-authored-by: Colin Marquardt <cmarqu42@gmail.com>\r\nCo-authored-by: Marlon James <marlon.james@gmail.com>",
          "timestamp": "2024-06-26T13:13:20-06:00",
          "tree_id": "5cf0af015e7f084773c6d777ae5da6d47517f81b",
          "url": "https://github.com/cocotb/cocotb/commit/cee63b195cfb55377401570dd10f079252aa200d"
        },
        "date": 1719429444998,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09893805908550034,
            "unit": "iter/sec",
            "range": "stddev: 0.060425080574784046",
            "extra": "mean: 10.10733391419999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12681381994671298,
            "unit": "iter/sec",
            "range": "stddev: 0.08695719952264917",
            "extra": "mean: 7.885575881399984 sec\nrounds: 5"
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
          "id": "3c352783eb4446a53706de640a2f6e0ad80483d2",
          "message": "Improve coverage for triggers",
          "timestamp": "2024-06-26T16:35:51-07:00",
          "tree_id": "f643f9040fb43d6a489392d71ae08646a19fd642",
          "url": "https://github.com/cocotb/cocotb/commit/3c352783eb4446a53706de640a2f6e0ad80483d2"
        },
        "date": 1719445191467,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09918570162437973,
            "unit": "iter/sec",
            "range": "stddev: 0.027668635339267954",
            "extra": "mean: 10.082098363199975 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12673688285683268,
            "unit": "iter/sec",
            "range": "stddev: 0.07539546693122236",
            "extra": "mean: 7.890362911400007 sec\nrounds: 5"
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
          "id": "6621b069131df442c7d00065b244dd71eb6fe25f",
          "message": "Verilator: Don't run interface array tests on versions earlier than v5.024 (#3986)",
          "timestamp": "2024-06-26T16:38:31-07:00",
          "tree_id": "c56f1b11890bf56615f1846dbf40d54590a3477c",
          "url": "https://github.com/cocotb/cocotb/commit/6621b069131df442c7d00065b244dd71eb6fe25f"
        },
        "date": 1719445426223,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09971030812999307,
            "unit": "iter/sec",
            "range": "stddev: 0.11622765878014316",
            "extra": "mean: 10.02905335219998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12879899453316374,
            "unit": "iter/sec",
            "range": "stddev: 0.10358487081447107",
            "extra": "mean: 7.764035764599976 sec\nrounds: 5"
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
          "id": "94774d30879a55efab811be91207ca5f4de97407",
          "message": "CI: Update NVC to latest release 1.12.2 (#3988)",
          "timestamp": "2024-06-26T21:18:33-07:00",
          "tree_id": "871798a1f2c66953d63c123a63634a5e20d0c9f6",
          "url": "https://github.com/cocotb/cocotb/commit/94774d30879a55efab811be91207ca5f4de97407"
        },
        "date": 1719462154239,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09932256160502752,
            "unit": "iter/sec",
            "range": "stddev: 0.051317774914952353",
            "extra": "mean: 10.068205892399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1272669262861021,
            "unit": "iter/sec",
            "range": "stddev: 0.021973791504745106",
            "extra": "mean: 7.857500995600009 sec\nrounds: 5"
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
          "id": "2efdb61a1be6481467d401d9cf90c15ce1366e7b",
          "message": "Improve TypeError exception message for edge triggers when used on an incompatible signal handle (#3987)",
          "timestamp": "2024-06-27T09:15:43-07:00",
          "tree_id": "b340e15d50f6b883059ebdf88ba4115a6f0ec802",
          "url": "https://github.com/cocotb/cocotb/commit/2efdb61a1be6481467d401d9cf90c15ce1366e7b"
        },
        "date": 1719505188863,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0971540568169216,
            "unit": "iter/sec",
            "range": "stddev: 0.044963293960404514",
            "extra": "mean: 10.292930967199993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12689492945889316,
            "unit": "iter/sec",
            "range": "stddev: 0.07170366479932289",
            "extra": "mean: 7.880535528600012 sec\nrounds: 5"
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
          "id": "c149dac08f3793771a93474710ad66273f4e2b5f",
          "message": "docs: Add NullTrigger to Python Triggers section (#3991)",
          "timestamp": "2024-06-27T11:49:51-07:00",
          "tree_id": "49041fd0db2ca8b0726faa392f621cb01a88f6c7",
          "url": "https://github.com/cocotb/cocotb/commit/c149dac08f3793771a93474710ad66273f4e2b5f"
        },
        "date": 1719514441371,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09880339277407196,
            "unit": "iter/sec",
            "range": "stddev: 0.06947245073041357",
            "extra": "mean: 10.121109932800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1273917758623968,
            "unit": "iter/sec",
            "range": "stddev: 0.055638511089502414",
            "extra": "mean: 7.849800297000002 sec\nrounds: 5"
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
          "id": "ca6a97ff4d6af2ac13d0271cb4f8ed0b01e27627",
          "message": "CI: Use case-insensitive regex match for repr strings that contain handle paths (#3992)\n\nNVC does not have full CaseName support, and so often returns normalized all uppercase names for objects. See #3985 for more details.",
          "timestamp": "2024-06-27T16:24:48-07:00",
          "tree_id": "e5e90a8db9fe1b6274308d97d6914278633c4434",
          "url": "https://github.com/cocotb/cocotb/commit/ca6a97ff4d6af2ac13d0271cb4f8ed0b01e27627"
        },
        "date": 1719530950332,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09304430373894511,
            "unit": "iter/sec",
            "range": "stddev: 0.10422092016022017",
            "extra": "mean: 10.74756819939999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12085984115044766,
            "unit": "iter/sec",
            "range": "stddev: 0.14067226444455075",
            "extra": "mean: 8.274046949599983 sec\nrounds: 5"
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
          "id": "c386f6aff6946605876cca0ffe4965b42fdff675",
          "message": "Fix unfixable ruff issues",
          "timestamp": "2024-07-04T17:52:41-06:00",
          "tree_id": "a2310b436639db68f410f2e138476602cb346043",
          "url": "https://github.com/cocotb/cocotb/commit/c386f6aff6946605876cca0ffe4965b42fdff675"
        },
        "date": 1720137401527,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09814210142844475,
            "unit": "iter/sec",
            "range": "stddev: 0.07300771634425046",
            "extra": "mean: 10.189306989000011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12729459421261508,
            "unit": "iter/sec",
            "range": "stddev: 0.08342452171852667",
            "extra": "mean: 7.8557931401999666 sec\nrounds: 5"
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
          "id": "114fe7a98c03dbd6d768226d24931cdc148cbe73",
          "message": "Riviera-PRO 2019.10 cannot access packages\n\nLater versions work, simply update the test expectations for this\nversion.",
          "timestamp": "2024-07-05T07:12:24+02:00",
          "tree_id": "1ae3a04d8eee73178200f70f1fed8572fd27cc7c",
          "url": "https://github.com/cocotb/cocotb/commit/114fe7a98c03dbd6d768226d24931cdc148cbe73"
        },
        "date": 1720156600105,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09892380630077426,
            "unit": "iter/sec",
            "range": "stddev: 0.1261855101337808",
            "extra": "mean: 10.108790162800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12793750248827562,
            "unit": "iter/sec",
            "range": "stddev: 0.04933189614276873",
            "extra": "mean: 7.816316408800003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f756f744fdd68eab6006791a9b0399f421f6ad87",
          "message": "Skip mixed_signal example if Spectre is unavailable (#4008)",
          "timestamp": "2024-07-05T19:39:18-06:00",
          "tree_id": "56739522b73f2d966b30127ecbebcbcf3344d66d",
          "url": "https://github.com/cocotb/cocotb/commit/f756f744fdd68eab6006791a9b0399f421f6ad87"
        },
        "date": 1720230203312,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09915434725644058,
            "unit": "iter/sec",
            "range": "stddev: 0.05999924366126099",
            "extra": "mean: 10.085286501999992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12633367321952763,
            "unit": "iter/sec",
            "range": "stddev: 0.10839361336648161",
            "extra": "mean: 7.915545986399991 sec\nrounds: 5"
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
          "id": "61cb17bb9be5cea7210aeac892e0a645eab7f75e",
          "message": "Pin the version in the stable install docs\n\nWhen building documentation for a tagged release in ReadTheDocs, pin the\nversion we suggest users to install to a version matching the\ndocumentation they are reading.\n\nFor example, a ReadTheDocs build for the v1.9.0 tag would suggest users\nto run \"pip install cocotb =~ 1.9.0\", which gives them a 1.9.x version\nmatching the documentation they are reading.\n\nFor all other Sphinx build types (local builds, PR builds, \"latest\" RTD\nbuilds, etc.), the documentation stays as is: it gives instructions how\nto install the latest stable release (whatever that might be currently),\nand also shows how to install a development release.",
          "timestamp": "2024-07-08T15:42:19+02:00",
          "tree_id": "081ebf50e2b1825b9a44e008d0b197184e65ea92",
          "url": "https://github.com/cocotb/cocotb/commit/61cb17bb9be5cea7210aeac892e0a645eab7f75e"
        },
        "date": 1720446393005,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09705645707169976,
            "unit": "iter/sec",
            "range": "stddev: 0.07272020376892852",
            "extra": "mean: 10.303281514399988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1255130169130509,
            "unit": "iter/sec",
            "range": "stddev: 0.0679701840555331",
            "extra": "mean: 7.967301118199953 sec\nrounds: 5"
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
          "id": "8adaf89bb2e6aaf237992a469778fa5420f0e844",
          "message": "Document the current state of Verilator support",
          "timestamp": "2024-07-08T19:27:25+02:00",
          "tree_id": "867c831db8a5b92db27f84b0d3de3a99be527831",
          "url": "https://github.com/cocotb/cocotb/commit/8adaf89bb2e6aaf237992a469778fa5420f0e844"
        },
        "date": 1720459887912,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09922417043829272,
            "unit": "iter/sec",
            "range": "stddev: 0.07186335611308463",
            "extra": "mean: 10.078189573999992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12725633932444064,
            "unit": "iter/sec",
            "range": "stddev: 0.025696512998739696",
            "extra": "mean: 7.858154692400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a5ba02f5e4803607d870be08d4c95e11a2a0b254",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.0 → v0.5.1](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.0...v0.5.1)",
          "timestamp": "2024-07-09T13:37:58-06:00",
          "tree_id": "a3d5ecacf0c80a15d63d8d341885dfc5197cf2c5",
          "url": "https://github.com/cocotb/cocotb/commit/a5ba02f5e4803607d870be08d4c95e11a2a0b254"
        },
        "date": 1720554118073,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09869637450968603,
            "unit": "iter/sec",
            "range": "stddev: 0.06932674185799585",
            "extra": "mean: 10.132084435400008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12765493817110202,
            "unit": "iter/sec",
            "range": "stddev: 0.013182307816882352",
            "extra": "mean: 7.833617831999982 sec\nrounds: 5"
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
          "id": "d8ed8bc9ef68f661e20f77c23510e1e4dcb8115e",
          "message": "Address GHDL sim issue gh-4004",
          "timestamp": "2024-07-10T12:34:56-06:00",
          "tree_id": "c328e6061bdb1a5621792aa3918d43eec39c67a0",
          "url": "https://github.com/cocotb/cocotb/commit/d8ed8bc9ef68f661e20f77c23510e1e4dcb8115e"
        },
        "date": 1720636804508,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09825462033463021,
            "unit": "iter/sec",
            "range": "stddev: 0.0741915177137068",
            "extra": "mean: 10.177638431600007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12658406489302032,
            "unit": "iter/sec",
            "range": "stddev: 0.09103956645568412",
            "extra": "mean: 7.8998885115999995 sec\nrounds: 5"
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
          "id": "c8fce237d2a1419b26115850bcca93ce3f399e8b",
          "message": "Merge pull request #4023 from ktbarrett/split-utils\n\nSplit `cocotb.utils`",
          "timestamp": "2024-07-11T09:17:56-06:00",
          "tree_id": "6f4e88791d159cf7352a825b99cf5dd075e8dd83",
          "url": "https://github.com/cocotb/cocotb/commit/c8fce237d2a1419b26115850bcca93ce3f399e8b"
        },
        "date": 1720711328121,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09877439212727744,
            "unit": "iter/sec",
            "range": "stddev: 0.10669781501219724",
            "extra": "mean: 10.124081540399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.127259699581591,
            "unit": "iter/sec",
            "range": "stddev: 0.07898758710830991",
            "extra": "mean: 7.857947199999967 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "eb49d69f2f841708b56cf48eb668bf3b86a1e771",
          "message": "Correct broken import in cocotb/__init__.py",
          "timestamp": "2024-07-11T10:24:15-06:00",
          "tree_id": "b35a20eb3d1462ab8c8aaf165cfe374e8258a8bb",
          "url": "https://github.com/cocotb/cocotb/commit/eb49d69f2f841708b56cf48eb668bf3b86a1e771"
        },
        "date": 1720715328057,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09790124253606647,
            "unit": "iter/sec",
            "range": "stddev: 0.08007085337833089",
            "extra": "mean: 10.214374956799997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12639537555605382,
            "unit": "iter/sec",
            "range": "stddev: 0.11963180707291055",
            "extra": "mean: 7.911681860200019 sec\nrounds: 5"
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
          "id": "36da975c58cd93ec96c3ddcd3ef1ad4ec5500600",
          "message": "Remove `TriggerException` (#4024)",
          "timestamp": "2024-07-11T13:45:45-06:00",
          "tree_id": "694dcab64a7fe61f6a3305ba2068af7a5aeae3c6",
          "url": "https://github.com/cocotb/cocotb/commit/36da975c58cd93ec96c3ddcd3ef1ad4ec5500600"
        },
        "date": 1720727391701,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09827025326769367,
            "unit": "iter/sec",
            "range": "stddev: 0.10880486022093379",
            "extra": "mean: 10.176019362399973 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12630162359206842,
            "unit": "iter/sec",
            "range": "stddev: 0.04607230803790213",
            "extra": "mean: 7.917554593200009 sec\nrounds: 5"
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
          "id": "bb58d3d56b42e4ddd1c8de2f05f159a61c5353e3",
          "message": "Cleanup `cocotb_tools.runner` (#4025)\n\n* Add typing support to cocotb_tools\r\n* Improve typing\r\n* Rename cocotb.runner.Simulator to cocotb.runner.Runner\r\n* Document the limitations of each Runner implementation.\r\n* Remove experimental warning\r\n* Replace prints with logs or exceptions\r\n* Cleanup newsfrags\r\n* Add newsfrag about renaming base class\r\n* Remove `raise NotImplementedError` and use `@abstractmethod`",
          "timestamp": "2024-07-11T21:31:47-06:00",
          "tree_id": "f5bfe5e84ee0bd9387ec6a7d33f6664e804a55f6",
          "url": "https://github.com/cocotb/cocotb/commit/bb58d3d56b42e4ddd1c8de2f05f159a61c5353e3"
        },
        "date": 1720755379237,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0985670333056509,
            "unit": "iter/sec",
            "range": "stddev: 0.08031706427981515",
            "extra": "mean: 10.1453799152 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12614909426946472,
            "unit": "iter/sec",
            "range": "stddev: 0.05942257976673661",
            "extra": "mean: 7.927127862400016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "xdch47@posteo.de",
            "name": "Felix Neumärker",
            "username": "xdch47"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a7f1b459c74974b5bb107ffae77d91eb75284d76",
          "message": "Use Verilator coverage filename.\n\nSupported since verilator v5.022.\n(Since https://github.com/verilator/verilator/commit/1a9250278825f383efe8d6ef15b55c477e6723e5)",
          "timestamp": "2024-07-12T10:11:17-06:00",
          "tree_id": "d95fb00c10f0c53f7faf01d71411aa8bad2bcf9a",
          "url": "https://github.com/cocotb/cocotb/commit/a7f1b459c74974b5bb107ffae77d91eb75284d76"
        },
        "date": 1720800963178,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09830925948279173,
            "unit": "iter/sec",
            "range": "stddev: 0.09066898807180292",
            "extra": "mean: 10.171981817999983 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12673041869814552,
            "unit": "iter/sec",
            "range": "stddev: 0.13843463999686612",
            "extra": "mean: 7.890765376399986 sec\nrounds: 5"
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
          "id": "25820af64cd8915e2d530892490aae13e4203d9a",
          "message": "docs: re-order the Python Code Library Reference page",
          "timestamp": "2024-07-12T14:20:07-07:00",
          "tree_id": "f7850929d4865455ca0b43ace386087ad970e878",
          "url": "https://github.com/cocotb/cocotb/commit/25820af64cd8915e2d530892490aae13e4203d9a"
        },
        "date": 1720819465207,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09836966888990163,
            "unit": "iter/sec",
            "range": "stddev: 0.011363431207297998",
            "extra": "mean: 10.16573514260001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1261113231135775,
            "unit": "iter/sec",
            "range": "stddev: 0.0687217027557363",
            "extra": "mean: 7.9295020884 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a5c90e3342d7a5c956476d2c5f896206877dd143",
          "message": "Move SimTimeoutError to cocotb.triggers",
          "timestamp": "2024-07-12T16:10:35-06:00",
          "tree_id": "aeb5ec8d0166ca2d59798015c21df14148a02d9d",
          "url": "https://github.com/cocotb/cocotb/commit/a5c90e3342d7a5c956476d2c5f896206877dd143"
        },
        "date": 1720822539618,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09777420835500353,
            "unit": "iter/sec",
            "range": "stddev: 0.09824314856784833",
            "extra": "mean: 10.227646092199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.12741287602014456,
            "unit": "iter/sec",
            "range": "stddev: 0.06451925108233496",
            "extra": "mean: 7.84850033399996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c4b9a2696971ca78471ff09708bed1c06b16866a",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.1 → v0.5.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.1...v0.5.2)",
          "timestamp": "2024-07-15T17:57:17-06:00",
          "tree_id": "a69c31f39283d72a9afbd2223566a01152c61e8c",
          "url": "https://github.com/cocotb/cocotb/commit/c4b9a2696971ca78471ff09708bed1c06b16866a"
        },
        "date": 1721088093453,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09765074672051664,
            "unit": "iter/sec",
            "range": "stddev: 0.05704068696690391",
            "extra": "mean: 10.240577093200022 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1271330760281972,
            "unit": "iter/sec",
            "range": "stddev: 0.10120833488896612",
            "extra": "mean: 7.865773654200007 sec\nrounds: 5"
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
          "id": "e70a6804d884b3e3df1a4b045900143d2133dfb9",
          "message": "Renable checks in test_array following upstream fixes to Xcelium",
          "timestamp": "2024-07-16T14:12:03-06:00",
          "tree_id": "1b8fa270e1923c8df66339ab19075dca4d259c2c",
          "url": "https://github.com/cocotb/cocotb/commit/e70a6804d884b3e3df1a4b045900143d2133dfb9"
        },
        "date": 1721160977293,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.09856045063700111,
            "unit": "iter/sec",
            "range": "stddev: 0.04894022434522015",
            "extra": "mean: 10.146057506200004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.126733956503596,
            "unit": "iter/sec",
            "range": "stddev: 0.08206337319492979",
            "extra": "mean: 7.890545104000012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e2d50301d2559089638e83b4c3d6987730711b7b",
          "message": "Fix typing on __iter__ in handle.py",
          "timestamp": "2024-07-16T20:01:49-06:00",
          "tree_id": "2032e6ca2eb7a4fabdcafd5dfd2f1376e4fc1658",
          "url": "https://github.com/cocotb/cocotb/commit/e2d50301d2559089638e83b4c3d6987730711b7b"
        },
        "date": 1721182019685,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07190552037335377,
            "unit": "iter/sec",
            "range": "stddev: 0.044488872751215935",
            "extra": "mean: 13.90713807239997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0859616536539962,
            "unit": "iter/sec",
            "range": "stddev: 0.06913246556704943",
            "extra": "mean: 11.633094030799999 sec\nrounds: 5"
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
          "id": "9ab36d0ea0911fa520bcab8d596efaae22a7c37c",
          "message": "Remove cocotb.result.SimFailure",
          "timestamp": "2024-07-16T20:05:06-06:00",
          "tree_id": "97453119f58b42f8deb736710a1317764eb4116b",
          "url": "https://github.com/cocotb/cocotb/commit/9ab36d0ea0911fa520bcab8d596efaae22a7c37c"
        },
        "date": 1721182545482,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07203813099851057,
            "unit": "iter/sec",
            "range": "stddev: 0.12742474185823655",
            "extra": "mean: 13.881537265600013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0857693838076481,
            "unit": "iter/sec",
            "range": "stddev: 0.1611570337633643",
            "extra": "mean: 11.659172021599966 sec\nrounds: 5"
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
          "id": "c73faab32f7c3415268785f5bbfb02b58d1771f1",
          "message": "Add done_callback interface to cocotb.task.Task",
          "timestamp": "2024-07-17T09:37:08-06:00",
          "tree_id": "a710baaa60a798c428713ceb54840e5324ae94a4",
          "url": "https://github.com/cocotb/cocotb/commit/c73faab32f7c3415268785f5bbfb02b58d1771f1"
        },
        "date": 1721230949328,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07212975472714962,
            "unit": "iter/sec",
            "range": "stddev: 0.07897889108935366",
            "extra": "mean: 13.863904068200032 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08570871773902371,
            "unit": "iter/sec",
            "range": "stddev: 0.08655220188678425",
            "extra": "mean: 11.667424579199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ola.groettvik@cern.ch",
            "name": "Ola Groettvik"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "870c5f09854a94415c4068631787c36975499377",
          "message": "Fix inconsistent use of acom_args/vcom_args",
          "timestamp": "2024-07-17T09:58:23-06:00",
          "tree_id": "020446a8b8a556830152efa945954011a8978817",
          "url": "https://github.com/cocotb/cocotb/commit/870c5f09854a94415c4068631787c36975499377"
        },
        "date": 1721232209558,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07204276656792954,
            "unit": "iter/sec",
            "range": "stddev: 0.09274334744967379",
            "extra": "mean: 13.880644062399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08598722988570236,
            "unit": "iter/sec",
            "range": "stddev: 0.07690182267149102",
            "extra": "mean: 11.629633857600016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilbertoabram@tersatech.com",
            "name": "gilbertoabram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b43a4b89fbb9dad6e6eb25d351b7c195b2051a95",
          "message": "GpiClock: C++ clock implementation using GPI. (#3983)\n\nCo-authored-by: Gilberto Abram <gilberto@hudson-trading.com>",
          "timestamp": "2024-07-17T12:37:46-06:00",
          "tree_id": "384165e909c869b99086e4e6937dc664b954916c",
          "url": "https://github.com/cocotb/cocotb/commit/b43a4b89fbb9dad6e6eb25d351b7c195b2051a95"
        },
        "date": 1721241780465,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07157412636231746,
            "unit": "iter/sec",
            "range": "stddev: 0.07228038004835169",
            "extra": "mean: 13.971529249800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0878669152026883,
            "unit": "iter/sec",
            "range": "stddev: 0.04801967390436086",
            "extra": "mean: 11.380847929999993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "904016301@qq.com",
            "name": "Zhe Li",
            "username": "AtaraxiaZ"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b7f79ebf3be59d00ce8963ea41e5dedf45ec167d",
          "message": "Replace deprecated VCS options",
          "timestamp": "2024-07-17T21:07:39-06:00",
          "tree_id": "0cace078e60155970af99d12c67244f5954430c5",
          "url": "https://github.com/cocotb/cocotb/commit/b7f79ebf3be59d00ce8963ea41e5dedf45ec167d"
        },
        "date": 1721272363093,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0722089674615158,
            "unit": "iter/sec",
            "range": "stddev: 0.12438714224076708",
            "extra": "mean: 13.848695462000006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08763806125605215,
            "unit": "iter/sec",
            "range": "stddev: 0.13288980857183433",
            "extra": "mean: 11.410567345599986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0279f1bb997f5fe4173a24679fc1bd148d4e373a",
          "message": "Call done callback immediately if registering on finished Task\n\nAlso, we make this interface private. Also remove the\nremove_done_callback since we don't use it privately.",
          "timestamp": "2024-07-17T22:24:21-06:00",
          "tree_id": "816599b581c78950a4b3b5f312ec48256c8c608c",
          "url": "https://github.com/cocotb/cocotb/commit/0279f1bb997f5fe4173a24679fc1bd148d4e373a"
        },
        "date": 1721276960968,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07203323202332745,
            "unit": "iter/sec",
            "range": "stddev: 0.08701430407587771",
            "extra": "mean: 13.882481348000004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08726551861590034,
            "unit": "iter/sec",
            "range": "stddev: 0.04067347006880514",
            "extra": "mean: 11.459279860599986 sec\nrounds: 5"
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
          "id": "19c7518cfd513bd80c4c95d0e5b39dfa67c38373",
          "message": "Add color to CI",
          "timestamp": "2024-07-18T12:52:27-06:00",
          "tree_id": "b24331f157226528a27960989eba61bef625f9a4",
          "url": "https://github.com/cocotb/cocotb/commit/19c7518cfd513bd80c4c95d0e5b39dfa67c38373"
        },
        "date": 1721329047228,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0719817946975592,
            "unit": "iter/sec",
            "range": "stddev: 0.11556083117337025",
            "extra": "mean: 13.892401602400009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08724492156217536,
            "unit": "iter/sec",
            "range": "stddev: 0.07080068434980615",
            "extra": "mean: 11.461985203200015 sec\nrounds: 5"
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
          "id": "7dca73093c61e013511bbdbd8f694a33eb72b5ad",
          "message": "Move cocotb.ipython_support to cocotb_tools.ipython_support",
          "timestamp": "2024-07-18T13:06:01-06:00",
          "tree_id": "2dd8c7887011b27b25f50294861d24375a48baa2",
          "url": "https://github.com/cocotb/cocotb/commit/7dca73093c61e013511bbdbd8f694a33eb72b5ad"
        },
        "date": 1721329895682,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07178504944758676,
            "unit": "iter/sec",
            "range": "stddev: 0.12903316558797612",
            "extra": "mean: 13.930477274799978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08743842931604706,
            "unit": "iter/sec",
            "range": "stddev: 0.07403727011068617",
            "extra": "mean: 11.436618976599982 sec\nrounds: 5"
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
          "id": "d545d6eca22d8ca15acde60f27a234891acad80d",
          "message": "Remove IndexableValueObjectBase\n\nSplits \"rangeable\" methods off into RangeableObjectMixin. This includes\nthings like __len__, range, left, right, direction, etc. This is used\nfor HierarchyArrayObjects, ArrayObjects, LogicObjects, and\nStringObjects.\n\nIndexableValueObjectBase was then removed, replacing the functionality\nwith the aforementioned mixin and with purpose-built methods. This\nremoves indexability as a feature from StringObject and LogicObject,\nwhich were poorly supported beforehand.",
          "timestamp": "2024-07-18T23:02:07-06:00",
          "tree_id": "a033b7b9388958572b36a674a2b9893c48e18b41",
          "url": "https://github.com/cocotb/cocotb/commit/d545d6eca22d8ca15acde60f27a234891acad80d"
        },
        "date": 1721365636632,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07191882133848135,
            "unit": "iter/sec",
            "range": "stddev: 0.10351789234936454",
            "extra": "mean: 13.904566028599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08779331908017762,
            "unit": "iter/sec",
            "range": "stddev: 0.1542866071335321",
            "extra": "mean: 11.390388362999989 sec\nrounds: 5"
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
          "id": "eb1e9236ece3d95a3852ee2ae5b7712bd74b780f",
          "message": "Change timeouts in CI\n\nRemove timeout on Windows testing. I haven't seen issues with that in a while. Add timeout to Windows Icarus build since those often hang indefinitely, but if it finishes, it takes less than 5 minutes. And bump timeout on Linux testing because old Riviera version in the extended CI are just *barely* not finishing in time.",
          "timestamp": "2024-07-22T09:45:48-06:00",
          "tree_id": "8f28d3779b35b198e9b3e535491c2b7112f598fd",
          "url": "https://github.com/cocotb/cocotb/commit/eb1e9236ece3d95a3852ee2ae5b7712bd74b780f"
        },
        "date": 1721663448646,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07302267713266572,
            "unit": "iter/sec",
            "range": "stddev: 0.1713062548679851",
            "extra": "mean: 13.694376038599978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08862780716914014,
            "unit": "iter/sec",
            "range": "stddev: 0.0585470474798809",
            "extra": "mean: 11.283140494400005 sec\nrounds: 5"
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
          "id": "04bb4682f723431c5858735c74c01c21308623c9",
          "message": "Move writes flushing into `scheduler._react` method (#4055)\n\nA single step towards and proof that moving this into a\r\ntrigger-specific react method would work.\r\n\r\nThis moves the write scheduler into a global module.\r\n\r\nWrites are applied when the ReadWrite trigger calls into the scheduler's\r\n`_react`, meaning we don't have to force the old `_do_writes` task to\r\nrun first with special logic in the simulator.",
          "timestamp": "2024-07-22T14:52:14-06:00",
          "tree_id": "879d03ca389800f99a49cc23b30bb4cb9ef2cdb9",
          "url": "https://github.com/cocotb/cocotb/commit/04bb4682f723431c5858735c74c01c21308623c9"
        },
        "date": 1721681842009,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07151253538233275,
            "unit": "iter/sec",
            "range": "stddev: 0.16813224609304153",
            "extra": "mean: 13.983562387400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08787630194096926,
            "unit": "iter/sec",
            "range": "stddev: 0.12418270866520575",
            "extra": "mean: 11.379632254800025 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "221fefd3e7997ed09c5e7bff228496f0db1c4f7d",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.2 → v0.5.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.2...v0.5.4)",
          "timestamp": "2024-07-22T18:18:57-06:00",
          "tree_id": "2a9be3f00c92c33cf0dfa14917d008c89924491f",
          "url": "https://github.com/cocotb/cocotb/commit/221fefd3e7997ed09c5e7bff228496f0db1c4f7d"
        },
        "date": 1721694237021,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07243697870296635,
            "unit": "iter/sec",
            "range": "stddev: 0.13417985912174446",
            "extra": "mean: 13.805103662600015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08944625214113486,
            "unit": "iter/sec",
            "range": "stddev: 0.07867176090885612",
            "extra": "mean: 11.179898274800006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ray@raysalemi.com",
            "name": "Ray Salemi",
            "username": "raysalemi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bf26136ba4a3f22a249c49efc74c61c400b0369",
          "message": "Add pyuvm to ecosystem test (#4062)",
          "timestamp": "2024-07-23T11:55:16-06:00",
          "tree_id": "5a9bfdc51719f33cf35109e3786fee37e2911e9c",
          "url": "https://github.com/cocotb/cocotb/commit/0bf26136ba4a3f22a249c49efc74c61c400b0369"
        },
        "date": 1721757632298,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07217868619348469,
            "unit": "iter/sec",
            "range": "stddev: 0.060653418816616816",
            "extra": "mean: 13.8545054328 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08729251322613181,
            "unit": "iter/sec",
            "range": "stddev: 0.1346859759342296",
            "extra": "mean: 11.455736157000013 sec\nrounds: 5"
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
          "id": "5672e517393c9a2fc1a91996d7610a5e36e4c5a2",
          "message": "Rename `cocotb.external` and `cocotb.function` (#4054)\n\nRenamed to cocotb.bridge and cocotb.resume, respectively. This was done\r\nbecause the two are intended to be used in conjunction to bridge\r\ncocotb's scheduler through non-async code. cocotb.bridge is thus\r\nobvious, and cocotb.resume is \"resuming\" the cocotb context.",
          "timestamp": "2024-07-24T07:42:59-06:00",
          "tree_id": "7e3b60404f3bf9da477b23e7c0482700e5ef8ada",
          "url": "https://github.com/cocotb/cocotb/commit/5672e517393c9a2fc1a91996d7610a5e36e4c5a2"
        },
        "date": 1721828885513,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07248664650574038,
            "unit": "iter/sec",
            "range": "stddev: 0.10027881444318178",
            "extra": "mean: 13.795644414599973 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08815844852476099,
            "unit": "iter/sec",
            "range": "stddev: 0.08160990247145679",
            "extra": "mean: 11.343212326599996 sec\nrounds: 5"
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
          "id": "93b91efb5cdd8285fde20fd5f0d43cdeef9c6f65",
          "message": "Move profiling out of scheduler (#4061)",
          "timestamp": "2024-07-24T20:35:24-06:00",
          "tree_id": "4f21b2b71e9934ce718cd2a021ae33cc72e4616e",
          "url": "https://github.com/cocotb/cocotb/commit/93b91efb5cdd8285fde20fd5f0d43cdeef9c6f65"
        },
        "date": 1721875227338,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07300484894887908,
            "unit": "iter/sec",
            "range": "stddev: 0.15378829849753117",
            "extra": "mean: 13.69772028020002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08968136239133748,
            "unit": "iter/sec",
            "range": "stddev: 0.016344591101375493",
            "extra": "mean: 11.150588855199999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus@notsyncing.net",
            "name": "Markus Koch",
            "username": "m42uko"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6ba2b351f110dbb058e5506714ed58782b32797d",
          "message": "pytest: nvc: Add build_dir to library search paths\n\nWithout this argument, NVC does not find any of the locally compiled\nlibraries.",
          "timestamp": "2024-07-25T13:21:49-06:00",
          "tree_id": "9d42c6da6267f728d705d0598029395561b20c6e",
          "url": "https://github.com/cocotb/cocotb/commit/6ba2b351f110dbb058e5506714ed58782b32797d"
        },
        "date": 1721935609292,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07278471859947618,
            "unit": "iter/sec",
            "range": "stddev: 0.27262891077156076",
            "extra": "mean: 13.739147711800001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08909066923378518,
            "unit": "iter/sec",
            "range": "stddev: 0.06610312505753699",
            "extra": "mean: 11.22452001539997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "49a9f19e31df31963cc5ad6ccf5c365dd0d5bbd0",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.4 → v0.5.5](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.4...v0.5.5)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.07.01 → 2024.07.29](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.07.01...2024.07.29)",
          "timestamp": "2024-07-29T16:47:40-06:00",
          "tree_id": "947b434f8c5c33158f4b36defeb50eb9afec7450",
          "url": "https://github.com/cocotb/cocotb/commit/49a9f19e31df31963cc5ad6ccf5c365dd0d5bbd0"
        },
        "date": 1722293560481,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07303073705790872,
            "unit": "iter/sec",
            "range": "stddev: 0.14009347058595653",
            "extra": "mean: 13.69286467980001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08901687693200828,
            "unit": "iter/sec",
            "range": "stddev: 0.07391025118089471",
            "extra": "mean: 11.233824803400001 sec\nrounds: 5"
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
          "id": "722520b1726de834e8133e57f730c76b9388bb54",
          "message": "Use vpiInertialDelay when setting string value on sims that support it",
          "timestamp": "2024-07-30T08:31:14-06:00",
          "tree_id": "be081bb5d37c0c7c0a02d8af828c5a3248d96079",
          "url": "https://github.com/cocotb/cocotb/commit/722520b1726de834e8133e57f730c76b9388bb54"
        },
        "date": 1722350177666,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07245501997348572,
            "unit": "iter/sec",
            "range": "stddev: 0.08342321672356473",
            "extra": "mean: 13.801666197400005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0890497464860417,
            "unit": "iter/sec",
            "range": "stddev: 0.03607360950686562",
            "extra": "mean: 11.2296782356 sec\nrounds: 5"
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
          "id": "0652ade90d8d75f8d21e11d4fbb72077dcb50535",
          "message": "Remove the `data` field from `Event` (#4079)",
          "timestamp": "2024-07-30T10:03:57-06:00",
          "tree_id": "9dad66431cd2d091d0096eafeb304f2373022153",
          "url": "https://github.com/cocotb/cocotb/commit/0652ade90d8d75f8d21e11d4fbb72077dcb50535"
        },
        "date": 1722355849758,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07347825887311007,
            "unit": "iter/sec",
            "range": "stddev: 0.07081364261189367",
            "extra": "mean: 13.609467825399951 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08956351345458854,
            "unit": "iter/sec",
            "range": "stddev: 0.03954064306828005",
            "extra": "mean: 11.165260957600003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ray@raysalemi.com",
            "name": "Ray Salemi",
            "username": "raysalemi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fff3818ea7a1e423b04dc80aa3010cb0d540a25",
          "message": "Added pyuvm references to README.md (#4076)",
          "timestamp": "2024-07-30T17:52:06-06:00",
          "tree_id": "3052c6e583507d661d68af95430b7fa61a52a983",
          "url": "https://github.com/cocotb/cocotb/commit/2fff3818ea7a1e423b04dc80aa3010cb0d540a25"
        },
        "date": 1722383830301,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0727278187084956,
            "unit": "iter/sec",
            "range": "stddev: 0.20742213391952688",
            "extra": "mean: 13.749896776199979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08946005336996661,
            "unit": "iter/sec",
            "range": "stddev: 0.06906252895325062",
            "extra": "mean: 11.178173523599957 sec\nrounds: 5"
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
          "id": "af30a2f2bb7b9584124e736316cfba8b3a34daf5",
          "message": "Make sphinx not generate bogus undocumented return type in autoclass",
          "timestamp": "2024-08-01T10:08:20-06:00",
          "tree_id": "58f736a509a946c09a0860ef871c35311c5a53a4",
          "url": "https://github.com/cocotb/cocotb/commit/af30a2f2bb7b9584124e736316cfba8b3a34daf5"
        },
        "date": 1722528819333,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.0729207054552897,
            "unit": "iter/sec",
            "range": "stddev: 0.06314803829093599",
            "extra": "mean: 13.713526134400002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.0886057379071462,
            "unit": "iter/sec",
            "range": "stddev: 0.06897764672851131",
            "extra": "mean: 11.28595081560004 sec\nrounds: 5"
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
          "id": "da13315b7ca5cc04594aee773ece83efa2c7a9da",
          "message": "Guard VHDL-specific option in Xcelium Python runner. (#4085)\n\nGuards addition of `-NEW_VHPI_PROPAGATE_DELAY` on whether VHDL sources are present.",
          "timestamp": "2024-08-05T15:45:21-06:00",
          "tree_id": "c226a791e616c375ddf33d1e83a12a311710206a",
          "url": "https://github.com/cocotb/cocotb/commit/da13315b7ca5cc04594aee773ece83efa2c7a9da"
        },
        "date": 1722894625512,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07280102709944113,
            "unit": "iter/sec",
            "range": "stddev: 0.08154039084778146",
            "extra": "mean: 13.736069940800007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08899332698166335,
            "unit": "iter/sec",
            "range": "stddev: 0.087922303599429",
            "extra": "mean: 11.236797565800021 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8d6c1a63a39aa9f204acdf9bf429e7ec93b02ab2",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.5 → v0.5.6](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.5...v0.5.6)",
          "timestamp": "2024-08-05T20:09:51-06:00",
          "tree_id": "9190a6bace3abe8e1309b6e4052875ffba6b4906",
          "url": "https://github.com/cocotb/cocotb/commit/8d6c1a63a39aa9f204acdf9bf429e7ec93b02ab2"
        },
        "date": 1722910487112,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07224025700262368,
            "unit": "iter/sec",
            "range": "stddev: 0.11138081383697597",
            "extra": "mean: 13.842697153800009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08914966234286177,
            "unit": "iter/sec",
            "range": "stddev: 0.06832176545896862",
            "extra": "mean: 11.217092400799993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "875ca3630ca7613a1740e66e1e6026a15a81fceb",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.5.6 → v0.5.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.5.6...v0.5.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.07.29 → 2024.08.08](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.07.29...2024.08.08)",
          "timestamp": "2024-08-12T22:11:51-05:00",
          "tree_id": "fcc8b94eed92b72b65e45660dedd9ae0597cf6df",
          "url": "https://github.com/cocotb/cocotb/commit/875ca3630ca7613a1740e66e1e6026a15a81fceb"
        },
        "date": 1723519009154,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07281673625276606,
            "unit": "iter/sec",
            "range": "stddev: 0.14380470915274063",
            "extra": "mean: 13.733106583200003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08906493510830354,
            "unit": "iter/sec",
            "range": "stddev: 0.08048816472773353",
            "extra": "mean: 11.227763190799987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "579bfa682cf9ec76646654fc8c7544d812c0cfc1",
          "message": "Deprecate Join() and task.join()\n\nThis reintroduces old behavior which was changed and silently caused error\npropagation to stop. It also deprecates the Join trigger and\ntask.join().\n\nIn asyncio, which we are trying to align with, Tasks are Futures (known\nin cocotb as Triggers). There is no separate Future object for each\nTrigger firing. So Tasks are passed directly where any Future is\nexpected. Similarly, cocotb currently supports passing Tasks directly\nwherever Triggers are expected. Removing Join from the public API forces\nusers to pass Tasks directly instead of Join triggers which should align\ntheir code with the asyncio-like model we are converging on.",
          "timestamp": "2024-08-13T11:39:40-05:00",
          "tree_id": "ba326671cdcac215ee5b269ac9232766c385178b",
          "url": "https://github.com/cocotb/cocotb/commit/579bfa682cf9ec76646654fc8c7544d812c0cfc1"
        },
        "date": 1723567476723,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07290128343894424,
            "unit": "iter/sec",
            "range": "stddev: 0.09244058061810705",
            "extra": "mean: 13.717179627400014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08896296706891914,
            "unit": "iter/sec",
            "range": "stddev: 0.07104053436831223",
            "extra": "mean: 11.240632287199968 sec\nrounds: 5"
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
          "id": "1929837457788935c6c1f87cb3bc7c0108e442ff",
          "message": "Update build following change to setuptools/distutils (#4095)\n\n* Set CXXFLAGS appropriately now that they are being used\r\n* Update LDCXXSHARED variable now that it is being used\r\n* Add verbose switch when compiling cocotb for testing purposes",
          "timestamp": "2024-08-13T12:50:22-06:00",
          "tree_id": "aacb07cdd9a6bb2a0a15ec852e68317c9ed4285b",
          "url": "https://github.com/cocotb/cocotb/commit/1929837457788935c6c1f87cb3bc7c0108e442ff"
        },
        "date": 1723575320588,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07280050856487724,
            "unit": "iter/sec",
            "range": "stddev: 0.1530639507791111",
            "extra": "mean: 13.736167778399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08914508519171567,
            "unit": "iter/sec",
            "range": "stddev: 0.12811615082466796",
            "extra": "mean: 11.217668341999978 sec\nrounds: 5"
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
          "id": "4bd80db144b5a2a6e9e9e43f15bbf51a8f524649",
          "message": "Support SIM_ARGS in Verilator Makefile\n\nAlso, adds --trace to SIM_ARGS if VERILATOR_TRACE is set.",
          "timestamp": "2024-08-14T10:32:10-05:00",
          "tree_id": "ea46fa88557ecfc4cc9ff7e95a51259b116b3174",
          "url": "https://github.com/cocotb/cocotb/commit/4bd80db144b5a2a6e9e9e43f15bbf51a8f524649"
        },
        "date": 1723649833566,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07310474253751056,
            "unit": "iter/sec",
            "range": "stddev: 0.09513966850548795",
            "extra": "mean: 13.679003102799971 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08942322244437577,
            "unit": "iter/sec",
            "range": "stddev: 0.06949361277503997",
            "extra": "mean: 11.182777500800011 sec\nrounds: 5"
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
          "id": "f930bc77f239f4556371a1d5ea4cad8bb2349565",
          "message": "Don't attempt to reuse value change callbacks",
          "timestamp": "2024-08-15T00:10:31-05:00",
          "tree_id": "916f663ce909441d55db211ec67c915614c1439f",
          "url": "https://github.com/cocotb/cocotb/commit/f930bc77f239f4556371a1d5ea4cad8bb2349565"
        },
        "date": 1723698924284,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.07369234939965384,
            "unit": "iter/sec",
            "range": "stddev: 0.12276205245175335",
            "extra": "mean: 13.569929689399988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.08935863290562934,
            "unit": "iter/sec",
            "range": "stddev: 0.12009624859115119",
            "extra": "mean: 11.1908605524 sec\nrounds: 5"
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
          "id": "6c3ce100aecaf70dc57bf72d9b7ae54d3fa4be7b",
          "message": "Remove __slots__ from cocotb.types\n\n__slots__ wasn't working on Array since it's base class didn't have\n__slots__. And __slots__ in general is being discouraged as it prevents\nthings like caching and the actual performance gain is totally\nnegligible due to improvements to dictionaries and attribute access in\nrecent versions of Python.",
          "timestamp": "2024-08-15T14:06:15-05:00",
          "tree_id": "8042af49c0520f375c5c80e27a70b3207c0b9e4b",
          "url": "https://github.com/cocotb/cocotb/commit/6c3ce100aecaf70dc57bf72d9b7ae54d3fa4be7b"
        },
        "date": 1723749039650,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10617343344135584,
            "unit": "iter/sec",
            "range": "stddev: 0.045732558891535185",
            "extra": "mean: 9.418551963399988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13939574607094588,
            "unit": "iter/sec",
            "range": "stddev: 0.09748291516634632",
            "extra": "mean: 7.173820063999995 sec\nrounds: 5"
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
          "id": "3da515f61bddf58a8eef757041ff1dd6ab17c23f",
          "message": "Rename cocotb.sim_time_utils back to cocotb.utils",
          "timestamp": "2024-08-18T10:43:17-05:00",
          "tree_id": "f5794c64034372fa28e74f9403adae69885e7d97",
          "url": "https://github.com/cocotb/cocotb/commit/3da515f61bddf58a8eef757041ff1dd6ab17c23f"
        },
        "date": 1723996037391,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10672374914629029,
            "unit": "iter/sec",
            "range": "stddev: 0.08682724308524206",
            "extra": "mean: 9.369985668599986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13856934462756904,
            "unit": "iter/sec",
            "range": "stddev: 0.12427098508015617",
            "extra": "mean: 7.2166033742000195 sec\nrounds: 5"
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
          "id": "9b4f74ce732dc15907e7967b36a14149947dd34b",
          "message": "Improved typing (borrowed from typeshed)",
          "timestamp": "2024-08-18T15:36:06-05:00",
          "tree_id": "37c767c6fbe1a838d68d36b8194bd486511e572f",
          "url": "https://github.com/cocotb/cocotb/commit/9b4f74ce732dc15907e7967b36a14149947dd34b"
        },
        "date": 1724013602192,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10634902178169459,
            "unit": "iter/sec",
            "range": "stddev: 0.05250546804871375",
            "extra": "mean: 9.40300139339999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13967066254556545,
            "unit": "iter/sec",
            "range": "stddev: 0.07001803352185161",
            "extra": "mean: 7.1596996948000085 sec\nrounds: 5"
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
          "id": "80af976918c236a10773dc16239964525b019e68",
          "message": "Add a GitHub workflow to automatically backport changes\n\nUse the Backport tool, and its associated GitHub action, to\nautomatically perform backports of a pull request to one or multiple\nstable branches.\n\nThe action is controlled through GitHub labels. To backport a PR, assign\nthe `backport-to:VERSION` label to a PR. Once the PR is closed, a new PR\nagainst `stable/VERSION` will be opened by the bot, assuming the git\ncherry-pick was successful. The backport PR will then go through the usual\nround of CI and reviews.\n\nThe `backport-to:VERSION` can be applied multiple times. They can also\nbe applied after a PR has already been merged.\n\nIf an automated backport fails, developers can use the `backport`\ncommand-line tool to perform the backport and potential\nconflict-resolution manually.",
          "timestamp": "2024-08-19T19:18:52+02:00",
          "tree_id": "ac6b51086569fc9725456b5018f3bcd08157336c",
          "url": "https://github.com/cocotb/cocotb/commit/80af976918c236a10773dc16239964525b019e68"
        },
        "date": 1724088198854,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10650481240408995,
            "unit": "iter/sec",
            "range": "stddev: 0.03750778891124771",
            "extra": "mean: 9.389247090599998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13992467831562683,
            "unit": "iter/sec",
            "range": "stddev: 0.046085587700200825",
            "extra": "mean: 7.146702154599984 sec\nrounds: 5"
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
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "cd82c8e25d49e8aa4bb1f0a5c2eb30fca8f76eb8",
          "message": "Fix some documentation issues",
          "timestamp": "2024-08-19T20:37:49+02:00",
          "tree_id": "702c962dc37e040c45172933999c4c0f634faf87",
          "url": "https://github.com/cocotb/cocotb/commit/cd82c8e25d49e8aa4bb1f0a5c2eb30fca8f76eb8"
        },
        "date": 1724092907154,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10557836667387287,
            "unit": "iter/sec",
            "range": "stddev: 0.04329646814546547",
            "extra": "mean: 9.471637339199969 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13947519062414163,
            "unit": "iter/sec",
            "range": "stddev: 0.06390829191514812",
            "extra": "mean: 7.169733882599985 sec\nrounds: 5"
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
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "479fc9aed9bf1708d289e90b12a42e5a0d842a9b",
          "message": "Use EXTRA_ARGS correctly in Makefile.verilator\n\nEXTRA_ARGS, per the documentation, are flags that are passed to both the compilation and the simulation steps when running a test.",
          "timestamp": "2024-08-19T22:30:55+02:00",
          "tree_id": "ede9d307919a9c7975da5748846884001af7eb33",
          "url": "https://github.com/cocotb/cocotb/commit/479fc9aed9bf1708d289e90b12a42e5a0d842a9b"
        },
        "date": 1724099698284,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10610986863722308,
            "unit": "iter/sec",
            "range": "stddev: 0.03616142235632343",
            "extra": "mean: 9.424194119199978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13860661558450643,
            "unit": "iter/sec",
            "range": "stddev: 0.06736638572914486",
            "extra": "mean: 7.214662848400008 sec\nrounds: 5"
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
          "id": "7585730d24565ec9df02aa9541dc91e0ab877f89",
          "message": "CI: Gate log dumping in backport action\n\nThe log dumping tasks weren't gated by the label check, leading to cases\nwhere no logs were available and the `cat` failed.",
          "timestamp": "2024-08-20T09:25:09+02:00",
          "tree_id": "d96f2492a437b0008c8b76f8c3e6c57eff2c103f",
          "url": "https://github.com/cocotb/cocotb/commit/7585730d24565ec9df02aa9541dc91e0ab877f89"
        },
        "date": 1724138955287,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.10613852627794237,
            "unit": "iter/sec",
            "range": "stddev: 0.03916854068053795",
            "extra": "mean: 9.421649565600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1386990099519703,
            "unit": "iter/sec",
            "range": "stddev: 0.01694040579673863",
            "extra": "mean: 7.209856799599993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "501bfccdfb835b267dcc1e131dd3eb81c146df22",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2024-08-20T09:27:22+02:00",
          "tree_id": "c13665fc7774d0ff9dd2abe1ec852491a9fd09ae",
          "url": "https://github.com/cocotb/cocotb/commit/501bfccdfb835b267dcc1e131dd3eb81c146df22"
        },
        "date": 1724139241185,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1058966712066684,
            "unit": "iter/sec",
            "range": "stddev: 0.09732816406448946",
            "extra": "mean: 9.443167463200007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.13637541528182315,
            "unit": "iter/sec",
            "range": "stddev: 0.15700197625345683",
            "extra": "mean: 7.332699943999989 sec\nrounds: 5"
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
          "id": "e3923df9dcb22feb11e1880cb25effc3ecdb1c8b",
          "message": "Fix incorrect use of lru_cache",
          "timestamp": "2024-08-20T08:56:38-05:00",
          "tree_id": "c917ec0c31905ac82c4273aba929277ca771ac10",
          "url": "https://github.com/cocotb/cocotb/commit/e3923df9dcb22feb11e1880cb25effc3ecdb1c8b"
        },
        "date": 1724162421497,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12233409536625338,
            "unit": "iter/sec",
            "range": "stddev: 0.057033110683461924",
            "extra": "mean: 8.174336001800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17408902995147824,
            "unit": "iter/sec",
            "range": "stddev: 0.05715037470166385",
            "extra": "mean: 5.744187329199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8a0936cf9d3838e900c3667bba5cd0a08d35de27",
          "message": "fix test_forked_exception\n\nRemoving the Warning means the test no longer fails hard.",
          "timestamp": "2024-08-21T14:29:28-05:00",
          "tree_id": "ef364f6b91544916f00e05b72b70f357432909b4",
          "url": "https://github.com/cocotb/cocotb/commit/8a0936cf9d3838e900c3667bba5cd0a08d35de27"
        },
        "date": 1724268782488,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12373384986713301,
            "unit": "iter/sec",
            "range": "stddev: 0.02103706309090331",
            "extra": "mean: 8.081862813399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17528101766320756,
            "unit": "iter/sec",
            "range": "stddev: 0.03549587294551191",
            "extra": "mean: 5.70512433880001 sec\nrounds: 5"
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
          "id": "9b07ceaba30aaae36c59541518116579d68a9673",
          "message": "Add tests for moving to ReadOnly from various time phases (#4121)",
          "timestamp": "2024-08-21T15:14:36-06:00",
          "tree_id": "e8c18aa2e38e80df07ae702b28dd4daa727f4ee0",
          "url": "https://github.com/cocotb/cocotb/commit/9b07ceaba30aaae36c59541518116579d68a9673"
        },
        "date": 1724275102927,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12428737012529632,
            "unit": "iter/sec",
            "range": "stddev: 0.03522966524079339",
            "extra": "mean: 8.045869817599987 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17708333531924836,
            "unit": "iter/sec",
            "range": "stddev: 0.07464417815313379",
            "extra": "mean: 5.647058760200025 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d211018226edcc344b86ea3fc5839097498731c6",
          "message": "Add test for cocotb.sim_phase",
          "timestamp": "2024-08-21T17:38:46-05:00",
          "tree_id": "f74a9197a91cc242f5302881c7e5170e93425b7f",
          "url": "https://github.com/cocotb/cocotb/commit/d211018226edcc344b86ea3fc5839097498731c6"
        },
        "date": 1724280140901,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1243202347219024,
            "unit": "iter/sec",
            "range": "stddev: 0.06684216216431106",
            "extra": "mean: 8.043742856799986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1767377183703173,
            "unit": "iter/sec",
            "range": "stddev: 0.037345398475142025",
            "extra": "mean: 5.658101786199973 sec\nrounds: 5"
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
          "id": "88d7eee2779409c03e63f372e7d3035ff2372c92",
          "message": "Add test for assigning strings",
          "timestamp": "2024-08-22T10:37:34-05:00",
          "tree_id": "733815a81443164292b20ff83fad2177c6044685",
          "url": "https://github.com/cocotb/cocotb/commit/88d7eee2779409c03e63f372e7d3035ff2372c92"
        },
        "date": 1724341271570,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12498748756198935,
            "unit": "iter/sec",
            "range": "stddev: 0.051068024630091496",
            "extra": "mean: 8.000800876199992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17932154279159987,
            "unit": "iter/sec",
            "range": "stddev: 0.03205736287144674",
            "extra": "mean: 5.576574818799986 sec\nrounds: 5"
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
          "id": "42dc0cb93c173426469d2f2826f7ce62ddb09ab4",
          "message": "Update minimum supported Verilator and update CI",
          "timestamp": "2024-08-25T12:06:13-05:00",
          "tree_id": "1b35e6950b0246f5121249d310fa76623c98f03a",
          "url": "https://github.com/cocotb/cocotb/commit/42dc0cb93c173426469d2f2826f7ce62ddb09ab4"
        },
        "date": 1724605788162,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12627588742469012,
            "unit": "iter/sec",
            "range": "stddev: 0.048613387144387545",
            "extra": "mean: 7.91916826239999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18198591665594022,
            "unit": "iter/sec",
            "range": "stddev: 0.059153864702660056",
            "extra": "mean: 5.49493069780001 sec\nrounds: 5"
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
          "id": "f4b355a9f113c4f999aa81883277c20813b16e8e",
          "message": "Remove cocotb.decorators, use cocotb namespace\n\nThere was more than one fully-qualified name for the objects in\ncocotb.decorators, so the more qualified one was removed by making the\nmodule private.",
          "timestamp": "2024-08-25T15:23:19-05:00",
          "tree_id": "e46b7fced1bedd4e921740c1fa3a5eeed68bc476",
          "url": "https://github.com/cocotb/cocotb/commit/f4b355a9f113c4f999aa81883277c20813b16e8e"
        },
        "date": 1724617643563,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12593141427255408,
            "unit": "iter/sec",
            "range": "stddev: 0.08908136949064718",
            "extra": "mean: 7.9408303779999985 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18232361236166414,
            "unit": "iter/sec",
            "range": "stddev: 0.020272599689745523",
            "extra": "mean: 5.484753110399993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "111ba1863ef2024d2803ef68a01ac5a16e60db52",
          "message": "Emit TypeError if invalid type used when constructing Logic",
          "timestamp": "2024-08-25T16:49:15-05:00",
          "tree_id": "579e2e44f94ab01c0f47ad83a7c2348e6f8b4742",
          "url": "https://github.com/cocotb/cocotb/commit/111ba1863ef2024d2803ef68a01ac5a16e60db52"
        },
        "date": 1724622768261,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12606884574750452,
            "unit": "iter/sec",
            "range": "stddev: 0.050723998637228936",
            "extra": "mean: 7.932173837800008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18020555290123688,
            "unit": "iter/sec",
            "range": "stddev: 0.010343060879391804",
            "extra": "mean: 5.549218566799982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "683fe71d76d21af76b7f36527e74f3bf1264f12b",
          "message": "Add test to ensure writes in ReadWrite behave properly in all cases",
          "timestamp": "2024-08-26T22:01:24-05:00",
          "tree_id": "7a280b4794e8ecf1f64276a561abfc566325ad93",
          "url": "https://github.com/cocotb/cocotb/commit/683fe71d76d21af76b7f36527e74f3bf1264f12b"
        },
        "date": 1724727897096,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12686663483827712,
            "unit": "iter/sec",
            "range": "stddev: 0.073431880939943",
            "extra": "mean: 7.882293096800015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18066336787316822,
            "unit": "iter/sec",
            "range": "stddev: 0.050463693530775997",
            "extra": "mean: 5.535156417000008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "24aec6f469f4b62f680104aeb0722a00740f9e94",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.1 → v0.6.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.1...v0.6.2)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.08.19 → 2024.08.26](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.08.19...2024.08.26)",
          "timestamp": "2024-08-27T10:07:05+02:00",
          "tree_id": "f862810143ede6f6c95cb7fad0bd0a89fda5a2ea",
          "url": "https://github.com/cocotb/cocotb/commit/24aec6f469f4b62f680104aeb0722a00740f9e94"
        },
        "date": 1724746284173,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12659461039211853,
            "unit": "iter/sec",
            "range": "stddev: 0.05836193388909434",
            "extra": "mean: 7.899230440399992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1797941796994349,
            "unit": "iter/sec",
            "range": "stddev: 0.05430923619883458",
            "extra": "mean: 5.5619153059999915 sec\nrounds: 5"
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
          "id": "828d127e8e865fc2ecf4979ea54767e1da80dd21",
          "message": "Fix memory leak of Python callbacks\n\nThis leak occurs when a trigger is deregistered before it fires.\nThe callback is cleaned up if it did fire. The trigger._unprime method\nhad to be split up so that triggers that fired weren't attempted to be\nderegistered (_unprime) more than once. Fired triggers just run\n_cleanup.",
          "timestamp": "2024-08-27T10:54:38-05:00",
          "tree_id": "0d02d60183e41a992380cd9cd514cf0e00f4ea4f",
          "url": "https://github.com/cocotb/cocotb/commit/828d127e8e865fc2ecf4979ea54767e1da80dd21"
        },
        "date": 1724774303830,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12655333456077789,
            "unit": "iter/sec",
            "range": "stddev: 0.04939894144454224",
            "extra": "mean: 7.901806803199998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18016808430529951,
            "unit": "iter/sec",
            "range": "stddev: 0.0487840098947539",
            "extra": "mean: 5.550372608199984 sec\nrounds: 5"
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
          "id": "00e61e3f83f84abca3cae3c1e5e19a0248b922ea",
          "message": "Fix re-entrancy issue with setimmediatevalue and Edge triggers on Icarus and Xcelium",
          "timestamp": "2024-08-27T21:28:12-05:00",
          "tree_id": "6759206aaefd5ee6099bfc3778f2fa8990896f59",
          "url": "https://github.com/cocotb/cocotb/commit/00e61e3f83f84abca3cae3c1e5e19a0248b922ea"
        },
        "date": 1724812329994,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12753203540376676,
            "unit": "iter/sec",
            "range": "stddev: 0.05097451399583016",
            "extra": "mean: 7.8411670984000015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17991369835739818,
            "unit": "iter/sec",
            "range": "stddev: 0.041625976642814165",
            "extra": "mean: 5.558220464200019 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b431ff884080ae1b4afddc2fbb2cebd6af155430",
          "message": "Change Verilator expectation of ReadWrite in ReadWrite",
          "timestamp": "2024-08-28T08:23:42-05:00",
          "tree_id": "a3b85abeec2e883a894b8ba6c3a97100d472d085",
          "url": "https://github.com/cocotb/cocotb/commit/b431ff884080ae1b4afddc2fbb2cebd6af155430"
        },
        "date": 1724851639356,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12707328274497726,
            "unit": "iter/sec",
            "range": "stddev: 0.0854337022622485",
            "extra": "mean: 7.869474829000012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17911601572672156,
            "unit": "iter/sec",
            "range": "stddev: 0.06471269230576485",
            "extra": "mean: 5.582973671799993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte@hudson-trading.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00e8b0ca7736c562caf89a1992c24bf11ea8c144",
          "message": "Simplify VpiArrayObjHdl::initialise (#3624)",
          "timestamp": "2024-08-28T09:10:15-06:00",
          "tree_id": "ec2a5056a033df757fa470972da23d585533c91c",
          "url": "https://github.com/cocotb/cocotb/commit/00e8b0ca7736c562caf89a1992c24bf11ea8c144"
        },
        "date": 1724858083618,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12764858982566846,
            "unit": "iter/sec",
            "range": "stddev: 0.04740023293755553",
            "extra": "mean: 7.8340074211999875 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17919755653299554,
            "unit": "iter/sec",
            "range": "stddev: 0.08703811795274237",
            "extra": "mean: 5.580433234399993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3925bd55031a3adbe7511278f60d3846f1f88944",
          "message": "Deregister _Event with Event and _Lock with Lock on unprime",
          "timestamp": "2024-08-31T15:12:33-05:00",
          "tree_id": "64cb9785f19582a733f59f081e9a676dfe39ca92",
          "url": "https://github.com/cocotb/cocotb/commit/3925bd55031a3adbe7511278f60d3846f1f88944"
        },
        "date": 1725135390679,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1267935436714276,
            "unit": "iter/sec",
            "range": "stddev: 0.05552960754550886",
            "extra": "mean: 7.886836908599991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17799582221698157,
            "unit": "iter/sec",
            "range": "stddev: 0.05719387232678149",
            "extra": "mean: 5.618109389000006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4949e2037d09017c292679239a0ce66fc7bbc882",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.2 → v0.6.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.2...v0.6.3)",
          "timestamp": "2024-09-02T19:48:43-05:00",
          "tree_id": "e2b27951effab731aa00b3b275fab3bb0b0858fc",
          "url": "https://github.com/cocotb/cocotb/commit/4949e2037d09017c292679239a0ce66fc7bbc882"
        },
        "date": 1725324733669,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1273435956002478,
            "unit": "iter/sec",
            "range": "stddev: 0.03997852288498422",
            "extra": "mean: 7.852770257400005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17967060491750267,
            "unit": "iter/sec",
            "range": "stddev: 0.06779655084785145",
            "extra": "mean: 5.565740708999999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "1cdfdfeb9b75f25d980b2bc5a31924397fe4d3c9",
          "message": "Rename cocotb.parameterize to cocotb.parametrize",
          "timestamp": "2024-09-03T20:16:41-05:00",
          "tree_id": "d6ca347e4dfb65beeec8507ae3f909d9b602d1ed",
          "url": "https://github.com/cocotb/cocotb/commit/1cdfdfeb9b75f25d980b2bc5a31924397fe4d3c9"
        },
        "date": 1725412830509,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12648727217769795,
            "unit": "iter/sec",
            "range": "stddev: 0.09196406189324897",
            "extra": "mean: 7.905933797 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17873392610341776,
            "unit": "iter/sec",
            "range": "stddev: 0.06159239438948563",
            "extra": "mean: 5.594908710399989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "815daedabf6b52d09fb337272504a8646681e5da",
          "message": "Apply writes done in ReadWrite phase immediately\n\nPreviously this scheduled writes until the next ReadWrite, but that\ndoesn't seem particularly useful and can even put the user into a bad\nsituation where there is no other ReadWrite phase in the time step and\nthe writes are applied inadvertently on the next time step.",
          "timestamp": "2024-09-06T11:20:57-05:00",
          "tree_id": "b3f6355c80ac4ab86dd582e2e8587bee32643525",
          "url": "https://github.com/cocotb/cocotb/commit/815daedabf6b52d09fb337272504a8646681e5da"
        },
        "date": 1725639873152,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12784570678435056,
            "unit": "iter/sec",
            "range": "stddev: 0.030825151907426816",
            "extra": "mean: 7.821928676000004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18079581743906972,
            "unit": "iter/sec",
            "range": "stddev: 0.040192056996714576",
            "extra": "mean: 5.5311014058000065 sec\nrounds: 5"
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
          "id": "31b46a27f9f9838ad12c73fc148f11455210ccce",
          "message": "Touchup typing and docs in Range",
          "timestamp": "2024-09-06T12:40:37-05:00",
          "tree_id": "6850b71638d5a1a1875b39e5482bcb590176290b",
          "url": "https://github.com/cocotb/cocotb/commit/31b46a27f9f9838ad12c73fc148f11455210ccce"
        },
        "date": 1725644657328,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12629057515781972,
            "unit": "iter/sec",
            "range": "stddev: 0.059008595357820014",
            "extra": "mean: 7.918247254399978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17709124425673473,
            "unit": "iter/sec",
            "range": "stddev: 0.04650157132546179",
            "extra": "mean: 5.646806561199992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "da7d4237a5bc853950cad63144487719ee071176",
          "message": "Add (deprecated) __bool__ cast for LogicArray\n\nThis was done for backwards compatibility using the same semantics as\nBinaryValue.\n\nThere are many possible reasonable implementations of value checking:\n* all values == logical 1\n* any value == logical 1\n* `or` reduction of value == logical 1\n\nWe should refuse the temptation to guess (as Verilog has done) and have\nusers *explicitly* mention the behavior they are looking for, so this\nwas deprecated.",
          "timestamp": "2024-09-06T18:06:34-05:00",
          "tree_id": "d01c2d213ec3571abb3812a4214eb13f2844b26c",
          "url": "https://github.com/cocotb/cocotb/commit/da7d4237a5bc853950cad63144487719ee071176"
        },
        "date": 1725664205747,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1274081816006753,
            "unit": "iter/sec",
            "range": "stddev: 0.03737204734859088",
            "extra": "mean: 7.848789515999965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1808116316058968,
            "unit": "iter/sec",
            "range": "stddev: 0.04801418054309353",
            "extra": "mean: 5.530617643999994 sec\nrounds: 5"
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
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "fdb288f72c2115ca36216218226368a9f11f685a",
          "message": "Enable Python 3.13 builds\n\nUpdate cibuildwheel to build wheels for Python 3.13, which now had its final release\ncandidate and will not see any more changes to its ABI.\nAlso update the CI configuration to build Python 3.13 by default for all\nbuilds, not only the experimental ones.",
          "timestamp": "2024-09-09T20:22:31+02:00",
          "tree_id": "13974fa365fdd0bd3f16771367395ac0a3a9b304",
          "url": "https://github.com/cocotb/cocotb/commit/fdb288f72c2115ca36216218226368a9f11f685a"
        },
        "date": 1725906370755,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12535932830824983,
            "unit": "iter/sec",
            "range": "stddev: 0.04656304221323164",
            "extra": "mean: 7.977068906599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1776124949054524,
            "unit": "iter/sec",
            "range": "stddev: 0.040136154859276775",
            "extra": "mean: 5.630234519999988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5d0f4f7677858c611a3de212d6c978fdd939b925",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.3 → v0.6.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.3...v0.6.4)",
          "timestamp": "2024-09-10T07:03:02-05:00",
          "tree_id": "06a8762773e403dc3c798228320acbc96a03e015",
          "url": "https://github.com/cocotb/cocotb/commit/5d0f4f7677858c611a3de212d6c978fdd939b925"
        },
        "date": 1725970085890,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12783069118574422,
            "unit": "iter/sec",
            "range": "stddev: 0.0298503496254256",
            "extra": "mean: 7.822847476800007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1807603704410727,
            "unit": "iter/sec",
            "range": "stddev: 0.046021333968512435",
            "extra": "mean: 5.532186051400004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "27f52fd5d1173abf28c45d186703df7bc8882bb2",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.4 → v0.6.5](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.4...v0.6.5)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.08.26 → 2024.09.16](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.08.26...2024.09.16)",
          "timestamp": "2024-09-18T08:05:28+02:00",
          "tree_id": "42feeff200d8680c66fc09d41096f3ce774acbcc",
          "url": "https://github.com/cocotb/cocotb/commit/27f52fd5d1173abf28c45d186703df7bc8882bb2"
        },
        "date": 1726639764307,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1261267289196245,
            "unit": "iter/sec",
            "range": "stddev: 0.06206872527643443",
            "extra": "mean: 7.928533535800011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17877642298463117,
            "unit": "iter/sec",
            "range": "stddev: 0.05669046865564241",
            "extra": "mean: 5.593578746599974 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8c5a6db8b340c36b85402bc4a9047e8cdf4bfe80",
          "message": "Fix location reported by LogicArray.__bool__ deprecation",
          "timestamp": "2024-09-20T14:39:12+02:00",
          "tree_id": "5eaa019f7b2095c05e05b4580a2d147c33d5aea8",
          "url": "https://github.com/cocotb/cocotb/commit/8c5a6db8b340c36b85402bc4a9047e8cdf4bfe80"
        },
        "date": 1726836165338,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12600599302587212,
            "unit": "iter/sec",
            "range": "stddev: 0.06473752224686874",
            "extra": "mean: 7.936130464799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17851418994095367,
            "unit": "iter/sec",
            "range": "stddev: 0.060604646818872135",
            "extra": "mean: 5.601795578999997 sec\nrounds: 5"
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
          "id": "32d8eb199652d799894e4c0a4833f7b9650ef191",
          "message": "Add documentation for 'inheriting' from the test decorator (#4163)",
          "timestamp": "2024-09-21T08:02:11+02:00",
          "tree_id": "9bbd25f6befac79ab4aa15c755f5f003bf5d637c",
          "url": "https://github.com/cocotb/cocotb/commit/32d8eb199652d799894e4c0a4833f7b9650ef191"
        },
        "date": 1726898753412,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.126372206497314,
            "unit": "iter/sec",
            "range": "stddev: 0.04196499590410289",
            "extra": "mean: 7.913132386600012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17871104362552892,
            "unit": "iter/sec",
            "range": "stddev: 0.029457793874443288",
            "extra": "mean: 5.595625092399996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "b9dd5ee1850a8efcf9ad3e982fc3dbd47bb21182",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.5 → v0.6.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.5...v0.6.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.09.16 → 2024.09.20](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.09.16...2024.09.20)",
          "timestamp": "2024-09-24T15:06:51+02:00",
          "tree_id": "fa815dff210c5bd33ce1bcc7cef185e4ab439a63",
          "url": "https://github.com/cocotb/cocotb/commit/b9dd5ee1850a8efcf9ad3e982fc3dbd47bb21182"
        },
        "date": 1727183423496,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12643353544735567,
            "unit": "iter/sec",
            "range": "stddev: 0.04636741387264025",
            "extra": "mean: 7.909293973800009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17895015770736555,
            "unit": "iter/sec",
            "range": "stddev: 0.04062081463687702",
            "extra": "mean: 5.588148190600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "povilas@radix.lt",
            "name": "Povilas Kanapickas",
            "username": "p12tic"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a764be6266f701d9f94bc7f10c09f8b090185e21",
          "message": "Fix attempt to remove non-existing element in Lock._unprime_lock()\n\nWhen running cocotb tests the following errors are printed:\n\nException ignored in: <function Trigger.__del__ at 0x7fffd6c50fe0>\nTraceback (most recent call last):\n  File \".../cocotb/src/cocotb/triggers.py\", line 124, in __del__\n    self._unprime()\n  File \".../cocotb/src/cocotb/triggers.py\", line 616, in _unprime\n    self._parent._unprime_lock(self)\n  File \".../cocotb/src/cocotb/triggers.py\", line 676, in _unprime_lock\n    self._pending_primed.remove(lock)\nValueError: list.remove(x): x not in list\n\nThe reason why tests do not fail is that python ignores all exceptions\nraised in __del__ method:\nhttps://docs.python.org/3/reference/datamodel.html#object.__del__.\n\nThe mechanism of the failure is as follows:\n\n - callers always call both _prime_lock() and _unprime_lock()\n- depending on _locked attribute, _prime_lock() may not populate\n_pending_primed list\n- however, _unprime_lock attempts to remove item from _unprime_lock\nunconditionally.\n\nThe fix is simply to address this mismatch of conditionality.\n\nUnfortunately it is not possible to write a unit test for this specific\nmethod of failure.",
          "timestamp": "2024-09-25T18:48:23-06:00",
          "tree_id": "5e4f1586b79c11c3fafb50426d5d3d67384627f0",
          "url": "https://github.com/cocotb/cocotb/commit/a764be6266f701d9f94bc7f10c09f8b090185e21"
        },
        "date": 1727311955415,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12704098879488782,
            "unit": "iter/sec",
            "range": "stddev: 0.08136488919307577",
            "extra": "mean: 7.8714752576000135 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17969946801124437,
            "unit": "iter/sec",
            "range": "stddev: 0.0572133179964174",
            "extra": "mean: 5.5648467469999785 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6c126074451b672fc4cbb8d9b8f188fd7ff577d3",
          "message": "Don't unprime triggers in Trigger.__del__",
          "timestamp": "2024-09-26T11:25:20-06:00",
          "tree_id": "ab8ce109b90b9e7421cb1531a1d4dd357eaf2d3d",
          "url": "https://github.com/cocotb/cocotb/commit/6c126074451b672fc4cbb8d9b8f188fd7ff577d3"
        },
        "date": 1727371733428,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12770973041809044,
            "unit": "iter/sec",
            "range": "stddev: 0.03651873246425458",
            "extra": "mean: 7.830256917200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17884229466702023,
            "unit": "iter/sec",
            "range": "stddev: 0.038461012078397416",
            "extra": "mean: 5.591518504399994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "279e6bc055bc01f394d519b10ac00880521edc9a",
          "message": "Move test outcome to RegressionManager instead of overwriting Task outcome",
          "timestamp": "2024-09-27T08:40:22-06:00",
          "tree_id": "be74002329a0fa46dca5f9201cb525c6e9c1775a",
          "url": "https://github.com/cocotb/cocotb/commit/279e6bc055bc01f394d519b10ac00880521edc9a"
        },
        "date": 1727448243206,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12772836442564445,
            "unit": "iter/sec",
            "range": "stddev: 0.025482092862683135",
            "extra": "mean: 7.8291145783999925 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1793729013713812,
            "unit": "iter/sec",
            "range": "stddev: 0.039857238376521394",
            "extra": "mean: 5.574978117400008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "7c475deb90850fd057b62db0d714264daba84488",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.7 → v0.6.8](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.7...v0.6.8)\n- [github.com/pre-commit/mirrors-clang-format: v18.1.8 → v19.1.0](https://github.com/pre-commit/mirrors-clang-format/compare/v18.1.8...v19.1.0)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.09.20 → 2024.09.23](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.09.20...2024.09.23)",
          "timestamp": "2024-09-30T18:53:20-06:00",
          "tree_id": "0e793499174a4694dc089451af78d9e93c208e25",
          "url": "https://github.com/cocotb/cocotb/commit/7c475deb90850fd057b62db0d714264daba84488"
        },
        "date": 1727744221017,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12834061429830548,
            "unit": "iter/sec",
            "range": "stddev: 0.0646667281936126",
            "extra": "mean: 7.791765727999973 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17970593619513345,
            "unit": "iter/sec",
            "range": "stddev: 0.029141882567884792",
            "extra": "mean: 5.564646450600003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "7bcc8065e96930fc226463e3dcb0df3cd0b524db",
          "message": "Prevent warnings in Xcelium when getting bounds of non-indexable signals",
          "timestamp": "2024-10-02T09:33:18-06:00",
          "tree_id": "f5ccd9e0edd73b5c8c2e523527259e2c1da6f277",
          "url": "https://github.com/cocotb/cocotb/commit/7bcc8065e96930fc226463e3dcb0df3cd0b524db"
        },
        "date": 1727883420253,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1271185017618656,
            "unit": "iter/sec",
            "range": "stddev: 0.0382396855719815",
            "extra": "mean: 7.866675473200007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1804102434769738,
            "unit": "iter/sec",
            "range": "stddev: 0.039714080324579744",
            "extra": "mean: 5.542922512199993 sec\nrounds: 5"
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
          "id": "dc5e894588d289b45807a5c62543379af5f4fd69",
          "message": "Add initial support for Synopsys VCS in CI\n\nAdd VCS to the experimental CI bucket until all tests pass.",
          "timestamp": "2024-10-05T17:30:34+02:00",
          "tree_id": "3625f43937a5383991a132346fb538608ba570b8",
          "url": "https://github.com/cocotb/cocotb/commit/dc5e894588d289b45807a5c62543379af5f4fd69"
        },
        "date": 1728142446761,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1266434636670786,
            "unit": "iter/sec",
            "range": "stddev: 0.08628580874241701",
            "extra": "mean: 7.896183277399996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18097358649377024,
            "unit": "iter/sec",
            "range": "stddev: 0.04078013813152883",
            "extra": "mean: 5.525668244600013 sec\nrounds: 5"
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
          "id": "9466884fbb61e946c60c73283933e42a5650b626",
          "message": "README: Fix the name of the current stable branch",
          "timestamp": "2024-10-06T13:08:26+02:00",
          "tree_id": "e45890bd58974f67c08372ac745b6508a8e106bf",
          "url": "https://github.com/cocotb/cocotb/commit/9466884fbb61e946c60c73283933e42a5650b626"
        },
        "date": 1728213123375,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1271434977501034,
            "unit": "iter/sec",
            "range": "stddev: 0.05866392725602025",
            "extra": "mean: 7.865128910999988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17945569846759524,
            "unit": "iter/sec",
            "range": "stddev: 0.02551094326853689",
            "extra": "mean: 5.5724059393999825 sec\nrounds: 5"
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
          "id": "e8c61232559d79787c5c4b306988608d9b742211",
          "message": "Extended CI: Only run 5 tests in parallel\n\nWe only have 5 licenses of each proprietary simulator, avoid overloading\nthe system by running more tests in parallel that then fail due to\nlicense exhaustion (we cannot control the interleaving of tests, i.e.,\nwe can't have 5 Cadence, 5 Synopsys, and 5 Aldec tests run in parallel\nreliably, hence go the safe and slow route instead).",
          "timestamp": "2024-10-06T13:08:41+02:00",
          "tree_id": "7a6533a64db0f646a7cc55d6fdad45104fff40d0",
          "url": "https://github.com/cocotb/cocotb/commit/e8c61232559d79787c5c4b306988608d9b742211"
        },
        "date": 1728213358869,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12708755882140124,
            "unit": "iter/sec",
            "range": "stddev: 0.06269926914703904",
            "extra": "mean: 7.868590830400012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18030670070982674,
            "unit": "iter/sec",
            "range": "stddev: 0.10086256289992636",
            "extra": "mean: 5.546105585999999 sec\nrounds: 5"
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
          "id": "a24ff3bc5dd3c31eda9028db462aba25b22f40e2",
          "message": "Nox: Install all doc dependencies in one go\n\nInstalling domaintools first also triggers the installation of any\nSphinx version, which is Sphinx 8 by default these days. Later, we\ninstall our requirements through requirements.txt and downgrade to\nSphinx 7. Avoid the double-effort and let the dependency solver deal\nwith all dependencies at the same time.",
          "timestamp": "2024-10-07T15:16:41+02:00",
          "tree_id": "1fefdb808ffd93284005c965aaf01034bc673983",
          "url": "https://github.com/cocotb/cocotb/commit/a24ff3bc5dd3c31eda9028db462aba25b22f40e2"
        },
        "date": 1728307258219,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12593872855873622,
            "unit": "iter/sec",
            "range": "stddev: 0.036871809130144116",
            "extra": "mean: 7.940369189400007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1780107725050359,
            "unit": "iter/sec",
            "range": "stddev: 0.045319498767694026",
            "extra": "mean: 5.617637550399991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31325319+dolphingarlic@users.noreply.github.com",
            "name": "Andi Qu",
            "username": "dolphingarlic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0339d6775c55bc3defe1d3cba9e074dd8db99a76",
          "message": "Rename deprecated environment variables in test Makefiles (#4192)\n\n* Rename MODULE to COCOTB_TEST_MODULES in test Makefiles\r\n* Rename TOPLEVEL to COCOTB_TOPLEVEL in test Makefiles",
          "timestamp": "2024-10-07T10:14:00-06:00",
          "tree_id": "fd1de3c0ee2311aed43ca891093ddf74c07062c9",
          "url": "https://github.com/cocotb/cocotb/commit/0339d6775c55bc3defe1d3cba9e074dd8db99a76"
        },
        "date": 1728317858118,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1270706438944894,
            "unit": "iter/sec",
            "range": "stddev: 0.060527162317184524",
            "extra": "mean: 7.869638252799996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17930699957331733,
            "unit": "iter/sec",
            "range": "stddev: 0.07533880242118854",
            "extra": "mean: 5.577027123199992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "78d5391e1c4a346f251eff1236823fb91496cc6b",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.8 → v0.6.9](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.8...v0.6.9)\n- [github.com/pre-commit/mirrors-clang-format: v19.1.0 → v19.1.1](https://github.com/pre-commit/mirrors-clang-format/compare/v19.1.0...v19.1.1)\n- [github.com/pre-commit/pre-commit-hooks: v4.6.0 → v5.0.0](https://github.com/pre-commit/pre-commit-hooks/compare/v4.6.0...v5.0.0)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.09.23 → 2024.10.07](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.09.23...2024.10.07)",
          "timestamp": "2024-10-08T09:00:07+02:00",
          "tree_id": "7df91ba82f3a38545e3e70669e9b521f7907d707",
          "url": "https://github.com/cocotb/cocotb/commit/78d5391e1c4a346f251eff1236823fb91496cc6b"
        },
        "date": 1728371030699,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12641586955255163,
            "unit": "iter/sec",
            "range": "stddev: 0.05363778523688356",
            "extra": "mean: 7.910399252399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17958569682608952,
            "unit": "iter/sec",
            "range": "stddev: 0.026459955546275445",
            "extra": "mean: 5.5683721903999865 sec\nrounds: 5"
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
          "id": "55cb25a60e7daa3f43384e7d3f0e63a5386316f8",
          "message": "Backport cocotb 1.9 release notes",
          "timestamp": "2024-10-08T09:05:24+02:00",
          "tree_id": "3681b241c906e8cc824c6b826ca2fe471bc4341d",
          "url": "https://github.com/cocotb/cocotb/commit/55cb25a60e7daa3f43384e7d3f0e63a5386316f8"
        },
        "date": 1728371369642,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12695870803547002,
            "unit": "iter/sec",
            "range": "stddev: 0.038010654280369136",
            "extra": "mean: 7.876576687600016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17884385505410086,
            "unit": "iter/sec",
            "range": "stddev: 0.04630426918256208",
            "extra": "mean: 5.591469719200006 sec\nrounds: 5"
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
          "id": "3690f8ee08ae8ec2a30e57084acc4712e527c83a",
          "message": "Move contributor guide to main documentation\n\nPerform only minimal changes as part of the conversion and the\nrestructuring, keep text as-is.",
          "timestamp": "2024-10-08T09:30:04+02:00",
          "tree_id": "8455b6c05d476fc8656c0a39a785a1ce6924f48a",
          "url": "https://github.com/cocotb/cocotb/commit/3690f8ee08ae8ec2a30e57084acc4712e527c83a"
        },
        "date": 1728372830295,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12653779483681926,
            "unit": "iter/sec",
            "range": "stddev: 0.04670917229017337",
            "extra": "mean: 7.902777200199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17926609245214623,
            "unit": "iter/sec",
            "range": "stddev: 0.06845835725975864",
            "extra": "mean: 5.5782997572 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilberto@hudson-trading.com",
            "name": "gilbertoabram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ba1c7f5390485b73a7baa4703549782fd52f36e",
          "message": "VPI: Queue callback objects instead of simulator pointers. (#4206)\n\nDon't queue on first cb. Clean up queue on deregister.",
          "timestamp": "2024-10-08T15:01:50-06:00",
          "tree_id": "d3fdeaa208dc5dd2506154aeef3dfbcbfae55b0c",
          "url": "https://github.com/cocotb/cocotb/commit/8ba1c7f5390485b73a7baa4703549782fd52f36e"
        },
        "date": 1728421528406,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12632210124071255,
            "unit": "iter/sec",
            "range": "stddev: 0.07407664345867325",
            "extra": "mean: 7.916271105199985 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17826667893339188,
            "unit": "iter/sec",
            "range": "stddev: 0.031138239464941375",
            "extra": "mean: 5.609573286399995 sec\nrounds: 5"
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
          "id": "8356f23d55fce3c17592d204e9f71b8dbbd6992c",
          "message": "Document how to backport PRs",
          "timestamp": "2024-10-08T23:17:05+02:00",
          "tree_id": "ff956441cdfeada04d86eb24d95f725c78b2579d",
          "url": "https://github.com/cocotb/cocotb/commit/8356f23d55fce3c17592d204e9f71b8dbbd6992c"
        },
        "date": 1728422561624,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12740739515666738,
            "unit": "iter/sec",
            "range": "stddev: 0.05089950082635461",
            "extra": "mean: 7.848837963999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1797171544166456,
            "unit": "iter/sec",
            "range": "stddev: 0.06999350487599053",
            "extra": "mean: 5.564299096799959 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0ee51b8e83bf23afc36837ffb96dbb58468eaee0",
          "message": "Fix a couple small typing issues",
          "timestamp": "2024-10-08T15:21:31-06:00",
          "tree_id": "81007dfc043cffdc52e168cd49f563a2ba3963dd",
          "url": "https://github.com/cocotb/cocotb/commit/0ee51b8e83bf23afc36837ffb96dbb58468eaee0"
        },
        "date": 1728423750187,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12541653845553408,
            "unit": "iter/sec",
            "range": "stddev: 0.06930791415987063",
            "extra": "mean: 7.973430078000007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17898256782352498,
            "unit": "iter/sec",
            "range": "stddev: 0.044886296846264544",
            "extra": "mean: 5.587136290200005 sec\nrounds: 5"
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
            "email": "marlon.james@gmail.com",
            "name": "Marlon James",
            "username": "marlonjames"
          },
          "distinct": true,
          "id": "e911807e979aff58b374a27745b27fdf496c3463",
          "message": "Rename some things in the scheduler\n\n* Tasks that are waiting on Triggers are \"pending\"\n* Tasks that are run are \"resumed\"\n* Tasks that are queued up to be resumed are \"scheduled\"",
          "timestamp": "2024-10-08T15:25:43-07:00",
          "tree_id": "fff20af32b7a542de524892b41b6d07a7c2c5956",
          "url": "https://github.com/cocotb/cocotb/commit/e911807e979aff58b374a27745b27fdf496c3463"
        },
        "date": 1728426559161,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12508141310899204,
            "unit": "iter/sec",
            "range": "stddev: 0.035428834676381804",
            "extra": "mean: 7.994792952399979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17785424344154277,
            "unit": "iter/sec",
            "range": "stddev: 0.0462383650476846",
            "extra": "mean: 5.622581618800007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c5e7f0b9384097889f72080cf264bca7e040d93a",
          "message": "Merge RTL_LIBRARY and TOPLEVEL_LIBRARY",
          "timestamp": "2024-10-09T10:10:38-06:00",
          "tree_id": "a07690c3502489a73e9b5313bb1081fcfa7c7324",
          "url": "https://github.com/cocotb/cocotb/commit/c5e7f0b9384097889f72080cf264bca7e040d93a"
        },
        "date": 1728490487388,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12524527499544716,
            "unit": "iter/sec",
            "range": "stddev: 0.028076387779037048",
            "extra": "mean: 7.98433314179997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1784551791456672,
            "unit": "iter/sec",
            "range": "stddev: 0.029428979160800874",
            "extra": "mean: 5.603647956800023 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0c400bd2e390c143c13c5fc7b2ce5d45b87a36c4",
          "message": "Fix toplevel discovery in Questa and Modelsim",
          "timestamp": "2024-10-09T11:05:03-06:00",
          "tree_id": "c6202950d9f62b83c81490d4cc5cf31b8a44a36d",
          "url": "https://github.com/cocotb/cocotb/commit/0c400bd2e390c143c13c5fc7b2ce5d45b87a36c4"
        },
        "date": 1728493722248,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12498498909970869,
            "unit": "iter/sec",
            "range": "stddev: 0.06993485493004897",
            "extra": "mean: 8.000960812999988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17897834669640103,
            "unit": "iter/sec",
            "range": "stddev: 0.056876217531361344",
            "extra": "mean: 5.587268060400004 sec\nrounds: 5"
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
          "id": "17b3f6fb9de54728d0b08d29024990439c862cb9",
          "message": "Prevent transitions from ReadOnly to ReadWrite or ReadOnly (#4208)",
          "timestamp": "2024-10-09T11:54:43-06:00",
          "tree_id": "12bf87bbe003589d8bb499bb78bdb0beff9c7d8a",
          "url": "https://github.com/cocotb/cocotb/commit/17b3f6fb9de54728d0b08d29024990439c862cb9"
        },
        "date": 1728496707875,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12597574570207676,
            "unit": "iter/sec",
            "range": "stddev: 0.02357202617494319",
            "extra": "mean: 7.938035964200009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17916506798408136,
            "unit": "iter/sec",
            "range": "stddev: 0.04548202141095872",
            "extra": "mean: 5.581445151399987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31325319+dolphingarlic@users.noreply.github.com",
            "name": "Andi Qu",
            "username": "dolphingarlic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa3e92c1a494e6a314f649b0732a74022d9a77a6",
          "message": "Make `test_3316` run but expect a fail when `--timing` is not set (#4204)",
          "timestamp": "2024-10-09T18:44:34-06:00",
          "tree_id": "1bf7ef46f4d31475b278d20aaccc77329e507ce3",
          "url": "https://github.com/cocotb/cocotb/commit/fa3e92c1a494e6a314f649b0732a74022d9a77a6"
        },
        "date": 1728521287074,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1266054723888055,
            "unit": "iter/sec",
            "range": "stddev: 0.04546904344469785",
            "extra": "mean: 7.898552733400015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17887807260085675,
            "unit": "iter/sec",
            "range": "stddev: 0.031000292551715252",
            "extra": "mean: 5.590400128200008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b2a3ba491e87de1a5a299de1bfa358569b00034a",
          "message": "Remove unused and incorrect unreachable() impl",
          "timestamp": "2024-10-14T17:04:14-04:00",
          "tree_id": "fcea26d1081a44473d09ef2365ea4543a91d8af7",
          "url": "https://github.com/cocotb/cocotb/commit/b2a3ba491e87de1a5a299de1bfa358569b00034a"
        },
        "date": 1728940069906,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12504844195008263,
            "unit": "iter/sec",
            "range": "stddev: 0.02421863230906421",
            "extra": "mean: 7.996900916200014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17714231016445112,
            "unit": "iter/sec",
            "range": "stddev: 0.025950113943595563",
            "extra": "mean: 5.6451787214000095 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ebbed876556bf45eec88e311d9894906c761a640",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.10.07 → 2024.10.14](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.10.07...2024.10.14)",
          "timestamp": "2024-10-14T19:44:36-04:00",
          "tree_id": "62dd09ae2e552365f56c94a2820f65669def5a35",
          "url": "https://github.com/cocotb/cocotb/commit/ebbed876556bf45eec88e311d9894906c761a640"
        },
        "date": 1728949687780,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12555265276725883,
            "unit": "iter/sec",
            "range": "stddev: 0.06490492314064251",
            "extra": "mean: 7.964785912199988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1791877675459568,
            "unit": "iter/sec",
            "range": "stddev: 0.036859225669989795",
            "extra": "mean: 5.580738092199999 sec\nrounds: 5"
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
          "id": "8e2f1dae62c3bf541aa12299d007498f56f7f653",
          "message": "Fix link to contributing.html in docs (#4226)\n\nReported in https://github.com/cocotb/cocotb/pull/4225#issue-2595051231",
          "timestamp": "2024-10-17T21:10:10+02:00",
          "tree_id": "e555ac26aced9a272ee4a40ec7dc74419edcc723",
          "url": "https://github.com/cocotb/cocotb/commit/8e2f1dae62c3bf541aa12299d007498f56f7f653"
        },
        "date": 1729192434519,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12428601000098001,
            "unit": "iter/sec",
            "range": "stddev: 0.07173026428581099",
            "extra": "mean: 8.04595786760002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17794275053588338,
            "unit": "iter/sec",
            "range": "stddev: 0.03692623698193188",
            "extra": "mean: 5.619784998199987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d379228a99e7e88ca6f8df7b1624250c0245a98e",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.6.9 → v0.7.0](https://github.com/astral-sh/ruff-pre-commit/compare/v0.6.9...v0.7.0)\n- [github.com/pre-commit/mirrors-clang-format: v19.1.1 → v19.1.2](https://github.com/pre-commit/mirrors-clang-format/compare/v19.1.1...v19.1.2)",
          "timestamp": "2024-10-22T10:27:53-05:00",
          "tree_id": "9a6976a58b1c0d8da55fe7501875e9964fff2721",
          "url": "https://github.com/cocotb/cocotb/commit/d379228a99e7e88ca6f8df7b1624250c0245a98e"
        },
        "date": 1729611097510,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12361170879576727,
            "unit": "iter/sec",
            "range": "stddev: 0.06631632179453502",
            "extra": "mean: 8.089848524399997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17597002628550423,
            "unit": "iter/sec",
            "range": "stddev: 0.0709072797944274",
            "extra": "mean: 5.682785989799993 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "9f854e9097b8364600569812e48c6c395f7556f7",
          "message": "Bump MacOS Github CI runs to use macos-13 environment",
          "timestamp": "2024-10-22T14:32:03-05:00",
          "tree_id": "a39bd98ccfc70e6493b4f2ee4551b1492902e22b",
          "url": "https://github.com/cocotb/cocotb/commit/9f854e9097b8364600569812e48c6c395f7556f7"
        },
        "date": 1729625741867,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12592667203380872,
            "unit": "iter/sec",
            "range": "stddev: 0.03187987400860166",
            "extra": "mean: 7.941129419600008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17943890192359982,
            "unit": "iter/sec",
            "range": "stddev: 0.028443835806165788",
            "extra": "mean: 5.57292754959999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "1ff21da1192933123a59502de8baca2a2c983c6c",
          "message": "Update test_fatal test to reference correct issue",
          "timestamp": "2024-10-23T09:24:54-06:00",
          "tree_id": "bc4a87d513fa2c9d208946c617adfb72703d76e2",
          "url": "https://github.com/cocotb/cocotb/commit/1ff21da1192933123a59502de8baca2a2c983c6c"
        },
        "date": 1729697316220,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12522647642484255,
            "unit": "iter/sec",
            "range": "stddev: 0.06747808350671547",
            "extra": "mean: 7.98553172259999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.18052171287123803,
            "unit": "iter/sec",
            "range": "stddev: 0.030979061657212432",
            "extra": "mean: 5.5394998423999935 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f8b64e0d109eda2b230e641056ae7d49e0b8d08b",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.7.0 → v0.7.1](https://github.com/astral-sh/ruff-pre-commit/compare/v0.7.0...v0.7.1)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.10.14 → 2024.10.21](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.10.14...2024.10.21)",
          "timestamp": "2024-10-28T20:36:18-06:00",
          "tree_id": "e93aa27abcf00deb3b019e1c5b317dd3c167b743",
          "url": "https://github.com/cocotb/cocotb/commit/f8b64e0d109eda2b230e641056ae7d49e0b8d08b"
        },
        "date": 1730169598807,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12671660990263087,
            "unit": "iter/sec",
            "range": "stddev: 0.01670250435839043",
            "extra": "mean: 7.891625263399964 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17815450103061756,
            "unit": "iter/sec",
            "range": "stddev: 0.05973226472500949",
            "extra": "mean: 5.613105446199984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte@hudson-trading.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "51f7f82337cd5a493c79a1eca33ff55b5323e712",
          "message": "add -Werror=shadow",
          "timestamp": "2024-10-29T09:47:29+01:00",
          "tree_id": "46c0be736914dbbdcbe4c4055151f60c3046aa48",
          "url": "https://github.com/cocotb/cocotb/commit/51f7f82337cd5a493c79a1eca33ff55b5323e712"
        },
        "date": 1730191870584,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1250731856803277,
            "unit": "iter/sec",
            "range": "stddev: 0.026912977987380685",
            "extra": "mean: 7.995318857199993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17884497380479866,
            "unit": "iter/sec",
            "range": "stddev: 0.04972460764810101",
            "extra": "mean: 5.591434742199999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31325319+dolphingarlic@users.noreply.github.com",
            "name": "Andi Qu",
            "username": "dolphingarlic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a24a292d02b8039c92f42aba03ab22cac054ab9",
          "message": "Make VHPI detect null ranges correctly (#4212)",
          "timestamp": "2024-10-30T09:32:37-06:00",
          "tree_id": "0c1694c64da3fc934eb464350008104400feb00c",
          "url": "https://github.com/cocotb/cocotb/commit/0a24a292d02b8039c92f42aba03ab22cac054ab9"
        },
        "date": 1730302579838,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12435044371236958,
            "unit": "iter/sec",
            "range": "stddev: 0.025328949219167392",
            "extra": "mean: 8.041788755599963 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1786554867691427,
            "unit": "iter/sec",
            "range": "stddev: 0.04190598164448537",
            "extra": "mean: 5.59736517519998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte@hudson-trading.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f5502426cee39a35a38ba76a7a80d4fbf9e08a5",
          "message": "Vpi: error on null string pointers (#4239)",
          "timestamp": "2024-10-30T09:33:59-06:00",
          "tree_id": "ae68ea7560790b92d341966a98a009bbb332f029",
          "url": "https://github.com/cocotb/cocotb/commit/9f5502426cee39a35a38ba76a7a80d4fbf9e08a5"
        },
        "date": 1730302839077,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12387312023287923,
            "unit": "iter/sec",
            "range": "stddev: 0.05843881186989257",
            "extra": "mean: 8.072776387000005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17853838140396688,
            "unit": "iter/sec",
            "range": "stddev: 0.03543751065711259",
            "extra": "mean: 5.601036551000016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte@hudson-trading.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ccabff3f033fdbaf18cf9ab309bcd70d451ae9b",
          "message": "Vpi: remove vpiPort from iteration (#4240)",
          "timestamp": "2024-10-30T09:36:25-06:00",
          "tree_id": "019afc5207fb705be261c18b724c40df8829afc1",
          "url": "https://github.com/cocotb/cocotb/commit/9ccabff3f033fdbaf18cf9ab309bcd70d451ae9b"
        },
        "date": 1730302863270,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12447047051128701,
            "unit": "iter/sec",
            "range": "stddev: 0.061970097333844155",
            "extra": "mean: 8.034034063600007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17692044503521184,
            "unit": "iter/sec",
            "range": "stddev: 0.03029112840245926",
            "extra": "mean: 5.652257995399987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilberto@hudson-trading.com",
            "name": "gilbertoabram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ee407d2cd8cb336423b55cd78e7ab555e41d5f7",
          "message": "Exit cleanly on HDL errors in verilator sims. (#4235)",
          "timestamp": "2024-10-31T07:32:34-06:00",
          "tree_id": "44223ae2ad31add708f02cb0b9a3ea0e812c1369",
          "url": "https://github.com/cocotb/cocotb/commit/4ee407d2cd8cb336423b55cd78e7ab555e41d5f7"
        },
        "date": 1730381777253,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12487564153717588,
            "unit": "iter/sec",
            "range": "stddev: 0.10056134475060759",
            "extra": "mean: 8.00796686760001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17903542186044302,
            "unit": "iter/sec",
            "range": "stddev: 0.04379848674554958",
            "extra": "mean: 5.58548688080001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anolte@hudson-trading.com",
            "name": "Andrew Nolte",
            "username": "AndrewNolte"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d23e43b36db10007904f1caed973cd7217e754cd",
          "message": "Add stacklevel option to TestFactory.generate_tests() (#4241)",
          "timestamp": "2024-10-31T07:32:57-06:00",
          "tree_id": "5c032fc46b843837652e5f146acd0d6072b6fbb6",
          "url": "https://github.com/cocotb/cocotb/commit/d23e43b36db10007904f1caed973cd7217e754cd"
        },
        "date": 1730382002894,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12135322909945583,
            "unit": "iter/sec",
            "range": "stddev: 0.047751165119209384",
            "extra": "mean: 8.240407012000015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17572967772527887,
            "unit": "iter/sec",
            "range": "stddev: 0.059681501827849516",
            "extra": "mean: 5.6905584357999945 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "f1fb52fa6b3069a18b3d076709da799608640c87",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.7.1 → v0.7.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.7.1...v0.7.2)\n- [github.com/pre-commit/mirrors-clang-format: v19.1.2 → v19.1.3](https://github.com/pre-commit/mirrors-clang-format/compare/v19.1.2...v19.1.3)",
          "timestamp": "2024-11-05T22:55:50+01:00",
          "tree_id": "051589cbb9fe71c62a1e8dd9c7fade37cd0b6e6a",
          "url": "https://github.com/cocotb/cocotb/commit/f1fb52fa6b3069a18b3d076709da799608640c87"
        },
        "date": 1730843969448,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12389939862199287,
            "unit": "iter/sec",
            "range": "stddev: 0.11916121768408741",
            "extra": "mean: 8.071064195000009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1782416856797953,
            "unit": "iter/sec",
            "range": "stddev: 0.03979298103852157",
            "extra": "mean: 5.610359867199998 sec\nrounds: 5"
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
          "id": "f28fca1cf8589fa6088dbb21286874dc6953052a",
          "message": "Verilator build parallelism (#4257)\n\nCo-authored-by: acm289 <acm289@cornell.edu>",
          "timestamp": "2024-11-08T21:04:45-07:00",
          "tree_id": "3144987643b43b50b4e561e3557abbb21557dc69",
          "url": "https://github.com/cocotb/cocotb/commit/f28fca1cf8589fa6088dbb21286874dc6953052a"
        },
        "date": 1731125299245,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1255204199401064,
            "unit": "iter/sec",
            "range": "stddev: 0.043566136031639786",
            "extra": "mean: 7.966831217400022 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1768831543981234,
            "unit": "iter/sec",
            "range": "stddev: 0.03265417578064566",
            "extra": "mean: 5.653449608599976 sec\nrounds: 5"
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
          "id": "95b4421488bab48f4fc68f5d23aac2c716ba98d8",
          "message": "Add `__index__` to LogicArray to support integer string casting (#4244)\n\nFor supporting integer string casting: hex(), bin(), etc.",
          "timestamp": "2024-11-11T13:21:35-07:00",
          "tree_id": "942419fedbed8f06dcfdf8040bc124e344bfc982",
          "url": "https://github.com/cocotb/cocotb/commit/95b4421488bab48f4fc68f5d23aac2c716ba98d8"
        },
        "date": 1731356764613,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12420263330606149,
            "unit": "iter/sec",
            "range": "stddev: 0.07808945712674623",
            "extra": "mean: 8.051359084599994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17501496432637179,
            "unit": "iter/sec",
            "range": "stddev: 0.07524169932872597",
            "extra": "mean: 5.713797124999997 sec\nrounds: 5"
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
          "id": "2f635547f4d69d504c857745fa32a985e6915f0c",
          "message": "Fix lint error in logic.py",
          "timestamp": "2024-11-11T23:05:06-07:00",
          "tree_id": "4c485feaf93de7db48778bbbd729ff45212d69e1",
          "url": "https://github.com/cocotb/cocotb/commit/2f635547f4d69d504c857745fa32a985e6915f0c"
        },
        "date": 1731391729003,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12565127664893527,
            "unit": "iter/sec",
            "range": "stddev: 0.05818232130119745",
            "extra": "mean: 7.9585343393999946 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17824198356944515,
            "unit": "iter/sec",
            "range": "stddev: 0.04603840241872571",
            "extra": "mean: 5.610350490799988 sec\nrounds: 5"
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
          "id": "a220e176b917c678ccac300ca092ca451802f6dc",
          "message": "Use Python 3.12 to build docs at RTD (#4265)",
          "timestamp": "2024-11-13T00:08:58+01:00",
          "tree_id": "b0f8308f696c92d606a9da8361efcbc98d794963",
          "url": "https://github.com/cocotb/cocotb/commit/a220e176b917c678ccac300ca092ca451802f6dc"
        },
        "date": 1731453164047,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.12566660432414278,
            "unit": "iter/sec",
            "range": "stddev: 0.05519281884893388",
            "extra": "mean: 7.9575636294000045 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.17761456377340323,
            "unit": "iter/sec",
            "range": "stddev: 0.037905987130891675",
            "extra": "mean: 5.630168938599979 sec\nrounds: 5"
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
          "id": "6ee80053b0b3ab910197c0f3f64b57eedcb58a35",
          "message": "Use Python 3.9 as the CI base version (3.8 is EOL) (#4264)",
          "timestamp": "2024-11-13T00:09:31+01:00",
          "tree_id": "2669c367287977b83f761f4b9b0f13182c48afb1",
          "url": "https://github.com/cocotb/cocotb/commit/6ee80053b0b3ab910197c0f3f64b57eedcb58a35"
        },
        "date": 1731453380377,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13704215433035527,
            "unit": "iter/sec",
            "range": "stddev: 0.09557219662843956",
            "extra": "mean: 7.2970248087999945 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20244476928850805,
            "unit": "iter/sec",
            "range": "stddev: 0.041151921478667024",
            "extra": "mean: 4.9396188576000215 sec\nrounds: 5"
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
          "id": "0380184b585072a6fcb66ca615c92f27a4be4592",
          "message": "Move to new version of Verilator in CI (#4254)",
          "timestamp": "2024-11-12T16:40:37-07:00",
          "tree_id": "ea6de07f5eb0644c4b85dc99ed760217e41eccc7",
          "url": "https://github.com/cocotb/cocotb/commit/0380184b585072a6fcb66ca615c92f27a4be4592"
        },
        "date": 1731455046606,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1383184928057112,
            "unit": "iter/sec",
            "range": "stddev: 0.04800487808473807",
            "extra": "mean: 7.229691270600005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2024137443415301,
            "unit": "iter/sec",
            "range": "stddev: 0.03603384652304162",
            "extra": "mean: 4.940375977200011 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77928195+jacob720@users.noreply.github.com",
            "name": "jacob720",
            "username": "jacob720"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6649d76692ef11cd6ecb905fca5d8133128c4a1a",
          "message": "Allow user to specify elaboration arguments for NVC simulator (#4267)\n\nCo-authored-by: Jacob Williamson <hvj62882@pc0132.cs.diamond.ac.uk>",
          "timestamp": "2024-11-18T10:15:40-07:00",
          "tree_id": "96c72e876d50273450ffd1f9b68bb14a9649adb7",
          "url": "https://github.com/cocotb/cocotb/commit/6649d76692ef11cd6ecb905fca5d8133128c4a1a"
        },
        "date": 1731950347545,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13824879757822145,
            "unit": "iter/sec",
            "range": "stddev: 0.09712909919817404",
            "extra": "mean: 7.233335967599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20317774266831132,
            "unit": "iter/sec",
            "range": "stddev: 0.04457898416072447",
            "extra": "mean: 4.921798947399987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "6987421b478bca7a5ba95bdac05df0dcc9175b5d",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.7.3 → v0.7.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.7.3...v0.7.4)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.11.11 → 2024.11.18](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.11.11...2024.11.18)",
          "timestamp": "2024-11-18T17:43:57-07:00",
          "tree_id": "5d00881c3f94817c9e2a3b77ebbf1ba2879dee09",
          "url": "https://github.com/cocotb/cocotb/commit/6987421b478bca7a5ba95bdac05df0dcc9175b5d"
        },
        "date": 1731977267760,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1374447941311872,
            "unit": "iter/sec",
            "range": "stddev: 0.03304211088158792",
            "extra": "mean: 7.2756484254000044 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2021881006855299,
            "unit": "iter/sec",
            "range": "stddev: 0.027620223305359435",
            "extra": "mean: 4.945889479200036 sec\nrounds: 5"
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
          "id": "1661fa86657bdfb93fc658515b5631935b689159",
          "message": "Bump codecov/codecov-action from 4 to 5\n\nBumps [codecov/codecov-action](https://github.com/codecov/codecov-action) from 4 to 5.\n- [Release notes](https://github.com/codecov/codecov-action/releases)\n- [Changelog](https://github.com/codecov/codecov-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/codecov/codecov-action/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: codecov/codecov-action\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-11-21T06:41:53-07:00",
          "tree_id": "49e9389e1337e48486efea2fbdb3c0db86233a35",
          "url": "https://github.com/cocotb/cocotb/commit/1661fa86657bdfb93fc658515b5631935b689159"
        },
        "date": 1732196732121,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13809419083400482,
            "unit": "iter/sec",
            "range": "stddev: 0.03430197355808485",
            "extra": "mean: 7.24143422660004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20086275977815746,
            "unit": "iter/sec",
            "range": "stddev: 0.05030401744059823",
            "extra": "mean: 4.9785236502000085 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "81fc46460ea7aaf86e0aae0b992e66c215e7a201",
          "message": "Manually fix up UP031 errors",
          "timestamp": "2024-11-26T13:56:26-07:00",
          "tree_id": "266901ed4b679e002d45b5d3589af7c83bf4243e",
          "url": "https://github.com/cocotb/cocotb/commit/81fc46460ea7aaf86e0aae0b992e66c215e7a201"
        },
        "date": 1732654795864,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13684685875864608,
            "unit": "iter/sec",
            "range": "stddev: 0.06064961453497624",
            "extra": "mean: 7.307438468599992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20153749542017024,
            "unit": "iter/sec",
            "range": "stddev: 0.027016240288567146",
            "extra": "mean: 4.961855846800001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ipburbank@users.noreply.github.com",
            "name": "Istvan Burbank",
            "username": "ipburbank"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4735dd380ac92e9dbecd950c020e47dedf6983d1",
          "message": "Vcs `-debug_access+all`\n\n`-memcbk` prevented unpacked arrays, rams, etc from being dumped to waves.",
          "timestamp": "2024-11-26T16:04:04-07:00",
          "tree_id": "6efcaae746b5214a9af847337476f0a3d3c2af70",
          "url": "https://github.com/cocotb/cocotb/commit/4735dd380ac92e9dbecd950c020e47dedf6983d1"
        },
        "date": 1732662450761,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13816484081877878,
            "unit": "iter/sec",
            "range": "stddev: 0.02143334161414032",
            "extra": "mean: 7.2377313510000025 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2022934498117135,
            "unit": "iter/sec",
            "range": "stddev: 0.026430138096912904",
            "extra": "mean: 4.943313789600007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "760851e8d029c274fdd2202bcb8a062f8b4ea489",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.8.0 → v0.8.1](https://github.com/astral-sh/ruff-pre-commit/compare/v0.8.0...v0.8.1)\n- [github.com/henryiii/validate-pyproject-schema-store: 2024.11.22 → 2024.11.25](https://github.com/henryiii/validate-pyproject-schema-store/compare/2024.11.22...2024.11.25)",
          "timestamp": "2024-12-02T18:54:03-07:00",
          "tree_id": "ce7da3e2354cafa9680c53b5643f772462a4473f",
          "url": "https://github.com/cocotb/cocotb/commit/760851e8d029c274fdd2202bcb8a062f8b4ea489"
        },
        "date": 1733191053833,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13781911992445525,
            "unit": "iter/sec",
            "range": "stddev: 0.04452985079706303",
            "extra": "mean: 7.255887285799997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20333358559616443,
            "unit": "iter/sec",
            "range": "stddev: 0.022247377299519405",
            "extra": "mean: 4.918026685399991 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1810leo@gmail.com",
            "name": "TrAyZeN",
            "username": "TrAyZeN"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "28b53df48c8b710dda66b7baa30503f1b5aacfd0",
          "message": "Disable icarus waveform output when WAVES disabled\n\nWhen WAVES was disabled a waveform in the default format (vcd) was\nproduced. Now `-none` is passed to icarus to disable waveform output.",
          "timestamp": "2024-12-03T09:43:41-07:00",
          "tree_id": "f001c65adf4876e5d0437c6c637d6c6e4e3725fe",
          "url": "https://github.com/cocotb/cocotb/commit/28b53df48c8b710dda66b7baa30503f1b5aacfd0"
        },
        "date": 1733244434512,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1386119250093861,
            "unit": "iter/sec",
            "range": "stddev: 0.012097493223630991",
            "extra": "mean: 7.2143864961999835 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2007163864732906,
            "unit": "iter/sec",
            "range": "stddev: 0.04514691442190373",
            "extra": "mean: 4.982154260400011 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "klemmer@uni-bremen.de",
            "name": "Lucas Klemmer",
            "username": "LucasKl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5922e677c6255a31e590e69006993d3ceca3e308",
          "message": "Add Surfer to simulator support docs (#4294)",
          "timestamp": "2024-12-09T11:02:26-07:00",
          "tree_id": "675f3220ca5a8da06de60b47c77ad017ea353fe8",
          "url": "https://github.com/cocotb/cocotb/commit/5922e677c6255a31e590e69006993d3ceca3e308"
        },
        "date": 1733767565305,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13887593983393728,
            "unit": "iter/sec",
            "range": "stddev: 0.050058990684475196",
            "extra": "mean: 7.200671341600014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2009565689508565,
            "unit": "iter/sec",
            "range": "stddev: 0.009008053890620324",
            "extra": "mean: 4.976199609800005 sec\nrounds: 5"
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
          "id": "61d4f116cb70bfdb93ad04aa4c1b43f8636d1f4e",
          "message": "Disable bool cast on handles (#4296)\n\nIn 1.X some handles had __bool__ casts defined as `bool(handle.value)`.\r\nThis behavior is now changed and can cause silent failures. This\r\nprevents those suprises. Users should explicitly use `handle is not\r\nNone` check if they wish to check to see if a handle object is present\r\nin a variable or not; and should use `bool(handle.value)` checks for the\r\n1.X behavior.",
          "timestamp": "2024-12-09T14:57:42-07:00",
          "tree_id": "b03d15a4b41c92a71762f16a78474779e81426db",
          "url": "https://github.com/cocotb/cocotb/commit/61d4f116cb70bfdb93ad04aa4c1b43f8636d1f4e"
        },
        "date": 1733781674336,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1378106619789691,
            "unit": "iter/sec",
            "range": "stddev: 0.08056565597802551",
            "extra": "mean: 7.256332606199999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20067811380644643,
            "unit": "iter/sec",
            "range": "stddev: 0.015914321255445507",
            "extra": "mean: 4.983104440400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0407e7a89e332f60a1ea3ba1f95e5317d1aa864b",
          "message": "[pre-commit.ci] pre-commit autoupdate (#4297)\n\nupdates:\r\n- [github.com/astral-sh/ruff-pre-commit: v0.8.1 → v0.8.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.8.1...v0.8.2)\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-09T17:26:07-07:00",
          "tree_id": "166a4c94831486bda538423defde21d5f7297538",
          "url": "https://github.com/cocotb/cocotb/commit/0407e7a89e332f60a1ea3ba1f95e5317d1aa864b"
        },
        "date": 1733790570553,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13835741536934976,
            "unit": "iter/sec",
            "range": "stddev: 0.04412441139036437",
            "extra": "mean: 7.227657421399977 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20193571406744257,
            "unit": "iter/sec",
            "range": "stddev: 0.02141482296067238",
            "extra": "mean: 4.952071032199979 sec\nrounds: 5"
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
          "id": "74cf7d1e76e7e88aa13ee1e14a1cf4943dd7e875",
          "message": "Add back resolve x (#4253)\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2024-12-11T17:43:31-07:00",
          "tree_id": "57bc59a80c4ea977ea3d776ff83de4f97e266df9",
          "url": "https://github.com/cocotb/cocotb/commit/74cf7d1e76e7e88aa13ee1e14a1cf4943dd7e875"
        },
        "date": 1733964436536,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1396341310748042,
            "unit": "iter/sec",
            "range": "stddev: 0.03206829445024754",
            "extra": "mean: 7.161572835399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19845981483609276,
            "unit": "iter/sec",
            "range": "stddev: 0.02334806359491084",
            "extra": "mean: 5.038803451599994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "filipe.lains@gmail.com",
            "name": "Filipe Laíns 🇵🇸",
            "username": "FFY00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e23280df0eec08d71dd1c38faf71e33b7ffd49c7",
          "message": "gpi_embed: set the program name to PYTHON_BIN (#4293)\n\nSigned-off-by: Filipe Laíns <lains@riseup.net>\r\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2024-12-12T09:07:00-07:00",
          "tree_id": "59921c2b3404c89040df3c22af6f8b4b5ebacaa2",
          "url": "https://github.com/cocotb/cocotb/commit/e23280df0eec08d71dd1c38faf71e33b7ffd49c7"
        },
        "date": 1734019832565,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13799822791750477,
            "unit": "iter/sec",
            "range": "stddev: 0.05164658190562151",
            "extra": "mean: 7.246469864799996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19665090939244584,
            "unit": "iter/sec",
            "range": "stddev: 0.03473855743134852",
            "extra": "mean: 5.085153193999997 sec\nrounds: 5"
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
          "id": "c8ec8b2e110b3181a7b95dfe576a9467e82db502",
          "message": "VHPI: Support accessing 9-state values\n\nSupport, and test, accessing 9-state values (`std_ulogic`) when VHPI is\nused.\n\nDocument a bit more clearly what VPI on GHDL means for the end-user.",
          "timestamp": "2024-12-13T10:27:01+01:00",
          "tree_id": "463316d8a82891055a48f7240246102d48152f99",
          "url": "https://github.com/cocotb/cocotb/commit/c8ec8b2e110b3181a7b95dfe576a9467e82db502"
        },
        "date": 1734082229116,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13870052047488488,
            "unit": "iter/sec",
            "range": "stddev: 0.03731463468497206",
            "extra": "mean: 7.209778280399997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19820335422882854,
            "unit": "iter/sec",
            "range": "stddev: 0.02716261552962883",
            "extra": "mean: 5.045323293799993 sec\nrounds: 5"
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
          "id": "7ecbbc3c4f3ee0f26ef3a0d50d902bb3eaa9035b",
          "message": "Remove runner.check_results_file from documentation\n\nPR #4235 removed `check_results_file` from `runner.py` but left the\nreference to it in the documentation. Remove it from the docs as well.",
          "timestamp": "2024-12-14T09:47:54+01:00",
          "tree_id": "c2224804c10b16a8b11dc4e8b5795093c04e77c1",
          "url": "https://github.com/cocotb/cocotb/commit/7ecbbc3c4f3ee0f26ef3a0d50d902bb3eaa9035b"
        },
        "date": 1734166334275,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1387868217216008,
            "unit": "iter/sec",
            "range": "stddev: 0.06677497853674272",
            "extra": "mean: 7.205295053199995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19871490837450062,
            "unit": "iter/sec",
            "range": "stddev: 0.04016166649755289",
            "extra": "mean: 5.032335058199999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "73640421+Gophen@users.noreply.github.com",
            "name": "Gophen",
            "username": "Gophen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "708c3f32c4387682827b81b5e8d94339bffdeefa",
          "message": "Add robustness on as_tcl_value() function (#4225)\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2024-12-14T08:41:52-07:00",
          "tree_id": "e5e2dcb701ab7d43e242c4aba47036a0377076d2",
          "url": "https://github.com/cocotb/cocotb/commit/708c3f32c4387682827b81b5e8d94339bffdeefa"
        },
        "date": 1734191120379,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13913947961731793,
            "unit": "iter/sec",
            "range": "stddev: 0.0385291729405913",
            "extra": "mean: 7.18703277279999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19866473334661638,
            "unit": "iter/sec",
            "range": "stddev: 0.021564018224728438",
            "extra": "mean: 5.033606031399995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "dff7167bab3637f061dd81c43757a901c95cd6b4",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.8.2 → v0.8.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.8.2...v0.8.3)\n- [github.com/pre-commit/mirrors-clang-format: v19.1.4 → v19.1.5](https://github.com/pre-commit/mirrors-clang-format/compare/v19.1.4...v19.1.5)",
          "timestamp": "2024-12-17T08:29:18-07:00",
          "tree_id": "5519e45ada23b7408843bba1f238f18b481945b0",
          "url": "https://github.com/cocotb/cocotb/commit/dff7167bab3637f061dd81c43757a901c95cd6b4"
        },
        "date": 1734449591033,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1393133520450655,
            "unit": "iter/sec",
            "range": "stddev: 0.05472329305484631",
            "extra": "mean: 7.1780628727999956 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19820008760570654,
            "unit": "iter/sec",
            "range": "stddev: 0.05189139291818777",
            "extra": "mean: 5.045406448000017 sec\nrounds: 5"
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
          "id": "f5c243cb8babbb17d9286a3ddc213cbbb5c983c1",
          "message": "Cache calls to get_sim_time\n\nThis function is called on every logging call and Timer creation. It\nonly changes value whenever control is returned to the simulator. So we\ncache the call and invalidate whenever a GPITrigger fires.\n\nAlso tidied up some test in test_timing_triggers because they were\nfailing. Tests no longer assume fs precision and a couple out of date\ntests below are cleaned up.",
          "timestamp": "2024-12-18T13:31:47-07:00",
          "tree_id": "024425c083ad614431ee58b6b636c9444d4fbc07",
          "url": "https://github.com/cocotb/cocotb/commit/f5c243cb8babbb17d9286a3ddc213cbbb5c983c1"
        },
        "date": 1734554122366,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1403476536014033,
            "unit": "iter/sec",
            "range": "stddev: 0.03798506965783438",
            "extra": "mean: 7.125163651400021 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20049012656795345,
            "unit": "iter/sec",
            "range": "stddev: 0.03383440333593345",
            "extra": "mean: 4.987776790400017 sec\nrounds: 5"
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
          "id": "06782d85a49fd81a0dbb81ce42dd6ecc60a3b60d",
          "message": "Prevent writes during ReadOnly phase when COCOTB_TRUST_INERTIAL_WRITES (#4306)\n\nAlso tidies up some tests.",
          "timestamp": "2024-12-21T21:14:59-05:00",
          "tree_id": "7a68244024cb78f228ca2da4cfac9f3d80682c87",
          "url": "https://github.com/cocotb/cocotb/commit/06782d85a49fd81a0dbb81ce42dd6ecc60a3b60d"
        },
        "date": 1734833906848,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14000858884816422,
            "unit": "iter/sec",
            "range": "stddev: 0.04170884640236596",
            "extra": "mean: 7.142418963199998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1977725608076491,
            "unit": "iter/sec",
            "range": "stddev: 0.02476519600258804",
            "extra": "mean: 5.056313150400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f5d5ea51a20b85d1939912d0a0105d269de77f5a",
          "message": "Revert \"Cache calls to get_sim_time\"\n\nThis reverts commit f5c243cb8babbb17d9286a3ddc213cbbb5c983c1.\nFurther testing shows this actually slightly decreasess performance.",
          "timestamp": "2024-12-23T12:55:32-05:00",
          "tree_id": "9bf0ab5bd9e5aaf6effabc1afb8bef976ab35511",
          "url": "https://github.com/cocotb/cocotb/commit/f5d5ea51a20b85d1939912d0a0105d269de77f5a"
        },
        "date": 1734976738784,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13902225064392612,
            "unit": "iter/sec",
            "range": "stddev: 0.07013856419328066",
            "extra": "mean: 7.193093158600004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19767033929565175,
            "unit": "iter/sec",
            "range": "stddev: 0.01758413180888398",
            "extra": "mean: 5.0589279279999575 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d4aa1e1a0560a60daa401610db5211fb7c5bcf97",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.8.3 → v0.8.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.8.3...v0.8.4)",
          "timestamp": "2024-12-24T08:17:53-05:00",
          "tree_id": "ed3b1d688486280959e84d80eaa1f046838792c4",
          "url": "https://github.com/cocotb/cocotb/commit/d4aa1e1a0560a60daa401610db5211fb7c5bcf97"
        },
        "date": 1735046484980,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13871344717644946,
            "unit": "iter/sec",
            "range": "stddev: 0.013323976881102012",
            "extra": "mean: 7.209106401399981 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1970574093131822,
            "unit": "iter/sec",
            "range": "stddev: 0.09345840730861059",
            "extra": "mean: 5.0746632846000015 sec\nrounds: 5"
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
          "id": "78fd5c239614af113c28f88dc2c4f6ab083dce69",
          "message": "Remove unnecessary objects from VPI discovery (#3360)\n\nRemoved translation of syntactic elements like always, initial, and function blocks and modport defitions. `vpiRefObj` are aliases which require a `vpiActual` discovery to determine the underlying element. We will not translate those until we have that code in place.\n\nRemoved iteration over:\n* `vpiProcess`\n* `vpiModPath` (delay path)\n* `vpiTchk`\n* `vpiAttribute` (syntax)\n\nAdded translation of `vpiSwitch` which is a kind of primitive object like `vpiGate` and `vpiPrimTerm` for sake of completeness.\n\nCloses #3353",
          "timestamp": "2024-12-27T11:33:15Z",
          "tree_id": "1f715125493bf4ed51262ee81d3cc8a3e13cb36c",
          "url": "https://github.com/cocotb/cocotb/commit/78fd5c239614af113c28f88dc2c4f6ab083dce69"
        },
        "date": 1735299406546,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1399184938092531,
            "unit": "iter/sec",
            "range": "stddev: 0.026736979475066147",
            "extra": "mean: 7.147018044399988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19858657402399266,
            "unit": "iter/sec",
            "range": "stddev: 0.015639259177053614",
            "extra": "mean: 5.035587148399986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5621fe6d1e617bc40f18b169b70e8b109498c977",
          "message": "Fix issues with expect_error",
          "timestamp": "2024-12-27T10:06:34-05:00",
          "tree_id": "0cd1af5acdfe9c44148afdae1279a7754d23affa",
          "url": "https://github.com/cocotb/cocotb/commit/5621fe6d1e617bc40f18b169b70e8b109498c977"
        },
        "date": 1735312211143,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13998239120850112,
            "unit": "iter/sec",
            "range": "stddev: 0.04744205341653536",
            "extra": "mean: 7.143755663599995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1975400194565351,
            "unit": "iter/sec",
            "range": "stddev: 0.03214021911064392",
            "extra": "mean: 5.062265371599961 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "01b4848d28d2dd36be84fede88d79bf965341682",
          "message": "Fix package build errors",
          "timestamp": "2024-12-27T16:47:31-05:00",
          "tree_id": "d36d4218f809d79c0077c4203b875fb530d828d3",
          "url": "https://github.com/cocotb/cocotb/commit/01b4848d28d2dd36be84fede88d79bf965341682"
        },
        "date": 1735336263682,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1404186356508398,
            "unit": "iter/sec",
            "range": "stddev: 0.026032614076252125",
            "extra": "mean: 7.121561859399958 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1978660878878873,
            "unit": "iter/sec",
            "range": "stddev: 0.0337571383584932",
            "extra": "mean: 5.053923138999994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "51fbdecaaa930112dd5a1027c341967619ae7a14",
          "message": "Reintroduce and deprecate Event.data",
          "timestamp": "2024-12-27T17:48:45-05:00",
          "tree_id": "003cbe8633b949a305f94fd849c36d1b8f2b7de5",
          "url": "https://github.com/cocotb/cocotb/commit/51fbdecaaa930112dd5a1027c341967619ae7a14"
        },
        "date": 1735339933851,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13900693524638302,
            "unit": "iter/sec",
            "range": "stddev: 0.09539569562816215",
            "extra": "mean: 7.1938856736000165 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19808238160964847,
            "unit": "iter/sec",
            "range": "stddev: 0.03147799916462419",
            "extra": "mean: 5.048404567199986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "themperek@users.noreply.github.com",
            "name": "Tomasz Hemperek",
            "username": "themperek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2eda2bd75ed30153225b98ed183f8131f22c8ad0",
          "message": "Correct LANGUAGE in simple_dff (#4329)",
          "timestamp": "2025-01-02T18:48:51+01:00",
          "tree_id": "ca8d6aae4b8b1c6df463147f4f4129b2743f4762",
          "url": "https://github.com/cocotb/cocotb/commit/2eda2bd75ed30153225b98ed183f8131f22c8ad0"
        },
        "date": 1735840354575,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13746567602523926,
            "unit": "iter/sec",
            "range": "stddev: 0.028298470631759023",
            "extra": "mean: 7.274543209000012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1972067061874588,
            "unit": "iter/sec",
            "range": "stddev: 0.03736875838560813",
            "extra": "mean: 5.07082147120002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5237f9de3620aaf64e36d2e76960b9f7121bea96",
          "message": "Make ReadWrite, ReadOnly, and NextTimeStep regular singletons\n\nThe use of ParameterizedSingletons in these class was overkill. This\nmakes the lifetime of these objects the full program. It should slightly\nincrease performance as we don't have to do a weakref cache lookup.",
          "timestamp": "2025-01-02T22:55:09-07:00",
          "tree_id": "e66b7e7b0168d7a6cb5848d99ae95ab6c27caf49",
          "url": "https://github.com/cocotb/cocotb/commit/5237f9de3620aaf64e36d2e76960b9f7121bea96"
        },
        "date": 1735883911640,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13798910589421506,
            "unit": "iter/sec",
            "range": "stddev: 0.058675027213554366",
            "extra": "mean: 7.246948906 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.198809053640691,
            "unit": "iter/sec",
            "range": "stddev: 0.03089767769218773",
            "extra": "mean: 5.029952015200007 sec\nrounds: 5"
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
          "id": "31a96ac07ee66603330435f496c482662c060808",
          "message": "Fix with_timeout tests",
          "timestamp": "2025-01-04T18:25:00-07:00",
          "tree_id": "8f4940bdce0d9058938f9c1123a6f1ee1f6e4711",
          "url": "https://github.com/cocotb/cocotb/commit/31a96ac07ee66603330435f496c482662c060808"
        },
        "date": 1736040512712,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13813925884891937,
            "unit": "iter/sec",
            "range": "stddev: 0.03993606720425743",
            "extra": "mean: 7.239071704400004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19691109989667083,
            "unit": "iter/sec",
            "range": "stddev: 0.019923073837779966",
            "extra": "mean: 5.0784338746000115 sec\nrounds: 5"
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
          "id": "ae0a039cd9e865b785724c113d6510d8dbe629e7",
          "message": "Check results file for failures in Makefile flow",
          "timestamp": "2025-01-05T08:11:40-07:00",
          "tree_id": "255bc99a80f87f4043dd4140507ed96f94ef6e8b",
          "url": "https://github.com/cocotb/cocotb/commit/ae0a039cd9e865b785724c113d6510d8dbe629e7"
        },
        "date": 1736090106824,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13741675579585222,
            "unit": "iter/sec",
            "range": "stddev: 0.0698440475697629",
            "extra": "mean: 7.27713293920001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19652769730315253,
            "unit": "iter/sec",
            "range": "stddev: 0.04886496794948994",
            "extra": "mean: 5.088341306199993 sec\nrounds: 5"
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
          "id": "7c30cf52adbaa3f94776e0fb3aa4fbfcd2fc839a",
          "message": "Update Doxyfile",
          "timestamp": "2025-01-05T21:23:49-07:00",
          "tree_id": "c6e1ea43acbea49ba7d0e4116bfcb98879d0bf3c",
          "url": "https://github.com/cocotb/cocotb/commit/7c30cf52adbaa3f94776e0fb3aa4fbfcd2fc839a"
        },
        "date": 1736137634104,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13661344288034896,
            "unit": "iter/sec",
            "range": "stddev: 0.07072828573108732",
            "extra": "mean: 7.319923858999999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19680667817236408,
            "unit": "iter/sec",
            "range": "stddev: 0.04777719983481802",
            "extra": "mean: 5.0811283910000045 sec\nrounds: 5"
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
          "id": "a95438c538af13a66853de2ac244b5d136e90356",
          "message": "Move COCOTB_TRUST_INERTIAL_WRITES inside ifdef guard in makefile",
          "timestamp": "2025-01-06T12:52:55-07:00",
          "tree_id": "9dfdc64df60c17769cc67ce4b232c822b34d865b",
          "url": "https://github.com/cocotb/cocotb/commit/a95438c538af13a66853de2ac244b5d136e90356"
        },
        "date": 1736193383205,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13825783137986147,
            "unit": "iter/sec",
            "range": "stddev: 0.026679459461872095",
            "extra": "mean: 7.23286333960001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19790707402461677,
            "unit": "iter/sec",
            "range": "stddev: 0.07082782853979588",
            "extra": "mean: 5.052876482199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3110c6cd207f6479bc73ca13adb96f604b63d445",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.8.4 → v0.8.6](https://github.com/astral-sh/ruff-pre-commit/compare/v0.8.4...v0.8.6)\n- [github.com/pre-commit/mirrors-clang-format: v19.1.5 → v19.1.6](https://github.com/pre-commit/mirrors-clang-format/compare/v19.1.5...v19.1.6)",
          "timestamp": "2025-01-06T19:35:28-07:00",
          "tree_id": "8ab7f409786f8d94150d68ebc9c5da3d64bedd2c",
          "url": "https://github.com/cocotb/cocotb/commit/3110c6cd207f6479bc73ca13adb96f604b63d445"
        },
        "date": 1736217537815,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13728004204465508,
            "unit": "iter/sec",
            "range": "stddev: 0.13110737975203995",
            "extra": "mean: 7.2843800534000085 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19719896416588645,
            "unit": "iter/sec",
            "range": "stddev: 0.02151855741884467",
            "extra": "mean: 5.071020551399988 sec\nrounds: 5"
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
          "id": "1b42a7cc8655b14134c7e283df22feaa83e07aa5",
          "message": "Allow KeyboardInterrupt and SystemExit to bubble up\n\nCurrent these are \"handled\" as part of the Task and Test classes, but in\nboth cases what's meant is \"die now\", not \"handle me and maybe keep\nrunning tests\".\n\nasyncio follows the same approach by special casing these two exception\ntypes.",
          "timestamp": "2025-01-06T19:44:24-07:00",
          "tree_id": "04a913c36bb3c262621fe1e7370fbaedbd5a4d8b",
          "url": "https://github.com/cocotb/cocotb/commit/1b42a7cc8655b14134c7e283df22feaa83e07aa5"
        },
        "date": 1736218066145,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13865464924858742,
            "unit": "iter/sec",
            "range": "stddev: 0.07145257808554209",
            "extra": "mean: 7.212163496999994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19916790376019286,
            "unit": "iter/sec",
            "range": "stddev: 0.019490582827477433",
            "extra": "mean: 5.020889315599993 sec\nrounds: 5"
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
          "id": "07f385fcd9a3cec531edd04ccd88e69a295bd182",
          "message": "Fixed typing in several modules",
          "timestamp": "2025-01-07T19:54:17-07:00",
          "tree_id": "15b4334d0ead9d5703de71f2269b5f16aa97791b",
          "url": "https://github.com/cocotb/cocotb/commit/07f385fcd9a3cec531edd04ccd88e69a295bd182"
        },
        "date": 1736305078951,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13809740553585953,
            "unit": "iter/sec",
            "range": "stddev: 0.007617256080247641",
            "extra": "mean: 7.241265656799987 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.1946657967643989,
            "unit": "iter/sec",
            "range": "stddev: 0.03468266632752187",
            "extra": "mean: 5.137009257000011 sec\nrounds: 5"
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
          "id": "fc5fe77434a4825e1cda989f8b633fb19083f259",
          "message": "Refactor `Join` into `TaskComplete` (#4341)\n\n* Refactor Join trigger into new TaskComplete trigger\r\n\r\nSince `Join(task)` and `task.join()` behave the same as `task` when\r\nusing the resulting value, these were updated to simply return the\r\nTask. This allows the Join trigger to work like all other triggers by\r\nreturning itself when awaited.\r\n\r\nThe Join trigger  was renamed to TaskComplete and is now avaiable via\r\nthe `Task.complete` attribute.\r\n\r\nStoring the TaskComplete trigger on the Task means we don't need to use\r\nParameterizedSingletonMetaclass to associate their lifetimes and\r\npreserve uniqueness.",
          "timestamp": "2025-01-08T12:46:25-07:00",
          "tree_id": "ef459337cfca90453383b57b26d91f8e7446e3fa",
          "url": "https://github.com/cocotb/cocotb/commit/fc5fe77434a4825e1cda989f8b633fb19083f259"
        },
        "date": 1736365804433,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13787310263159908,
            "unit": "iter/sec",
            "range": "stddev: 0.03355609060786357",
            "extra": "mean: 7.253046322400019 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.19889406837997492,
            "unit": "iter/sec",
            "range": "stddev: 0.02749803408940545",
            "extra": "mean: 5.027802026200004 sec\nrounds: 5"
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
          "id": "13a6736e4792f31c0993fb91c399cdd54de71163",
          "message": "Separate logic objects into scalars and arrays (#4318)\n\n* Combine GPI_NET and GPI_REGISTER into GPI_LOGIC\r\n* Separate GPI_LOGIC into that and GPI_LOGIC_ARRAY\r\n* Update Python code to reflect GPI_LOGIC being scalar by separating\r\n  LogicObject into that and LogicArrayObject",
          "timestamp": "2025-01-08T13:00:01-07:00",
          "tree_id": "d7faf8b7c9e0563f4caeafec54d1c92155c70fbb",
          "url": "https://github.com/cocotb/cocotb/commit/13a6736e4792f31c0993fb91c399cdd54de71163"
        },
        "date": 1736366620395,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1453829512681023,
            "unit": "iter/sec",
            "range": "stddev: 0.09792124970279979",
            "extra": "mean: 6.878385610400005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20637756451803613,
            "unit": "iter/sec",
            "range": "stddev: 0.014668689535110822",
            "extra": "mean: 4.845487940200042 sec\nrounds: 5"
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
          "id": "ca5e5ab81201d740f458c16d45da5e8e6490e06b",
          "message": "Fix ReST markup in docstring (#4351)",
          "timestamp": "2025-01-08T22:09:11+01:00",
          "tree_id": "11ff427e50dce0e07301e013e8a16d4958cfacf1",
          "url": "https://github.com/cocotb/cocotb/commit/ca5e5ab81201d740f458c16d45da5e8e6490e06b"
        },
        "date": 1736370748112,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1522362176171673,
            "unit": "iter/sec",
            "range": "stddev: 0.05306409639750089",
            "extra": "mean: 6.568739132199989 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21285343075978255,
            "unit": "iter/sec",
            "range": "stddev: 0.04793940584262894",
            "extra": "mean: 4.6980685085999765 sec\nrounds: 5"
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
          "id": "2cb887be090e3856e2f28a375d37881fbbd8b530",
          "message": "docs: Clean up links on release notes and some docstring formatting on reference page",
          "timestamp": "2025-01-08T15:16:05-08:00",
          "tree_id": "d05aab0d551564058254cb2491fd519cedcedb3b",
          "url": "https://github.com/cocotb/cocotb/commit/2cb887be090e3856e2f28a375d37881fbbd8b530"
        },
        "date": 1736378380716,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1460139101279881,
            "unit": "iter/sec",
            "range": "stddev: 0.050439244276320065",
            "extra": "mean: 6.848662563199992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20795399319018035,
            "unit": "iter/sec",
            "range": "stddev: 0.028745122941012093",
            "extra": "mean: 4.808755940000003 sec\nrounds: 5"
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
          "id": "e7965b8cf776f505b470a3e39d49d1ad81ad8aa1",
          "message": "Verilator: Update to latest release (v5.032) in CI (#4356)",
          "timestamp": "2025-01-09T16:07:48-08:00",
          "tree_id": "eab77a8e8016442d3396b6720d4730dc6d8e563c",
          "url": "https://github.com/cocotb/cocotb/commit/e7965b8cf776f505b470a3e39d49d1ad81ad8aa1"
        },
        "date": 1736467878103,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14676237406184894,
            "unit": "iter/sec",
            "range": "stddev: 0.03735696718484893",
            "extra": "mean: 6.813735512199997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20522388734949404,
            "unit": "iter/sec",
            "range": "stddev: 0.039976153153146114",
            "extra": "mean: 4.872727112399986 sec\nrounds: 5"
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
          "id": "e8b36797c5dec8ac71be238ad433a83ef2249977",
          "message": "Pin ubuntu CI actions to specific versions (#4358)\n\nWe are currently on 20.04 across the board, but NVC does not build on\r\n20.04, so it was pinned to 22.04.",
          "timestamp": "2025-01-12T14:42:46-07:00",
          "tree_id": "f83399b75fedaefafbcff0af9403a4d228a9f827",
          "url": "https://github.com/cocotb/cocotb/commit/e8b36797c5dec8ac71be238ad433a83ef2249977"
        },
        "date": 1736718381265,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14694967736968367,
            "unit": "iter/sec",
            "range": "stddev: 0.05840548555526701",
            "extra": "mean: 6.805050666999994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20636253955015296,
            "unit": "iter/sec",
            "range": "stddev: 0.015964761527514647",
            "extra": "mean: 4.845840733400001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "cf9d4c4353080b5592f8bd0b18459d0629bdbb4e",
          "message": "Improve code coverage to starting it via PYGPI_ENTRY_POINT",
          "timestamp": "2025-01-13T10:02:07-07:00",
          "tree_id": "ef78dccd4fc4acdca8488ac767e8a4343b3a24ba",
          "url": "https://github.com/cocotb/cocotb/commit/cf9d4c4353080b5592f8bd0b18459d0629bdbb4e"
        },
        "date": 1736787945489,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1448193390339787,
            "unit": "iter/sec",
            "range": "stddev: 0.027074047099241123",
            "extra": "mean: 6.905155117200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20259769067700523,
            "unit": "iter/sec",
            "range": "stddev: 0.04798764568620105",
            "extra": "mean: 4.935890417400003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "da0955f93b23fbbbd3b520dc3412ed188fc36e76",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2025-01-15T13:43:12-07:00",
          "tree_id": "16229f0b86be4a8d929f3fb9034cbf7efc25d67b",
          "url": "https://github.com/cocotb/cocotb/commit/da0955f93b23fbbbd3b520dc3412ed188fc36e76"
        },
        "date": 1736973993914,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1481217517284594,
            "unit": "iter/sec",
            "range": "stddev: 0.03253516674425896",
            "extra": "mean: 6.751202901199991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2068590115270768,
            "unit": "iter/sec",
            "range": "stddev: 0.012916041747804727",
            "extra": "mean: 4.834210473200028 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "themperek@users.noreply.github.com",
            "name": "Tomasz Hemperek",
            "username": "themperek"
          },
          "committer": {
            "email": "themperek@users.noreply.github.com",
            "name": "Tomasz Hemperek",
            "username": "themperek"
          },
          "distinct": true,
          "id": "82d18027246aa64b74af87915dee1e6c3c1448ae",
          "message": "Clean up Makefile.vcs\n\nCo-authored-by: Philipp Wagner <mail@philipp-wagner.com>",
          "timestamp": "2025-01-15T22:53:08+01:00",
          "tree_id": "ffe5c537a02b804f527543311e040adbe5353fdc",
          "url": "https://github.com/cocotb/cocotb/commit/82d18027246aa64b74af87915dee1e6c3c1448ae"
        },
        "date": 1736978199006,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14683251419858576,
            "unit": "iter/sec",
            "range": "stddev: 0.03519247325352396",
            "extra": "mean: 6.810480672199998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2052190415588154,
            "unit": "iter/sec",
            "range": "stddev: 0.04323678679881229",
            "extra": "mean: 4.872842171000014 sec\nrounds: 5"
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
          "id": "320d11668f5d5916f7b07010812ff04ced7c3754",
          "message": "Require byteorder when converting LogicArray to/from bytes (#4366)\n\nParallels int.from_bytes and int.to_bytes.",
          "timestamp": "2025-01-16T22:02:17-07:00",
          "tree_id": "e54a506def86e45c7f82e6e2529990769c94a56d",
          "url": "https://github.com/cocotb/cocotb/commit/320d11668f5d5916f7b07010812ff04ced7c3754"
        },
        "date": 1737090349567,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14184517525894322,
            "unit": "iter/sec",
            "range": "stddev: 0.017300965351755498",
            "extra": "mean: 7.049940177200005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20082476132410043,
            "unit": "iter/sec",
            "range": "stddev: 0.05709014219892344",
            "extra": "mean: 4.979465646599988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maxime.larue@deep-mine.com",
            "name": "Maxime Larue",
            "username": "maxime-lr"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "2e5a8a425ab124d4bd2879067a59fe7df95afc24",
          "message": "Document how to get libstdc++-static on RHEL9",
          "timestamp": "2025-01-17T09:04:10-07:00",
          "tree_id": "3c9917cbefb1b976df94f95c87cb30ebbce987c1",
          "url": "https://github.com/cocotb/cocotb/commit/2e5a8a425ab124d4bd2879067a59fe7df95afc24"
        },
        "date": 1737130099560,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14520732016433427,
            "unit": "iter/sec",
            "range": "stddev: 0.04847019081649059",
            "extra": "mean: 6.886705152799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20715985594995376,
            "unit": "iter/sec",
            "range": "stddev: 0.025007393671374594",
            "extra": "mean: 4.827190072200006 sec\nrounds: 5"
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
          "id": "ca40cae4e2ad23bcb58fd771982f72faad832eac",
          "message": "Add section to tutorial on how to use First and Combine\n\nAlso mentions with_timeout and shows the idiom of using First to\ndetermine which of multiple Tasks finish first.",
          "timestamp": "2025-01-17T10:17:11-07:00",
          "tree_id": "1283c127b72a30142f88631bf2b5de4441bb16b2",
          "url": "https://github.com/cocotb/cocotb/commit/ca40cae4e2ad23bcb58fd771982f72faad832eac"
        },
        "date": 1737134435106,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14535038336555442,
            "unit": "iter/sec",
            "range": "stddev: 0.06574101536672897",
            "extra": "mean: 6.879926814400017 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20583779226174526,
            "unit": "iter/sec",
            "range": "stddev: 0.013406157525170643",
            "extra": "mean: 4.858194353000011 sec\nrounds: 5"
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
          "id": "bee22bbf508a0889dbef8082e5fd12465155c53f",
          "message": "Changes to pyuvm ecosystem test",
          "timestamp": "2025-01-18T09:55:30-07:00",
          "tree_id": "4a5926c00c7dd4f2ff0d52c0e1346631cc19cbf3",
          "url": "https://github.com/cocotb/cocotb/commit/bee22bbf508a0889dbef8082e5fd12465155c53f"
        },
        "date": 1737219537326,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14423606464984998,
            "unit": "iter/sec",
            "range": "stddev: 0.06426299239591934",
            "extra": "mean: 6.933078786000005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20427264526889968,
            "unit": "iter/sec",
            "range": "stddev: 0.01445455254110538",
            "extra": "mean: 4.895418075600008 sec\nrounds: 5"
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
          "id": "b6b19d759c6966f9ab1aedd27f9808480695fc0d",
          "message": "Remove unused files hal_cosimulation.{xml,svg} (#4372)",
          "timestamp": "2025-01-18T18:40:50+01:00",
          "tree_id": "65c9d9c7d347c5f87ac4c9abb391d31d68482943",
          "url": "https://github.com/cocotb/cocotb/commit/b6b19d759c6966f9ab1aedd27f9808480695fc0d"
        },
        "date": 1737222262013,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1450994726089932,
            "unit": "iter/sec",
            "range": "stddev: 0.03758678248616948",
            "extra": "mean: 6.891823808999982 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20602978481443185,
            "unit": "iter/sec",
            "range": "stddev: 0.04290281966628674",
            "extra": "mean: 4.853667157400014 sec\nrounds: 5"
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
          "id": "b92cad2e2852f996d3b860e0d73d894594a240e6",
          "message": "Reword anachronistic sentence (#4373)",
          "timestamp": "2025-01-18T19:17:58+01:00",
          "tree_id": "faaba53f768da7505ec467c8c856df5adf4ad137",
          "url": "https://github.com/cocotb/cocotb/commit/b92cad2e2852f996d3b860e0d73d894594a240e6"
        },
        "date": 1737224485847,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1450383113988717,
            "unit": "iter/sec",
            "range": "stddev: 0.04105863425752388",
            "extra": "mean: 6.894730022399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20576517250531123,
            "unit": "iter/sec",
            "range": "stddev: 0.039175523435942404",
            "extra": "mean: 4.8599089331999945 sec\nrounds: 5"
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
          "id": "5066371a6782e8ba0756fa054f03ac5c73558345",
          "message": "Fix docstring markup (#4377)\n\n* Improve docstring markup\n* Make text before some lists not appear as a section",
          "timestamp": "2025-01-20T19:42:04+01:00",
          "tree_id": "d9346271506a2a1911bf0e8687c363814fd5fc35",
          "url": "https://github.com/cocotb/cocotb/commit/5066371a6782e8ba0756fa054f03ac5c73558345"
        },
        "date": 1737398749312,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14557984020616957,
            "unit": "iter/sec",
            "range": "stddev: 0.02640795483611044",
            "extra": "mean: 6.869082962200014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20213723330391162,
            "unit": "iter/sec",
            "range": "stddev: 0.045730270169722836",
            "extra": "mean: 4.9471341011999925 sec\nrounds: 5"
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
          "id": "823b37f5c9e444e1f83be70b6333aadcaf111b5e",
          "message": "Switch to Sphinx 8 (#4376)\n\nThe blocker https://github.com/breathe-doc/breathe/issues/999 was moved to Sphinx 9",
          "timestamp": "2025-01-20T19:42:30+01:00",
          "tree_id": "4ecfe4f50dda36d1e32f03744ed72f56f34814f6",
          "url": "https://github.com/cocotb/cocotb/commit/823b37f5c9e444e1f83be70b6333aadcaf111b5e"
        },
        "date": 1737398994090,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14694197480860907,
            "unit": "iter/sec",
            "range": "stddev: 0.03063416375178522",
            "extra": "mean: 6.805407381399993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20667549080956993,
            "unit": "iter/sec",
            "range": "stddev: 0.0349507592414165",
            "extra": "mean: 4.838503085600007 sec\nrounds: 5"
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
          "id": "98fd764e7e64207c1ea487b92ab1ca38e9049eff",
          "message": "Add more semantic markup (#4374)\n\nOnly markup the first keyword occurrence in running doc text",
          "timestamp": "2025-01-20T20:46:43+01:00",
          "tree_id": "69e1acd64a8d2df0b1a51bc93f9408023c07bf4f",
          "url": "https://github.com/cocotb/cocotb/commit/98fd764e7e64207c1ea487b92ab1ca38e9049eff"
        },
        "date": 1737402603746,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1450978997218658,
            "unit": "iter/sec",
            "range": "stddev: 0.06029693165671028",
            "extra": "mean: 6.891898517599998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.206865378723688,
            "unit": "iter/sec",
            "range": "stddev: 0.024020690515107284",
            "extra": "mean: 4.83406167899999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5e89268575a6156aaf14952d15d3d351ae29658d",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.9.1 → v0.9.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.9.1...v0.9.2)\n- [github.com/pre-commit/mirrors-clang-format: v19.1.6 → v19.1.7](https://github.com/pre-commit/mirrors-clang-format/compare/v19.1.6...v19.1.7)",
          "timestamp": "2025-01-20T16:06:10-07:00",
          "tree_id": "9ffb827748a5a91515927c5e832cffe81b18d2a0",
          "url": "https://github.com/cocotb/cocotb/commit/5e89268575a6156aaf14952d15d3d351ae29658d"
        },
        "date": 1737414573959,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14361428799036893,
            "unit": "iter/sec",
            "range": "stddev: 0.049201232609906984",
            "extra": "mean: 6.963095483000006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20590169744683223,
            "unit": "iter/sec",
            "range": "stddev: 0.04124256966297934",
            "extra": "mean: 4.856686527599993 sec\nrounds: 5"
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
          "id": "0376b44bc1e03dfa576d380b61c4a07a1ebcfc27",
          "message": "Add cocotb-styled doc theme based on sphinx-book-theme+sphinx-design (#4370)\n\n* Use sphinx-book-theme+sphinx-design for docs\n* Add CSS for cocotb style\n\nRefs #4367",
          "timestamp": "2025-01-22T23:20:26+01:00",
          "tree_id": "f67d5d42eb6b00e412131a90564e3747ba94b070",
          "url": "https://github.com/cocotb/cocotb/commit/0376b44bc1e03dfa576d380b61c4a07a1ebcfc27"
        },
        "date": 1737584627849,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14406674842177447,
            "unit": "iter/sec",
            "range": "stddev: 0.04884259978695933",
            "extra": "mean: 6.9412269726000035 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2061657607634421,
            "unit": "iter/sec",
            "range": "stddev: 0.02690998684245358",
            "extra": "mean: 4.850465937199999 sec\nrounds: 5"
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
          "id": "5f3fdf51a0f8fb8bab7d8a5b460eadc30c4a8449",
          "message": "Cleanup callbacks in VHPI if they are cancelled",
          "timestamp": "2025-01-22T18:55:42-07:00",
          "tree_id": "0889b6bc5ee77fde8fa211184f11bfa8887e6adf",
          "url": "https://github.com/cocotb/cocotb/commit/5f3fdf51a0f8fb8bab7d8a5b460eadc30c4a8449"
        },
        "date": 1737597555798,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.140558918521278,
            "unit": "iter/sec",
            "range": "stddev: 0.04821543827230911",
            "extra": "mean: 7.114454283799989 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2042243190583397,
            "unit": "iter/sec",
            "range": "stddev: 0.03941494132701819",
            "extra": "mean: 4.896576493000009 sec\nrounds: 5"
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
          "id": "1d26b9232c9b410d473503b8e9a71bb3bc44b704",
          "message": "Fix sphinxcontrib.domaintools to work with Python 3.12+",
          "timestamp": "2025-01-22T19:07:20-07:00",
          "tree_id": "a993eb949f9bf964b5e14b3d18d002085bc971da",
          "url": "https://github.com/cocotb/cocotb/commit/1d26b9232c9b410d473503b8e9a71bb3bc44b704"
        },
        "date": 1737598245070,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14388975487268654,
            "unit": "iter/sec",
            "range": "stddev: 0.03577735661699873",
            "extra": "mean: 6.949765123200041 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20692467541332998,
            "unit": "iter/sec",
            "range": "stddev: 0.008726851199155646",
            "extra": "mean: 4.832676421999986 sec\nrounds: 5"
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
          "id": "2075160ece1fb34e3a1f19094880b2195220043f",
          "message": "Rename _t GPI types",
          "timestamp": "2025-01-22T23:01:11-07:00",
          "tree_id": "373b2dc21c2dc6e7e08f38fee4a26acd1e969b92",
          "url": "https://github.com/cocotb/cocotb/commit/2075160ece1fb34e3a1f19094880b2195220043f"
        },
        "date": 1737612294908,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14369264595581463,
            "unit": "iter/sec",
            "range": "stddev: 0.03157918271256741",
            "extra": "mean: 6.959298392399978 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20487973726256137,
            "unit": "iter/sec",
            "range": "stddev: 0.031576488752593924",
            "extra": "mean: 4.880912155400028 sec\nrounds: 5"
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
          "id": "b18d8c3459b42d1626625f5c04a63734a553388a",
          "message": "Merge pull request #4369 from ktbarrett/refactor-init\n\nRefactor `__init__.py`",
          "timestamp": "2025-01-22T23:45:19-07:00",
          "tree_id": "d55937c8c0c6f1af8412ece54bf68b8f16d02de0",
          "url": "https://github.com/cocotb/cocotb/commit/b18d8c3459b42d1626625f5c04a63734a553388a"
        },
        "date": 1737614942465,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1451433255342695,
            "unit": "iter/sec",
            "range": "stddev: 0.05597493087869873",
            "extra": "mean: 6.889741545599986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20710049888226112,
            "unit": "iter/sec",
            "range": "stddev: 0.014775138179248045",
            "extra": "mean: 4.828573592999942 sec\nrounds: 5"
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
          "id": "ca8497769419b2815b49c091e05104c7b14804d9",
          "message": "Reword some documentation (#4381)\n\nReword some documentation",
          "timestamp": "2025-01-23T19:09:21+01:00",
          "tree_id": "43b24f9a2b712a9968b987896789c16ed532cfaa",
          "url": "https://github.com/cocotb/cocotb/commit/ca8497769419b2815b49c091e05104c7b14804d9"
        },
        "date": 1737655988208,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.144768067533576,
            "unit": "iter/sec",
            "range": "stddev: 0.07665060224799712",
            "extra": "mean: 6.9076006680000095 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20573319532048961,
            "unit": "iter/sec",
            "range": "stddev: 0.07416713889379636",
            "extra": "mean: 4.8606643105999865 sec\nrounds: 5"
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
          "id": "9a024f93a6eb09d88833aff3b0e2ca733de301ef",
          "message": "Fix test names for IntEnum and StrEnum\n\nMove the Enum branch up so StrEnum and IntEnum use the enum name and not the weird Enum repr due to matching the `str` and `int` branch.",
          "timestamp": "2025-01-24T14:18:34-07:00",
          "tree_id": "eab77394f27e49cb86bf3ca8639a44d7054a5a4f",
          "url": "https://github.com/cocotb/cocotb/commit/9a024f93a6eb09d88833aff3b0e2ca733de301ef"
        },
        "date": 1737753716083,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14519204566559096,
            "unit": "iter/sec",
            "range": "stddev: 0.02396192451807824",
            "extra": "mean: 6.887429648200003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2053760584912672,
            "unit": "iter/sec",
            "range": "stddev: 0.019197867234945248",
            "extra": "mean: 4.869116718599997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "09c268647a42087d45f95396381785cdf91253e1",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.9.2 → v0.9.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.9.2...v0.9.3)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.01.10 → 2025.01.20](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.01.10...2025.01.20)",
          "timestamp": "2025-01-27T19:04:56-07:00",
          "tree_id": "6c5acb28509f71c07dae4737742e20798b3f6d15",
          "url": "https://github.com/cocotb/cocotb/commit/09c268647a42087d45f95396381785cdf91253e1"
        },
        "date": 1738030104003,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1428722246736934,
            "unit": "iter/sec",
            "range": "stddev: 0.04635741532064962",
            "extra": "mean: 6.999261068999976 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20520899810386303,
            "unit": "iter/sec",
            "range": "stddev: 0.04217983878676465",
            "extra": "mean: 4.873080660400023 sec\nrounds: 5"
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
          "id": "b390655a4c9fdd5e12ca36f717ed6638cb5c2bbe",
          "message": "Handle passing no triggers to Combine and First (#4409)",
          "timestamp": "2025-01-30T15:41:01-07:00",
          "tree_id": "f5200a6d50d927f0d04d92802753299aed745c35",
          "url": "https://github.com/cocotb/cocotb/commit/b390655a4c9fdd5e12ca36f717ed6638cb5c2bbe"
        },
        "date": 1738277060919,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14496510547685842,
            "unit": "iter/sec",
            "range": "stddev: 0.03784742650256511",
            "extra": "mean: 6.898211791800032 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20576404398269635,
            "unit": "iter/sec",
            "range": "stddev: 0.044704252713358435",
            "extra": "mean: 4.859935587600011 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wieser.eric@gmail.com",
            "name": "Eric Wieser",
            "username": "eric-wieser"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "06179d87bf1abe2c416031564d17fe6adec20b3d",
          "message": "Fix handling of escaped identifiers containing dots\n\nAlso fixes an issue where strings were not escape before inserting into regexes.\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2025-01-31T13:16:59-07:00",
          "tree_id": "a4be8b9e8dcc4f851d6a453067407993982651d7",
          "url": "https://github.com/cocotb/cocotb/commit/06179d87bf1abe2c416031564d17fe6adec20b3d"
        },
        "date": 1738354829049,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1446674656000758,
            "unit": "iter/sec",
            "range": "stddev: 0.051256911562354554",
            "extra": "mean: 6.912404221999975 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20324038948152387,
            "unit": "iter/sec",
            "range": "stddev: 0.1289250765290372",
            "extra": "mean: 4.920281852199992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "borchsh.vn@gmail.com",
            "name": "Vladislav Borshch",
            "username": "vborchsh"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "76de221ac0057041a79f1bdf9296aef6a58a7e5b",
          "message": "Test and fix issue with passing strings as defines in the runner\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2025-01-31T13:18:55-07:00",
          "tree_id": "9420496e24d5ee8f47434b4b6ed057b36e449400",
          "url": "https://github.com/cocotb/cocotb/commit/76de221ac0057041a79f1bdf9296aef6a58a7e5b"
        },
        "date": 1738355038104,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14548215712999132,
            "unit": "iter/sec",
            "range": "stddev: 0.04261146179197347",
            "extra": "mean: 6.873695164600008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20637100978706543,
            "unit": "iter/sec",
            "range": "stddev: 0.021020980268487637",
            "extra": "mean: 4.8456418420000205 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ab9d3273484bd239a37fd501ba1fb40c8b366da8",
          "message": "Add Clock.cycles",
          "timestamp": "2025-02-02T09:02:48-07:00",
          "tree_id": "954537f1a951e47a28ac0d0a6c415bcd5ec487e9",
          "url": "https://github.com/cocotb/cocotb/commit/ab9d3273484bd239a37fd501ba1fb40c8b366da8"
        },
        "date": 1738512376294,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14464060087847208,
            "unit": "iter/sec",
            "range": "stddev: 0.03883167294396308",
            "extra": "mean: 6.913688092599989 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2051292931171445,
            "unit": "iter/sec",
            "range": "stddev: 0.02140153616212008",
            "extra": "mean: 4.874974143400005 sec\nrounds: 5"
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
          "id": "aa487e7354933924143f4711c2319bc80e6f3b02",
          "message": "Make heading format of release notes more consistent (#4418)",
          "timestamp": "2025-02-02T21:30:32+01:00",
          "tree_id": "88b21d6d2d9607b38475b7c50e4dcafed2dc1d0c",
          "url": "https://github.com/cocotb/cocotb/commit/aa487e7354933924143f4711c2319bc80e6f3b02"
        },
        "date": 1738528441575,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14579486297499056,
            "unit": "iter/sec",
            "range": "stddev: 0.04238732541196972",
            "extra": "mean: 6.858952226400038 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20625756491747588,
            "unit": "iter/sec",
            "range": "stddev: 0.05310912181985128",
            "extra": "mean: 4.848307020399966 sec\nrounds: 5"
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
          "id": "8a649a6a8167bc63e6e6e970f8c704d9e249c5bc",
          "message": "Remove patch version from version specifications if the patch is 0\n\nChanging something for the patch 0 release means it was developed as a\npart of the minor release cycle. The patch 0 is redundant. Only specify\na patch release in versions if the tagged item was changed in that patch\nof the minor release and newer",
          "timestamp": "2025-02-02T19:26:57-07:00",
          "tree_id": "6dfd5b2504aedbc70e637ec6fa677f21bd8de83a",
          "url": "https://github.com/cocotb/cocotb/commit/8a649a6a8167bc63e6e6e970f8c704d9e249c5bc"
        },
        "date": 1738549814875,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14567106214927805,
            "unit": "iter/sec",
            "range": "stddev: 0.08303946378962097",
            "extra": "mean: 6.864781413999981 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.206111247586643,
            "unit": "iter/sec",
            "range": "stddev: 0.042833505236668845",
            "extra": "mean: 4.851748809000003 sec\nrounds: 5"
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
          "id": "6b45930f3be510efa6e530eca56676680059e037",
          "message": "Move sim_versions to cocotb_tools",
          "timestamp": "2025-02-02T20:20:56-07:00",
          "tree_id": "5a77d20cb83aa48d5ded305cd9b4f370caa91038",
          "url": "https://github.com/cocotb/cocotb/commit/6b45930f3be510efa6e530eca56676680059e037"
        },
        "date": 1738553064699,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1428472786566744,
            "unit": "iter/sec",
            "range": "stddev: 0.04539773052594693",
            "extra": "mean: 7.0004833792 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20227408068933656,
            "unit": "iter/sec",
            "range": "stddev: 0.057027241549833185",
            "extra": "mean: 4.9437871456000035 sec\nrounds: 5"
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
          "id": "3b9fee3ddbba491bd5b7267fe56989b3e6bcd95d",
          "message": "Fix tests that work oddly with Riviera\n\nThere seems to be play between the test_last_scheduled_write_* tests and\ntests before it. The issue being that the test_last_schedule_write_*\ntests depend upon ReadWrite in ReadWrite behavior, so they were changed\nto use Timer instead to force a new time step.",
          "timestamp": "2025-02-02T21:05:18-07:00",
          "tree_id": "8cf14340b15741deecd377e7742996f5d3647847",
          "url": "https://github.com/cocotb/cocotb/commit/3b9fee3ddbba491bd5b7267fe56989b3e6bcd95d"
        },
        "date": 1738555722901,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1424781889325417,
            "unit": "iter/sec",
            "range": "stddev: 0.02748588071783298",
            "extra": "mean: 7.0186181302000135 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20242171474145013,
            "unit": "iter/sec",
            "range": "stddev: 0.037678598346734274",
            "extra": "mean: 4.940181448800013 sec\nrounds: 5"
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
          "id": "d545a5e45053dac67e75d55be049df075e45d72f",
          "message": "Use Doxygen markup for GPI (#4383)\n\n* Use Doxygen markup for GPI\n* Set TYPEDEF_HIDES_STRUCT=YES in Doxyfile",
          "timestamp": "2025-02-03T21:20:02+01:00",
          "tree_id": "efe9c6053debd8629c310a48cb36cec312d2e00a",
          "url": "https://github.com/cocotb/cocotb/commit/d545a5e45053dac67e75d55be049df075e45d72f"
        },
        "date": 1738614290090,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14487794951960092,
            "unit": "iter/sec",
            "range": "stddev: 0.02357936583319194",
            "extra": "mean: 6.902361631400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20865872830855858,
            "unit": "iter/sec",
            "range": "stddev: 0.028391353866578543",
            "extra": "mean: 4.792514591199984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a8ecd8aa47512e5050a3c9eadc6cce6efc1f5ccd",
          "message": "Split cocotb initialization into init and run\n\nThis allows users to initialize the global members of the cocotb package\nwithout running a regression. Allowing other behaviors like discovering\ntests or running alternative regression managers possible.",
          "timestamp": "2025-02-03T15:43:54-07:00",
          "tree_id": "5a8862472f03bd389cd6420d577718b1235b43c8",
          "url": "https://github.com/cocotb/cocotb/commit/a8ecd8aa47512e5050a3c9eadc6cce6efc1f5ccd"
        },
        "date": 1738622837936,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14483659300348264,
            "unit": "iter/sec",
            "range": "stddev: 0.03529196992972696",
            "extra": "mean: 6.904332525799987 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20801545653291606,
            "unit": "iter/sec",
            "range": "stddev: 0.04229919564652884",
            "extra": "mean: 4.807335073399997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f3c2b365f8f1dc4acc6f31aa286591cb426e23e9",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.9.3 → v0.9.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.9.3...v0.9.4)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.01.20 → 2025.02.03](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.01.20...2025.02.03)",
          "timestamp": "2025-02-03T17:44:47-07:00",
          "tree_id": "c529ddaea36b94cc2fc0be363f028d65b58ff527",
          "url": "https://github.com/cocotb/cocotb/commit/f3c2b365f8f1dc4acc6f31aa286591cb426e23e9"
        },
        "date": 1738630102515,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14417595869803965,
            "unit": "iter/sec",
            "range": "stddev: 0.035489972370478726",
            "extra": "mean: 6.935969138199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20795498076916408,
            "unit": "iter/sec",
            "range": "stddev: 0.040144560692600834",
            "extra": "mean: 4.808733103200007 sec\nrounds: 5"
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
          "id": "5e38b4f0d42e9a20cc696086aeaef0a5393ee15e",
          "message": "Add all TYPE_CHECKING blocks to coverage exclusion",
          "timestamp": "2025-02-05T13:32:14-07:00",
          "tree_id": "1204098ea9fdc9e2352a53c704ce0a4e2c9100b0",
          "url": "https://github.com/cocotb/cocotb/commit/5e38b4f0d42e9a20cc696086aeaef0a5393ee15e"
        },
        "date": 1738787912769,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14452268717835598,
            "unit": "iter/sec",
            "range": "stddev: 0.018229576629866972",
            "extra": "mean: 6.9193288577999965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20714314886285082,
            "unit": "iter/sec",
            "range": "stddev: 0.024569052973905093",
            "extra": "mean: 4.827579408199972 sec\nrounds: 5"
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
          "id": "9c9dd06c621c3265de55cca9037c5f789903594c",
          "message": "Add TestSuccess and ValueChange to Library Reference (#4437)\n\n* Add TestSuccess and ValueChange to Library Reference\n\nCloses #4436\n\n* Fix reference and ReST markup",
          "timestamp": "2025-02-05T21:58:09+01:00",
          "tree_id": "cc4b2cda117423058da16164c691e346fbc9ef45",
          "url": "https://github.com/cocotb/cocotb/commit/9c9dd06c621c3265de55cca9037c5f789903594c"
        },
        "date": 1738789294228,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14356672195879294,
            "unit": "iter/sec",
            "range": "stddev: 0.042820512421490035",
            "extra": "mean: 6.965402471800002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2058219406578235,
            "unit": "iter/sec",
            "range": "stddev: 0.021831366920067645",
            "extra": "mean: 4.858568512200009 sec\nrounds: 5"
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
          "id": "f27ec7a23a07818019da23697dfc44e62c12905f",
          "message": "Add sphinx-codeautolink extension (#4433)\n\n* Add sphinx-codeautolink extension\n\nProvides automatic links from code examples (code-blocks and literalincludes) to reference docs",
          "timestamp": "2025-02-05T22:22:05+01:00",
          "tree_id": "e5621b6bab7179fb74bc1f7d2ff2d28d2cf4bd28",
          "url": "https://github.com/cocotb/cocotb/commit/f27ec7a23a07818019da23697dfc44e62c12905f"
        },
        "date": 1738790734234,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14507923204410397,
            "unit": "iter/sec",
            "range": "stddev: 0.0556161607495294",
            "extra": "mean: 6.8927853140000135 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20655600166468763,
            "unit": "iter/sec",
            "range": "stddev: 0.033684553378505656",
            "extra": "mean: 4.841302077599994 sec\nrounds: 5"
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
          "id": "bf154122886b8b2e01e7fad1a98b8f92fadbb62b",
          "message": "Link more objects in docs (#4440)",
          "timestamp": "2025-02-07T06:55:14+01:00",
          "tree_id": "996150a284703537bf199287f5de2153b5512a9f",
          "url": "https://github.com/cocotb/cocotb/commit/bf154122886b8b2e01e7fad1a98b8f92fadbb62b"
        },
        "date": 1738907930188,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1460541095090909,
            "unit": "iter/sec",
            "range": "stddev: 0.04670022852919387",
            "extra": "mean: 6.846777563200004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2062362669945723,
            "unit": "iter/sec",
            "range": "stddev: 0.09792681942113564",
            "extra": "mean: 4.848807702800002 sec\nrounds: 5"
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
          "id": "ae019fc00bab78ecfa4b19f39b6c73fdd1cddd33",
          "message": "Fix examples of Combine and First in coroutines tutorial",
          "timestamp": "2025-02-09T15:16:54-07:00",
          "tree_id": "2e6558588688b57ced887dfcb89889cd1851bf31",
          "url": "https://github.com/cocotb/cocotb/commit/ae019fc00bab78ecfa4b19f39b6c73fdd1cddd33"
        },
        "date": 1739139633223,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14533108384293328,
            "unit": "iter/sec",
            "range": "stddev: 0.01902675991295668",
            "extra": "mean: 6.880840447599985 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20942092234261814,
            "unit": "iter/sec",
            "range": "stddev: 0.017473273598593686",
            "extra": "mean: 4.775072083600003 sec\nrounds: 5"
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
          "id": "3a634db048f842c45542d7b8b43c8e4f7d0aa810",
          "message": "Mention Ubuntu 24.04 support",
          "timestamp": "2025-02-09T15:18:38-07:00",
          "tree_id": "49a2b6b9bf9dd7e6b59d58bafd03a764cb6de236",
          "url": "https://github.com/cocotb/cocotb/commit/3a634db048f842c45542d7b8b43c8e4f7d0aa810"
        },
        "date": 1739139879318,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1451015861817389,
            "unit": "iter/sec",
            "range": "stddev: 0.04199655699106763",
            "extra": "mean: 6.891723421599994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20735899918792874,
            "unit": "iter/sec",
            "range": "stddev: 0.04875518916709696",
            "extra": "mean: 4.822554139999989 sec\nrounds: 5"
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
          "id": "e7dfd5a650318fc30051e8d886fafd51b4266d6a",
          "message": "Remove RHEL 7 support",
          "timestamp": "2025-02-09T15:19:43-07:00",
          "tree_id": "a47b238da8c2b706b8e5216ec4e20948932dd8e3",
          "url": "https://github.com/cocotb/cocotb/commit/e7dfd5a650318fc30051e8d886fafd51b4266d6a"
        },
        "date": 1739140014505,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14433069007667226,
            "unit": "iter/sec",
            "range": "stddev: 0.02240076102073967",
            "extra": "mean: 6.928533352600016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20705533630986783,
            "unit": "iter/sec",
            "range": "stddev: 0.020812318860567416",
            "extra": "mean: 4.829626793600016 sec\nrounds: 5"
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
          "id": "71562aa563259acf4bf578bfe5fe5b9a25ebe931",
          "message": "Add missing word; add reference to glossary (#4447)",
          "timestamp": "2025-02-09T23:30:53+01:00",
          "tree_id": "b926ff8f9eea546b6e03db614c6aa3e45b85d513",
          "url": "https://github.com/cocotb/cocotb/commit/71562aa563259acf4bf578bfe5fe5b9a25ebe931"
        },
        "date": 1739142550752,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14602540297231814,
            "unit": "iter/sec",
            "range": "stddev: 0.04688133530263931",
            "extra": "mean: 6.848123543200006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2084008703330676,
            "unit": "iter/sec",
            "range": "stddev: 0.04825602767088266",
            "extra": "mean: 4.798444451800004 sec\nrounds: 5"
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
          "id": "a33b06bad83d60af029b89e27a6a13a05bd0d6cf",
          "message": "Take green color for e.g. versionadded from docs.python.org (#4446)",
          "timestamp": "2025-02-09T23:31:48+01:00",
          "tree_id": "45c271a39f10cf16d547b75004c1de0f8d37699d",
          "url": "https://github.com/cocotb/cocotb/commit/a33b06bad83d60af029b89e27a6a13a05bd0d6cf"
        },
        "date": 1739142596241,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14532331851061323,
            "unit": "iter/sec",
            "range": "stddev: 0.016891689840329713",
            "extra": "mean: 6.881208124399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20709840184399528,
            "unit": "iter/sec",
            "range": "stddev: 0.047732108352465656",
            "extra": "mean: 4.828622486200004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "619105446c0589c278b55288575e490aa0a2a87b",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.9.4 → v0.9.6](https://github.com/astral-sh/ruff-pre-commit/compare/v0.9.4...v0.9.6)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.02.03 → 2025.02.10](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.02.03...2025.02.10)",
          "timestamp": "2025-02-10T18:20:49-07:00",
          "tree_id": "343672fb1eddb35d88c10adae3479059be95de19",
          "url": "https://github.com/cocotb/cocotb/commit/619105446c0589c278b55288575e490aa0a2a87b"
        },
        "date": 1739237067706,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14449518057963304,
            "unit": "iter/sec",
            "range": "stddev: 0.055714925322146586",
            "extra": "mean: 6.920646045000012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20528316672485192,
            "unit": "iter/sec",
            "range": "stddev: 0.049734360336932716",
            "extra": "mean: 4.871320020800022 sec\nrounds: 5"
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
          "id": "69c21d250dad69aaa453d5e5e7234ba93a448858",
          "message": "Fix broken VCS tests",
          "timestamp": "2025-02-10T22:56:04-07:00",
          "tree_id": "99c763eabcedd583234e538a2d0934836847ac01",
          "url": "https://github.com/cocotb/cocotb/commit/69c21d250dad69aaa453d5e5e7234ba93a448858"
        },
        "date": 1739253563878,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14478763761115257,
            "unit": "iter/sec",
            "range": "stddev: 0.03635966201464615",
            "extra": "mean: 6.906667009000034 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20843678086375558,
            "unit": "iter/sec",
            "range": "stddev: 0.03743662907157892",
            "extra": "mean: 4.797617751799999 sec\nrounds: 5"
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
          "id": "f118d22ee073a8b5ea872b9528e43934837e074a",
          "message": "Merge pull request #4451 from ktbarrett/split-triggers\n\nSplit `cocotb.triggers`",
          "timestamp": "2025-02-12T14:08:10-07:00",
          "tree_id": "8e25bdbe8e8737b4f868ae733625734570f515dd",
          "url": "https://github.com/cocotb/cocotb/commit/f118d22ee073a8b5ea872b9528e43934837e074a"
        },
        "date": 1739394703617,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14565107185896328,
            "unit": "iter/sec",
            "range": "stddev: 0.03216955620890581",
            "extra": "mean: 6.865723590200003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2079901071831683,
            "unit": "iter/sec",
            "range": "stddev: 0.02652623215969392",
            "extra": "mean: 4.8079209801999925 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rk.ryan.king@gmail.com",
            "name": "Ryan King",
            "username": "rkryan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e476d02d12c70663448c27400d1eb413a42767ed",
          "message": "Add failing testcase for `Release()` scheduling (#4402)\n\nA Release() occurring at the end of a test does not occur. It is\r\nscheduled to occur, but the test ends, and the scheduled writes are\r\ncleared. This testcase deliberately hits this error.\r\n\r\nThis is detailed in #4401.",
          "timestamp": "2025-02-12T14:11:47-07:00",
          "tree_id": "60a7b7058d34d526dc6c2cbcc90be779dcb2f79d",
          "url": "https://github.com/cocotb/cocotb/commit/e476d02d12c70663448c27400d1eb413a42767ed"
        },
        "date": 1739394932244,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1452973403683924,
            "unit": "iter/sec",
            "range": "stddev: 0.04498342165767748",
            "extra": "mean: 6.882438436000013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20740709299177443,
            "unit": "iter/sec",
            "range": "stddev: 0.038595896470369956",
            "extra": "mean: 4.8214358803999975 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "dcfe81f8efce0ed17e90d2360b0407845319a879",
          "message": "Deprecate cocotb.start",
          "timestamp": "2025-02-12T17:19:09-07:00",
          "tree_id": "ec8dd7c8e37dc0222abfcdda186b443cead21ec6",
          "url": "https://github.com/cocotb/cocotb/commit/dcfe81f8efce0ed17e90d2360b0407845319a879"
        },
        "date": 1739406168513,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14736311721453874,
            "unit": "iter/sec",
            "range": "stddev: 0.04670980050363836",
            "extra": "mean: 6.78595851460002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20587596082441595,
            "unit": "iter/sec",
            "range": "stddev: 0.05308007661050954",
            "extra": "mean: 4.857293663600013 sec\nrounds: 5"
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
          "id": "f59ff09905b518ebe7a25a22e179b4eb9b92381b",
          "message": "Add typing for time unit",
          "timestamp": "2025-02-13T20:43:29-07:00",
          "tree_id": "0c4358f0292ea1321d03b72fe70b11be41cfb125",
          "url": "https://github.com/cocotb/cocotb/commit/f59ff09905b518ebe7a25a22e179b4eb9b92381b"
        },
        "date": 1739504815363,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14378487524022251,
            "unit": "iter/sec",
            "range": "stddev: 0.038199181446877055",
            "extra": "mean: 6.954834424199987 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20645604493856431,
            "unit": "iter/sec",
            "range": "stddev: 0.024597133147659583",
            "extra": "mean: 4.843646018200014 sec\nrounds: 5"
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
          "id": "ddb9634ec4fdd19f2464e5926252b262d0779fab",
          "message": "Support passing int to LogicArray.__setitem__",
          "timestamp": "2025-02-15T09:43:08-07:00",
          "tree_id": "77533271c7dd9cdc595637bf0c2c6604b307cc35",
          "url": "https://github.com/cocotb/cocotb/commit/ddb9634ec4fdd19f2464e5926252b262d0779fab"
        },
        "date": 1739637998266,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14571792165562622,
            "unit": "iter/sec",
            "range": "stddev: 0.02691145806826941",
            "extra": "mean: 6.862573859400015 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20955378457214266,
            "unit": "iter/sec",
            "range": "stddev: 0.03191357939175321",
            "extra": "mean: 4.772044571000015 sec\nrounds: 5"
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
          "id": "5ccaf52e00faeecf0219c4a2901bd640e5bfcd58",
          "message": "Remove invalid docs",
          "timestamp": "2025-02-16T00:54:53-07:00",
          "tree_id": "c9a168bfa53fd5c9fa1239bc50d9cce52675705c",
          "url": "https://github.com/cocotb/cocotb/commit/5ccaf52e00faeecf0219c4a2901bd640e5bfcd58"
        },
        "date": 1739692690783,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14309506494879912,
            "unit": "iter/sec",
            "range": "stddev: 0.11659280036442284",
            "extra": "mean: 6.988361201399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20627829040331255,
            "unit": "iter/sec",
            "range": "stddev: 0.0469809848966119",
            "extra": "mean: 4.847819894400004 sec\nrounds: 5"
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
          "id": "51f1425cc82ad9042987e93e0932f669363bd465",
          "message": "Fix leak of waiters in Combine",
          "timestamp": "2025-02-16T13:40:26-07:00",
          "tree_id": "424bba51ffb03964812acf0a1641da864f39be55",
          "url": "https://github.com/cocotb/cocotb/commit/51f1425cc82ad9042987e93e0932f669363bd465"
        },
        "date": 1739738660644,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14492497930157075,
            "unit": "iter/sec",
            "range": "stddev: 0.018971770260582773",
            "extra": "mean: 6.900121737600012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20694150085386892,
            "unit": "iter/sec",
            "range": "stddev: 0.0330390793280731",
            "extra": "mean: 4.832283499800008 sec\nrounds: 5"
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
          "id": "3b8796a375e9af6531c0bc5c3571298a41754f0c",
          "message": "Update documentation on repo labels",
          "timestamp": "2025-02-17T14:16:34-07:00",
          "tree_id": "8fb471fbd3f00c698a840935017b0b7866aa673c",
          "url": "https://github.com/cocotb/cocotb/commit/3b8796a375e9af6531c0bc5c3571298a41754f0c"
        },
        "date": 1739827193456,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14533639823876782,
            "unit": "iter/sec",
            "range": "stddev: 0.04352311510174356",
            "extra": "mean: 6.880588841600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21067638665603977,
            "unit": "iter/sec",
            "range": "stddev: 0.04636808315344473",
            "extra": "mean: 4.74661643799999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "db71e799488aed059f04da324a7bd1529d32923a",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.02.10 → 2025.02.17](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.02.10...2025.02.17)",
          "timestamp": "2025-02-17T14:53:02-07:00",
          "tree_id": "2e4289845e9c2157e80d7c66461b5116472ee3b9",
          "url": "https://github.com/cocotb/cocotb/commit/db71e799488aed059f04da324a7bd1529d32923a"
        },
        "date": 1739829381032,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14843839023396477,
            "unit": "iter/sec",
            "range": "stddev: 0.026836575485308607",
            "extra": "mean: 6.736801702199989 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21086904797431874,
            "unit": "iter/sec",
            "range": "stddev: 0.028803479578170116",
            "extra": "mean: 4.742279673600024 sec\nrounds: 5"
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
          "id": "253283d114538f8b1989bda507bd07fbb310dfe5",
          "message": "Prevent Lock.acquire() from being used by multiple Tasks simultaneously",
          "timestamp": "2025-02-17T17:27:18-07:00",
          "tree_id": "6468415b4a29d0c3e036c06458e973cb8459bd4f",
          "url": "https://github.com/cocotb/cocotb/commit/253283d114538f8b1989bda507bd07fbb310dfe5"
        },
        "date": 1739838643435,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1464546201738043,
            "unit": "iter/sec",
            "range": "stddev: 0.04132957865024018",
            "extra": "mean: 6.828053623800019 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20909962245352195,
            "unit": "iter/sec",
            "range": "stddev: 0.032747532279525",
            "extra": "mean: 4.782409400200026 sec\nrounds: 5"
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
          "id": "9fe672a5a1866b292eb7199af8204dc490cd6cb4",
          "message": "GPI callback refactor",
          "timestamp": "2025-02-17T17:45:36-07:00",
          "tree_id": "8ebef4bded1a6801801239861168a6e9e0917456",
          "url": "https://github.com/cocotb/cocotb/commit/9fe672a5a1866b292eb7199af8204dc490cd6cb4"
        },
        "date": 1739839742142,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14540332070429943,
            "unit": "iter/sec",
            "range": "stddev: 0.05407009349971683",
            "extra": "mean: 6.877422022799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21047603292341427,
            "unit": "iter/sec",
            "range": "stddev: 0.0429305779316849",
            "extra": "mean: 4.751134778199992 sec\nrounds: 5"
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
          "id": "44f74f14fb52742029256012cf07b44bf6b242c1",
          "message": "Test `NextTimeStep`",
          "timestamp": "2025-02-17T21:12:39-07:00",
          "tree_id": "44dc8501cbe12f926c4ee97e1bc0fc91fa59deee",
          "url": "https://github.com/cocotb/cocotb/commit/44f74f14fb52742029256012cf07b44bf6b242c1"
        },
        "date": 1739852183572,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14662961457011975,
            "unit": "iter/sec",
            "range": "stddev: 0.032982540994861004",
            "extra": "mean: 6.819904716600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2118598079944681,
            "unit": "iter/sec",
            "range": "stddev: 0.031112032042151048",
            "extra": "mean: 4.7201024557999745 sec\nrounds: 5"
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
          "id": "dbf055e50cf6eca5ad6fd6a3d9f0e50cdcc9a08d",
          "message": "Fix VPI issuing error incorrectly",
          "timestamp": "2025-02-18T08:14:57-07:00",
          "tree_id": "79204da6f11f8e1df99ec6028d06b45ac79aa58e",
          "url": "https://github.com/cocotb/cocotb/commit/dbf055e50cf6eca5ad6fd6a3d9f0e50cdcc9a08d"
        },
        "date": 1739891923630,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14297675383514974,
            "unit": "iter/sec",
            "range": "stddev: 0.04374251097861235",
            "extra": "mean: 6.99414396520001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2065089102653936,
            "unit": "iter/sec",
            "range": "stddev: 0.06819338977843116",
            "extra": "mean: 4.842406067199988 sec\nrounds: 5"
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
          "id": "753b01a1818d6988bd7796050734218d44c1ecfb",
          "message": "Fix computation of results_xml_file in Python runner",
          "timestamp": "2025-02-18T08:26:23-07:00",
          "tree_id": "ae174bf592860e40e0630d6f95f87c3389e08a13",
          "url": "https://github.com/cocotb/cocotb/commit/753b01a1818d6988bd7796050734218d44c1ecfb"
        },
        "date": 1739892617808,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1456249266356547,
            "unit": "iter/sec",
            "range": "stddev: 0.04398398628437555",
            "extra": "mean: 6.866956249199996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21024260932236982,
            "unit": "iter/sec",
            "range": "stddev: 0.0171396497786165",
            "extra": "mean: 4.756409765000001 sec\nrounds: 5"
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
          "id": "ae44da6f062093149bbf9211089dc412cf92d093",
          "message": "Reword documentation on COCOTB_REDUCED_LOG_FMT",
          "timestamp": "2025-02-19T10:08:29-07:00",
          "tree_id": "554d6b39fae08c6a22a38b5e43b4d047c1298d93",
          "url": "https://github.com/cocotb/cocotb/commit/ae44da6f062093149bbf9211089dc412cf92d093"
        },
        "date": 1739985115092,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1462597655762746,
            "unit": "iter/sec",
            "range": "stddev: 0.016407293165887078",
            "extra": "mean: 6.837150299400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2078237679419954,
            "unit": "iter/sec",
            "range": "stddev: 0.08290781913353829",
            "extra": "mean: 4.8117691730000045 sec\nrounds: 5"
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
          "id": "339432c022aa84fcd2039996fa5a7cc27ee59a2d",
          "message": "Use Sphinx 8.1 specifically",
          "timestamp": "2025-02-19T11:22:54-07:00",
          "tree_id": "001349d16e10abb3536941f2a562ee06adc8f4eb",
          "url": "https://github.com/cocotb/cocotb/commit/339432c022aa84fcd2039996fa5a7cc27ee59a2d"
        },
        "date": 1739989594612,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14593615826245024,
            "unit": "iter/sec",
            "range": "stddev: 0.03683356670915619",
            "extra": "mean: 6.8523113935999955 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2096678449849712,
            "unit": "iter/sec",
            "range": "stddev: 0.03547896256265305",
            "extra": "mean: 4.7694485536 sec\nrounds: 5"
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
          "id": "023f93e4649ea7b656d363aba660fbb07b018a43",
          "message": "Fix bug in Combine and First\n\nModifying the waiters list in the on_done callback was a bad idea. In\nthe loop after completion where the waiters are killed it kills the\nwaiters, which run the on_done callbacks, which may modify the waiters\nlist. Whoops...\n\nThe new tests prove that unfinished waiter tasks are killed after First\nfinishes, First exceptions, and Combine exceptions.",
          "timestamp": "2025-02-19T13:50:10-07:00",
          "tree_id": "c85483d02244e2bbd835966f1bf5582de12ab01b",
          "url": "https://github.com/cocotb/cocotb/commit/023f93e4649ea7b656d363aba660fbb07b018a43"
        },
        "date": 1739998419101,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14396367073866612,
            "unit": "iter/sec",
            "range": "stddev: 0.06331840314838552",
            "extra": "mean: 6.946196876399995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20885767991996335,
            "unit": "iter/sec",
            "range": "stddev: 0.043004976388460445",
            "extra": "mean: 4.7879493843999965 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hexagonrecursion@gmail.com",
            "name": "Andrey Andreyevich Bienkowski",
            "username": "hexagonrecursion"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "757ac9d91d298bb3e7a97b84cb7ef08980713e25",
          "message": "Raise logging level of exceptions from tests (#4463)\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2025-02-19T14:11:56-07:00",
          "tree_id": "bd0c6aca271cd447015b6eaaf3d6ce7389f3db0a",
          "url": "https://github.com/cocotb/cocotb/commit/757ac9d91d298bb3e7a97b84cb7ef08980713e25"
        },
        "date": 1739999729350,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14632951740403727,
            "unit": "iter/sec",
            "range": "stddev: 0.03875640411176939",
            "extra": "mean: 6.833891191200019 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2089741363356187,
            "unit": "iter/sec",
            "range": "stddev: 0.04174953043174395",
            "extra": "mean: 4.785281171799989 sec\nrounds: 5"
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
          "id": "c91ad618327e1a03346cfcdc782992b267f32072",
          "message": "Makefile cleanup (#4505)",
          "timestamp": "2025-02-23T12:28:55-07:00",
          "tree_id": "fcac1dd25291af76961bb64f59fbde2c5db9d5ba",
          "url": "https://github.com/cocotb/cocotb/commit/c91ad618327e1a03346cfcdc782992b267f32072"
        },
        "date": 1740339151564,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1463099705303474,
            "unit": "iter/sec",
            "range": "stddev: 0.04473835724040481",
            "extra": "mean: 6.834804192599995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2110794535502276,
            "unit": "iter/sec",
            "range": "stddev: 0.03995030952065595",
            "extra": "mean: 4.737552533799999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b4050d5d8406de8c6216b08ed627f108b8fd63e7",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.9.6 → v0.9.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.9.6...v0.9.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.02.17 → 2025.02.24](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.02.17...2025.02.24)",
          "timestamp": "2025-02-24T13:27:37-07:00",
          "tree_id": "9d8579fb04d1cb1c9219316e6de437cf05c4c104",
          "url": "https://github.com/cocotb/cocotb/commit/b4050d5d8406de8c6216b08ed627f108b8fd63e7"
        },
        "date": 1740429079774,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1455630751788214,
            "unit": "iter/sec",
            "range": "stddev: 0.04254237466768079",
            "extra": "mean: 6.869874099399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2105984620874449,
            "unit": "iter/sec",
            "range": "stddev: 0.03018836351667601",
            "extra": "mean: 4.748372756799995 sec\nrounds: 5"
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
          "id": "cb56213db8a87d001642b23ed752bb8917c302e0",
          "message": "Rename PYGPI_ENTRY_POINT to PYGPI_USERS",
          "timestamp": "2025-02-26T00:02:13-07:00",
          "tree_id": "7d91f2f494bfc3cd526e37d087074c3df55a5912",
          "url": "https://github.com/cocotb/cocotb/commit/cb56213db8a87d001642b23ed752bb8917c302e0"
        },
        "date": 1740553536336,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14545546909994803,
            "unit": "iter/sec",
            "range": "stddev: 0.05259820195387932",
            "extra": "mean: 6.87495634359999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2084133824473063,
            "unit": "iter/sec",
            "range": "stddev: 0.04475267818352485",
            "extra": "mean: 4.7981563768 sec\nrounds: 5"
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
          "id": "62c9f4553db6a4e1e2c012715b786351bb08f785",
          "message": "Reimplement Queues\n\nThe PIMPL idiom was not necessary as soon as we moved to AbstractQueue\nand making Queue a distinct type instead of a supertype of LifoQueue and\nPriorityQueue.\n\nAdditionally, new version of pylance *hate* the code that was there\nbecause it couldn't deduce whether the use of `T` in the Impl class was\na *use* of `T` or an attempt at declaring a new and indepdent generic\nclass.\n\nSo we moved to a more typical ABC style implementation.",
          "timestamp": "2025-02-26T14:14:26-07:00",
          "tree_id": "869c59934b489e9723a20efef426b3dd9f5a47f3",
          "url": "https://github.com/cocotb/cocotb/commit/62c9f4553db6a4e1e2c012715b786351bb08f785"
        },
        "date": 1740604704005,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14497097464558886,
            "unit": "iter/sec",
            "range": "stddev: 0.022304427362178338",
            "extra": "mean: 6.8979325168000285 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20946958664395302,
            "unit": "iter/sec",
            "range": "stddev: 0.02544095723756008",
            "extra": "mean: 4.773962731400024 sec\nrounds: 5"
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
          "id": "b65972ce9bb4ca6adf0a24e66480b1b2a5f3901f",
          "message": "Use assert_takes in remaining parts of test_cocotb",
          "timestamp": "2025-02-26T14:15:03-07:00",
          "tree_id": "f576c2c548d5074709ef8b0adc29a3e607e7ceea",
          "url": "https://github.com/cocotb/cocotb/commit/b65972ce9bb4ca6adf0a24e66480b1b2a5f3901f"
        },
        "date": 1740604925180,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1456522704264168,
            "unit": "iter/sec",
            "range": "stddev: 0.027978464291538066",
            "extra": "mean: 6.865667092400031 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20886938875215225,
            "unit": "iter/sec",
            "range": "stddev: 0.050410038532023985",
            "extra": "mean: 4.787680980799996 sec\nrounds: 5"
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
          "id": "7d3694f0329fc437e115472dce292116cff463e1",
          "message": "Prevent calling _cleanup twice",
          "timestamp": "2025-02-26T14:14:40-07:00",
          "tree_id": "d879f9acf295bfe6b1a863223783755bdf606e6d",
          "url": "https://github.com/cocotb/cocotb/commit/7d3694f0329fc437e115472dce292116cff463e1"
        },
        "date": 1740604937738,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14503498946480842,
            "unit": "iter/sec",
            "range": "stddev: 0.08030417259697113",
            "extra": "mean: 6.894887941800016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20982676349351492,
            "unit": "iter/sec",
            "range": "stddev: 0.019385900362954952",
            "extra": "mean: 4.765836270599993 sec\nrounds: 5"
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
          "id": "38105974bf3cde8dba1275b82d040cb55f94dbb7",
          "message": "Fix leak if handle_gpi_callback fails\n\nMake pygpi PythonCallback take ownership of Python objects. This makes\ndeterministic cleanup easier.",
          "timestamp": "2025-02-26T15:45:00-07:00",
          "tree_id": "c0b7f1911815a8a2a95e3857600f39af76c8241d",
          "url": "https://github.com/cocotb/cocotb/commit/38105974bf3cde8dba1275b82d040cb55f94dbb7"
        },
        "date": 1740610100480,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14690064975835587,
            "unit": "iter/sec",
            "range": "stddev: 0.02754772462337721",
            "extra": "mean: 6.807321830399997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.211318949385227,
            "unit": "iter/sec",
            "range": "stddev: 0.017437761163329398",
            "extra": "mean: 4.732183284599978 sec\nrounds: 5"
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
          "id": "66186dac6eaa1701f7092b852f7e27084e9c0304",
          "message": "Run COCOTB_PDB_ON_EXCEPTION on any failure with exception",
          "timestamp": "2025-02-26T16:56:23-07:00",
          "tree_id": "1bc6c7cb5f1c9c3070f1406642d83850f92c38a5",
          "url": "https://github.com/cocotb/cocotb/commit/66186dac6eaa1701f7092b852f7e27084e9c0304"
        },
        "date": 1740614402388,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14604025585141958,
            "unit": "iter/sec",
            "range": "stddev: 0.009449676659058414",
            "extra": "mean: 6.847427061600013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21056683109086644,
            "unit": "iter/sec",
            "range": "stddev: 0.008166280492092733",
            "extra": "mean: 4.749086049400001 sec\nrounds: 5"
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
          "id": "f998c45d222e509ab11cf49e6505899e1a6397fe",
          "message": "Always emit interface issues at log level DEBUG",
          "timestamp": "2025-02-26T16:56:44-07:00",
          "tree_id": "ace891c4deafb14fdfb72dc744709e2deaf8605c",
          "url": "https://github.com/cocotb/cocotb/commit/f998c45d222e509ab11cf49e6505899e1a6397fe"
        },
        "date": 1740614648468,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14258053337969753,
            "unit": "iter/sec",
            "range": "stddev: 0.03762443198041908",
            "extra": "mean: 7.013580159200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20644468341987296,
            "unit": "iter/sec",
            "range": "stddev: 0.05312572674376428",
            "extra": "mean: 4.843912584400016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Krause.Markus@gmx.com",
            "name": "Markus Krause",
            "username": "markusdd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03670d5d24bbb707784b13167e950b6405ada6eb",
          "message": "Undeprecate-len-on-scalars (#4520)\n\nUn-deprecate len on scalars",
          "timestamp": "2025-03-02T20:15:55+01:00",
          "tree_id": "05038ca1f5da7b8f5736d64fd4b8775a40a68bf5",
          "url": "https://github.com/cocotb/cocotb/commit/03670d5d24bbb707784b13167e950b6405ada6eb"
        },
        "date": 1740943153861,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14304787739974195,
            "unit": "iter/sec",
            "range": "stddev: 0.04280745933709424",
            "extra": "mean: 6.990666469000007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20692413035246301,
            "unit": "iter/sec",
            "range": "stddev: 0.07399267314536986",
            "extra": "mean: 4.832689151800014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f72e98f6f3088f213fd176d8a70ca9cae64a7246",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.9.7 → v0.9.9](https://github.com/astral-sh/ruff-pre-commit/compare/v0.9.7...v0.9.9)",
          "timestamp": "2025-03-03T14:16:07-07:00",
          "tree_id": "f54dbc89cf90c7594a47ee0fc56b680d82a66eba",
          "url": "https://github.com/cocotb/cocotb/commit/f72e98f6f3088f213fd176d8a70ca9cae64a7246"
        },
        "date": 1741036774325,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14258436398932492,
            "unit": "iter/sec",
            "range": "stddev: 0.07129757091292009",
            "extra": "mean: 7.013391735400023 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20482397357210658,
            "unit": "iter/sec",
            "range": "stddev: 0.09046339089434255",
            "extra": "mean: 4.882240992400034 sec\nrounds: 5"
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
          "id": "1e6a085f0ab29eb284e3c1ac2116504a6f19a657",
          "message": "Prevent confusion due to difference in docs/master branch\n\n* The tutorial from the README was deleted and a link to the stable\n  quickstart guide was added.\n* The extension links were moved to the Wiki\n* The \"latest\" docs in RTD was renamed to \"development\"\n* A redirect from \"latest\" to \"development\" was added to RTD\n* Internal links were updated to \"development\"",
          "timestamp": "2025-03-03T15:57:48-07:00",
          "tree_id": "9ca28e3747134604cc9c9b1e19379b5b617ea1a8",
          "url": "https://github.com/cocotb/cocotb/commit/1e6a085f0ab29eb284e3c1ac2116504a6f19a657"
        },
        "date": 1741042874399,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14370732483861828,
            "unit": "iter/sec",
            "range": "stddev: 0.045331040734734734",
            "extra": "mean: 6.958587539799998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20747549149873487,
            "unit": "iter/sec",
            "range": "stddev: 0.023851118944748673",
            "extra": "mean: 4.819846396199995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Krause.Markus@gmx.com",
            "name": "Markus Krause",
            "username": "markusdd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3864002c7b168454a436c2ca480063b0d1af02d",
          "message": "Improve get_handle_by_name (#4517)\n\nMake get_handle_by_name() accept an optional enum GpiDiscovery for the discovery method.\n\nThis allows for queries that explicitly should NOT cross language barriers when testing for presence\nof a signal.\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2025-03-04T08:03:30+01:00",
          "tree_id": "b10da27b12f624114156d2636714ffb4ba49e293",
          "url": "https://github.com/cocotb/cocotb/commit/b3864002c7b168454a436c2ca480063b0d1af02d"
        },
        "date": 1741072023852,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14315165240814445,
            "unit": "iter/sec",
            "range": "stddev: 0.0571858735933812",
            "extra": "mean: 6.985598721199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20709783129182663,
            "unit": "iter/sec",
            "range": "stddev: 0.06589857407207858",
            "extra": "mean: 4.828635789000009 sec\nrounds: 5"
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
          "id": "038045b0be95d9a20a1c3200de14f5855b0413dd",
          "message": "Update Force/Release tests and docs",
          "timestamp": "2025-03-04T14:53:47-07:00",
          "tree_id": "97882444008ccb8a2ba259f96f0116cebca5d604",
          "url": "https://github.com/cocotb/cocotb/commit/038045b0be95d9a20a1c3200de14f5855b0413dd"
        },
        "date": 1741125429224,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1410181812354473,
            "unit": "iter/sec",
            "range": "stddev: 0.054588974827411305",
            "extra": "mean: 7.091284196400011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20632825052546513,
            "unit": "iter/sec",
            "range": "stddev: 0.01910100097327245",
            "extra": "mean: 4.846646048000002 sec\nrounds: 5"
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
          "id": "029c679633ba0cc76bf500424d2cd9051144a649",
          "message": "Split Test logic out of RegressionManager and Scheduler\n\n* Move Test into new `cocotb._test` module.\n* Make `cocotb.start_soon` register tasks with a task queue in the Test.\n* When Test ends only kill Tasks associated with the Test and not *all*\n  Tasks.\n* Move cocotb.start_soon, cocotb.create_task, and cocotb.start to the\n  new module as they depend upon test-specific knowledge.\n* Remove test_complete_cb and test termination logic from Scheduler.",
          "timestamp": "2025-03-05T22:56:52-07:00",
          "tree_id": "c6a5260c810f446ce0ee09cd16187390d2368224",
          "url": "https://github.com/cocotb/cocotb/commit/029c679633ba0cc76bf500424d2cd9051144a649"
        },
        "date": 1741240818862,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14213242068976545,
            "unit": "iter/sec",
            "range": "stddev: 0.036579002680063984",
            "extra": "mean: 7.0356924559999925 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20654152498415812,
            "unit": "iter/sec",
            "range": "stddev: 0.030313769339051094",
            "extra": "mean: 4.841641408800001 sec\nrounds: 5"
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
          "id": "75227a6ab7446954006ec0590c471933172d338e",
          "message": "Fix incorrect autodoc directive",
          "timestamp": "2025-03-08T07:26:50-07:00",
          "tree_id": "4ed15d84164d48567cd43770a957bd4d8293f850",
          "url": "https://github.com/cocotb/cocotb/commit/75227a6ab7446954006ec0590c471933172d338e"
        },
        "date": 1741444211970,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14210182074652236,
            "unit": "iter/sec",
            "range": "stddev: 0.017916972189456384",
            "extra": "mean: 7.037207509000007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2066494882515227,
            "unit": "iter/sec",
            "range": "stddev: 0.027464325092359125",
            "extra": "mean: 4.839111911000009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Krause.Markus@gmx.com",
            "name": "Markus Krause",
            "username": "markusdd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7248e97966dcd387750b781cb33a715da6a0c666",
          "message": "Move more GPI logs to DEBUG level\n\n* move those logs to debug as per issue #4530\n\n* move vhpi callback wanring to debug\n\n* move all callback warnings to debug\n\ncocotb tries to handle them gracefully and for some simulators every single occurrence will cause log spam as they have basic issues. if real problems do occur like crashes etc. debug will make them visible.\n\n* move iterate message about NULL return to DEBUG",
          "timestamp": "2025-03-08T19:19:53-05:00",
          "tree_id": "97c9a6e3d1c502a197e94e74bc28935c4f448ad9",
          "url": "https://github.com/cocotb/cocotb/commit/7248e97966dcd387750b781cb33a715da6a0c666"
        },
        "date": 1741479824757,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14173122101117605,
            "unit": "iter/sec",
            "range": "stddev: 0.03258055985421798",
            "extra": "mean: 7.055608445799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20591482478121564,
            "unit": "iter/sec",
            "range": "stddev: 0.013920109827670207",
            "extra": "mean: 4.85637690760002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "csantosb@inventati.org",
            "name": "Cayetano Santos",
            "username": "csantosb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "084fb6be2a3af615611a8be8b1fed06edfb978c2",
          "message": "Add installation instructions for Guix (#4535)",
          "timestamp": "2025-03-09T20:38:09+01:00",
          "tree_id": "7e59dfebfe619781e8d6ac446dd51da8ab172212",
          "url": "https://github.com/cocotb/cocotb/commit/084fb6be2a3af615611a8be8b1fed06edfb978c2"
        },
        "date": 1741549327550,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1414495266288957,
            "unit": "iter/sec",
            "range": "stddev: 0.03894022713010877",
            "extra": "mean: 7.069659572799992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20666295800013584,
            "unit": "iter/sec",
            "range": "stddev: 0.020296816338599755",
            "extra": "mean: 4.838796510400004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "724433dea2dd1d4cfe2f457b9b6c4d1ffc6c05df",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.9.9 → v0.9.10](https://github.com/astral-sh/ruff-pre-commit/compare/v0.9.9...v0.9.10)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.02.24 → 2025.03.10](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.02.24...2025.03.10)",
          "timestamp": "2025-03-10T19:14:21-04:00",
          "tree_id": "8b8306d8b8a2868a06a9baf2a0807da6e2d00fb8",
          "url": "https://github.com/cocotb/cocotb/commit/724433dea2dd1d4cfe2f457b9b6c4d1ffc6c05df"
        },
        "date": 1741648706509,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1414583809413046,
            "unit": "iter/sec",
            "range": "stddev: 0.0561033797726139",
            "extra": "mean: 7.069217061200004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20568082913091285,
            "unit": "iter/sec",
            "range": "stddev: 0.045185856420687766",
            "extra": "mean: 4.861901832199999 sec\nrounds: 5"
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
          "id": "f36a774cfc14186876963f18d4fb5128f30aafb6",
          "message": "Don't export BIN_DIR in Makefiles\n\nIt not useful to cocotb tests exported and causes issues when setting\nthe CMD_BIN as the first Makefile invocation will set it, which will\nthen trigger the branch where BIN_DIR is assumed set and try to\nrecompute the CMD to $BIN_DIR/$BIN_DIR/simulator.",
          "timestamp": "2025-03-11T09:07:11-04:00",
          "tree_id": "1c54c5b357b985b89429605321196562e26e288f",
          "url": "https://github.com/cocotb/cocotb/commit/f36a774cfc14186876963f18d4fb5128f30aafb6"
        },
        "date": 1741698637979,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14195394957372506,
            "unit": "iter/sec",
            "range": "stddev: 0.040190096071025534",
            "extra": "mean: 7.044538056199985 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20375330119871085,
            "unit": "iter/sec",
            "range": "stddev: 0.03405450142444951",
            "extra": "mean: 4.9078959413999765 sec\nrounds: 5"
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
          "id": "a0b3ca9f4efa00a12b0637edef900a06a668b1c3",
          "message": "Task.cancel() now causes CancelledError to be thrown",
          "timestamp": "2025-03-11T10:00:07-04:00",
          "tree_id": "a9d240ef5026635572c27726d0adc7b82230f99b",
          "url": "https://github.com/cocotb/cocotb/commit/a0b3ca9f4efa00a12b0637edef900a06a668b1c3"
        },
        "date": 1741701826651,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14157797427445035,
            "unit": "iter/sec",
            "range": "stddev: 0.05853030748245445",
            "extra": "mean: 7.063245572799974 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20485124379258474,
            "unit": "iter/sec",
            "range": "stddev: 0.031580189588870336",
            "extra": "mean: 4.8815910584 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilbertoabram@tersatech.com",
            "name": "Gilberto Abram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b35f8149bf8c9b13efe5c6f31427043d9d96a0ad",
          "message": "Fix converting log level to string",
          "timestamp": "2025-03-11T11:44:39-04:00",
          "tree_id": "eb9c4619137bd7d8116c76344650c52fe0ad8ae8",
          "url": "https://github.com/cocotb/cocotb/commit/b35f8149bf8c9b13efe5c6f31427043d9d96a0ad"
        },
        "date": 1741708100399,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14171572678228458,
            "unit": "iter/sec",
            "range": "stddev: 0.033590562023803526",
            "extra": "mean: 7.056379857799993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20577202158179325,
            "unit": "iter/sec",
            "range": "stddev: 0.060060570323236875",
            "extra": "mean: 4.859747172200014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b6d68ed552498b4665f64297ab24392d87f34446",
          "message": "Simplify typing on ClockCycles",
          "timestamp": "2025-03-14T12:43:08-04:00",
          "tree_id": "e7087a4a42fab2c2fbfb849078b5bfd6fb11af2e",
          "url": "https://github.com/cocotb/cocotb/commit/b6d68ed552498b4665f64297ab24392d87f34446"
        },
        "date": 1741970796819,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14125086686278518,
            "unit": "iter/sec",
            "range": "stddev: 0.04672206822583285",
            "extra": "mean: 7.07960256959999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20445183828652175,
            "unit": "iter/sec",
            "range": "stddev: 0.012080306029287273",
            "extra": "mean: 4.891127457599993 sec\nrounds: 5"
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
          "id": "943b9d90648024697215a63200d23df635855132",
          "message": "Use ValueError instead of OverflowError in sim objects (#4543)",
          "timestamp": "2025-03-14T12:54:57-04:00",
          "tree_id": "4bf9332d3ad13f9981c5100637680286a3821228",
          "url": "https://github.com/cocotb/cocotb/commit/943b9d90648024697215a63200d23df635855132"
        },
        "date": 1741971500697,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14260712938363812,
            "unit": "iter/sec",
            "range": "stddev: 0.04170360612669421",
            "extra": "mean: 7.0122721375999735 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2063715931386794,
            "unit": "iter/sec",
            "range": "stddev: 0.04323306240415275",
            "extra": "mean: 4.845628144800003 sec\nrounds: 5"
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
          "id": "3568762d5a71e3ef33c13e07ff77e0987f9b9cda",
          "message": "Fix documentation on ResolveX enum",
          "timestamp": "2025-03-14T21:30:56-04:00",
          "tree_id": "a5cff3a5c9a5d2f3ee5e04408a7eefee6f1b19e8",
          "url": "https://github.com/cocotb/cocotb/commit/3568762d5a71e3ef33c13e07ff77e0987f9b9cda"
        },
        "date": 1742002474397,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14659516895304636,
            "unit": "iter/sec",
            "range": "stddev: 0.028085497270872225",
            "extra": "mean: 6.82150719660001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21375798837773288,
            "unit": "iter/sec",
            "range": "stddev: 0.023872902878562093",
            "extra": "mean: 4.678187737399992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4016907cd4cfbcf6d55d137a408d38c8695d2ce9",
          "message": "Update CI to test unpacked arrays",
          "timestamp": "2025-03-16T14:43:18-06:00",
          "tree_id": "17643a91893a63db3625c49b334b5feacd1de63e",
          "url": "https://github.com/cocotb/cocotb/commit/4016907cd4cfbcf6d55d137a408d38c8695d2ce9"
        },
        "date": 1742158002344,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14608828810993052,
            "unit": "iter/sec",
            "range": "stddev: 0.04581108582362344",
            "extra": "mean: 6.845175701199992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21400031183740237,
            "unit": "iter/sec",
            "range": "stddev: 0.022635824110127878",
            "extra": "mean: 4.672890387000001 sec\nrounds: 5"
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
          "id": "e3e7f8083e28182cba40fdd16df1e3768c30d1fb",
          "message": "Actually run these tests =/",
          "timestamp": "2025-03-16T16:22:50-06:00",
          "tree_id": "5160b1c84c9b0de8a1e1c32661121276aa055056",
          "url": "https://github.com/cocotb/cocotb/commit/e3e7f8083e28182cba40fdd16df1e3768c30d1fb"
        },
        "date": 1742163971948,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14613535214363843,
            "unit": "iter/sec",
            "range": "stddev: 0.052741392515246274",
            "extra": "mean: 6.842971158800003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21365637136547566,
            "unit": "iter/sec",
            "range": "stddev: 0.041609463931176274",
            "extra": "mean: 4.680412728200008 sec\nrounds: 5"
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
          "id": "963329bec224faefe8268a560ea8e2808812c16c",
          "message": "Add Icarus 10.3 to extended CI and update Icarus runs to Ubuntu 22.04",
          "timestamp": "2025-03-17T15:45:25-06:00",
          "tree_id": "6116989da8d33013890afc6bcf4d9bd0790de1ab",
          "url": "https://github.com/cocotb/cocotb/commit/963329bec224faefe8268a560ea8e2808812c16c"
        },
        "date": 1742248194786,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.147450463139725,
            "unit": "iter/sec",
            "range": "stddev: 0.05329332157361624",
            "extra": "mean: 6.781938684400018 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21427119491140872,
            "unit": "iter/sec",
            "range": "stddev: 0.030915323149498387",
            "extra": "mean: 4.666982887799986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ee2fdced9a1020f9cb20c29560c55663e959a15e",
          "message": "Fix PLW1508 issue",
          "timestamp": "2025-03-17T17:04:47-06:00",
          "tree_id": "038ed83fb2ddf40e52a27e2622da0ddd5624778b",
          "url": "https://github.com/cocotb/cocotb/commit/ee2fdced9a1020f9cb20c29560c55663e959a15e"
        },
        "date": 1742252882996,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14654517810707549,
            "unit": "iter/sec",
            "range": "stddev: 0.04163386995048463",
            "extra": "mean: 6.823834212199972 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21326065721325463,
            "unit": "iter/sec",
            "range": "stddev: 0.04743523376108765",
            "extra": "mean: 4.689097431599999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5b61780a32a111c0ae962e3c4420b8c5cbc284c1",
          "message": "Check for immutable signals with Edge triggers",
          "timestamp": "2025-03-18T09:07:48-06:00",
          "tree_id": "c9384f0520bc5bc23811806b43f7e78cf83cd0fb",
          "url": "https://github.com/cocotb/cocotb/commit/5b61780a32a111c0ae962e3c4420b8c5cbc284c1"
        },
        "date": 1742310671532,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14699229180912063,
            "unit": "iter/sec",
            "range": "stddev: 0.06177072226289711",
            "extra": "mean: 6.803077819199984 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21373642448980112,
            "unit": "iter/sec",
            "range": "stddev: 0.05111743208182095",
            "extra": "mean: 4.6786597201999935 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ed129d25a7086e452c7dc6023990c2ec03347675",
          "message": "Plumb HierarchyObject._get into child object caching",
          "timestamp": "2025-03-18T13:57:36-06:00",
          "tree_id": "d6e0680ead49130afbf61ff8efc0382840f5f20a",
          "url": "https://github.com/cocotb/cocotb/commit/ed129d25a7086e452c7dc6023990c2ec03347675"
        },
        "date": 1742328052920,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14573818655694165,
            "unit": "iter/sec",
            "range": "stddev: 0.05818316624671029",
            "extra": "mean: 6.861619618199984 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21230097307308526,
            "unit": "iter/sec",
            "range": "stddev: 0.01860863928474656",
            "extra": "mean: 4.710294001600016 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "04503e8974a5fb4abacfebe450563fa7af461211",
          "message": "Use DeprecationWarning instead of FutureWarning in LogicArray.__bool__",
          "timestamp": "2025-03-18T14:33:26-06:00",
          "tree_id": "020114a08d08460cf3c95d4c993f05e132765df9",
          "url": "https://github.com/cocotb/cocotb/commit/04503e8974a5fb4abacfebe450563fa7af461211"
        },
        "date": 1742330205932,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14384564655232893,
            "unit": "iter/sec",
            "range": "stddev: 0.03714667049214836",
            "extra": "mean: 6.951896174600006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20859308204355892,
            "unit": "iter/sec",
            "range": "stddev: 0.04236691561212924",
            "extra": "mean: 4.794022841999992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c47086ec5feee2cf075b1317e5d8aac09cb9dcfa",
          "message": "Cleanup failing Tasks in First and Combine if Task is cancelled",
          "timestamp": "2025-03-19T09:01:30-06:00",
          "tree_id": "cb843ff6874ba21f4111128a3794fe394f5404dc",
          "url": "https://github.com/cocotb/cocotb/commit/c47086ec5feee2cf075b1317e5d8aac09cb9dcfa"
        },
        "date": 1742396706684,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14342667869953626,
            "unit": "iter/sec",
            "range": "stddev: 0.1310541173149765",
            "extra": "mean: 6.972203561200035 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2104379331689031,
            "unit": "iter/sec",
            "range": "stddev: 0.04074961125844023",
            "extra": "mean: 4.7519949704000055 sec\nrounds: 5"
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
          "id": "2efcbfbafb693b90d25d9d01b8d55863e86ba4d2",
          "message": "Introduce EmptyTrigger to replace some uses of NullTrigger\n\nAlso improve documentation on NullTrigger to suggest alternatives.",
          "timestamp": "2025-03-19T09:01:57-06:00",
          "tree_id": "01f10c66540c5ffd4eaf80f4498928647b47929b",
          "url": "https://github.com/cocotb/cocotb/commit/2efcbfbafb693b90d25d9d01b8d55863e86ba4d2"
        },
        "date": 1742396915405,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14509646353204791,
            "unit": "iter/sec",
            "range": "stddev: 0.03666968440110991",
            "extra": "mean: 6.891966734800031 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21125101266415508,
            "unit": "iter/sec",
            "range": "stddev: 0.048282953960879435",
            "extra": "mean: 4.733705118800026 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e2d675586b5ffec47758f759788d88df8a81bd57",
          "message": "Deprecate Event name\n\nThis is not supported by asyncio.Event.",
          "timestamp": "2025-03-19T09:59:41-06:00",
          "tree_id": "3f4939bc27f05c00a6c6eb40ae5a4a27d3da8c9b",
          "url": "https://github.com/cocotb/cocotb/commit/e2d675586b5ffec47758f759788d88df8a81bd57"
        },
        "date": 1742400185857,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14583527201822016,
            "unit": "iter/sec",
            "range": "stddev: 0.021167593271253345",
            "extra": "mean: 6.857051700599999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21109873526198944,
            "unit": "iter/sec",
            "range": "stddev: 0.02426003763529127",
            "extra": "mean: 4.737119806800001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3fdedd99ea87589b98a3de02e9aa3ed7900e68e2",
          "message": "Provide friendlier message for when people try to index packed objects",
          "timestamp": "2025-03-19T10:35:17-06:00",
          "tree_id": "a810519e0bc1bb61fb3b2700a24547c594f26c10",
          "url": "https://github.com/cocotb/cocotb/commit/3fdedd99ea87589b98a3de02e9aa3ed7900e68e2"
        },
        "date": 1742402331672,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14602776073222015,
            "unit": "iter/sec",
            "range": "stddev: 0.021491237060244524",
            "extra": "mean: 6.848012973599998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21107622912535726,
            "unit": "iter/sec",
            "range": "stddev: 0.04276361660366906",
            "extra": "mean: 4.737624905200027 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c0e559f94bbdaaab4f3690ce123ec37f38c662db",
          "message": "Change cocotb.sim_phase to cocotb.triggers.current_gpi_triggers",
          "timestamp": "2025-03-19T11:24:30-06:00",
          "tree_id": "80f3ab7414103d2c6e31c9a1920bb675425182ea",
          "url": "https://github.com/cocotb/cocotb/commit/c0e559f94bbdaaab4f3690ce123ec37f38c662db"
        },
        "date": 1742405276769,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1440096801085763,
            "unit": "iter/sec",
            "range": "stddev: 0.025161033561944542",
            "extra": "mean: 6.943977649600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21096150727020482,
            "unit": "iter/sec",
            "range": "stddev: 0.030227441211259608",
            "extra": "mean: 4.74020124780003 sec\nrounds: 5"
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
          "id": "1f3821776008e30ae0dd67c4c6f129441cf03326",
          "message": "Introduce TaskStarted trigger\n\n* Refactored all the Task triggers into a base class.\n* Updated cocotb.start docs to refrence TaskStarted instead",
          "timestamp": "2025-03-19T20:29:32-06:00",
          "tree_id": "4c9ff9dbe3f226a665586ef393b1b84730918070",
          "url": "https://github.com/cocotb/cocotb/commit/1f3821776008e30ae0dd67c4c6f129441cf03326"
        },
        "date": 1742437980105,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14504707982240223,
            "unit": "iter/sec",
            "range": "stddev: 0.03156010076777168",
            "extra": "mean: 6.894313220399988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21168106785143592,
            "unit": "iter/sec",
            "range": "stddev: 0.0487689492928471",
            "extra": "mean: 4.7240880355999995 sec\nrounds: 5"
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
          "id": "2aa4957bed1651bbbe65d92b10030fedc52790ab",
          "message": "Switch private CI to Ubuntu 22.04",
          "timestamp": "2025-03-23T08:16:02+01:00",
          "tree_id": "2dbba0d6bcdd41d1591a75fdcf351cf287f3d5ed",
          "url": "https://github.com/cocotb/cocotb/commit/2aa4957bed1651bbbe65d92b10030fedc52790ab"
        },
        "date": 1742714404382,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14349697044941342,
            "unit": "iter/sec",
            "range": "stddev: 0.02173104965749613",
            "extra": "mean: 6.96878823899998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20882600154421158,
            "unit": "iter/sec",
            "range": "stddev: 0.018253010239334705",
            "extra": "mean: 4.788675704200012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b28529611a04bc4913e89a0aff22a290a7566a9e",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.0 → v0.11.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.0...v0.11.2)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.03.10 → 2025.03.24](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.03.10...2025.03.24)",
          "timestamp": "2025-03-24T14:41:13-06:00",
          "tree_id": "76ab5cda208c860d8a29751c637bd9bf994ded88",
          "url": "https://github.com/cocotb/cocotb/commit/b28529611a04bc4913e89a0aff22a290a7566a9e"
        },
        "date": 1742849078410,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14469098934644847,
            "unit": "iter/sec",
            "range": "stddev: 0.03145242344357742",
            "extra": "mean: 6.911280408800008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2101098041635824,
            "unit": "iter/sec",
            "range": "stddev: 0.023261369682221478",
            "extra": "mean: 4.759416172800025 sec\nrounds: 5"
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
          "id": "c0b2d91cfe504b98bc4c9276541db99cd82f5d7d",
          "message": "Shorten license headers\n\nUse new-style license headers across the whole code base, which rely on\nthe SPDX identifier and a reference to the LICENSE file for the full\nlicense text.\n\nKeep existing Copyright lines untouched.",
          "timestamp": "2025-03-25T09:12:37+01:00",
          "tree_id": "36bdf6fa158f659b3c2c0366ec77041c1bf37e26",
          "url": "https://github.com/cocotb/cocotb/commit/c0b2d91cfe504b98bc4c9276541db99cd82f5d7d"
        },
        "date": 1742890562101,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14428432859740808,
            "unit": "iter/sec",
            "range": "stddev: 0.06350870385603093",
            "extra": "mean: 6.930759630800014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20949135902180288,
            "unit": "iter/sec",
            "range": "stddev: 0.057332202400722246",
            "extra": "mean: 4.773466574799988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "xwzheng@ustc.edu.cn",
            "name": "xwzheng",
            "username": "xwzheng1020"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b53e21e61c8710752028147b9f31380c89d9552f",
          "message": "Update Makefile.icarus\n\nI found that it can directly enter the gdb debugging console with `make debug`, but it seems that the command is missing the `-M` option",
          "timestamp": "2025-03-25T07:32:23-06:00",
          "tree_id": "a418d3df3dfb7b637fe0f445ca92ac3757435361",
          "url": "https://github.com/cocotb/cocotb/commit/b53e21e61c8710752028147b9f31380c89d9552f"
        },
        "date": 1742909760821,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14462814121910586,
            "unit": "iter/sec",
            "range": "stddev: 0.07105225525136688",
            "extra": "mean: 6.9142837042 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.21040650464696808,
            "unit": "iter/sec",
            "range": "stddev: 0.050231767421970226",
            "extra": "mean: 4.7527047781999725 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilberto@hudson-trading.com",
            "name": "Gilberto Abram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "340449c0f06a900760c2d654e459768ea5eb3a24",
          "message": "Fix bounds check in LogicArray's from_signed() (#4580)",
          "timestamp": "2025-03-26T08:21:56-06:00",
          "tree_id": "6fa371e20d0b7a4eb0ebbf07bf332b2cc2c29159",
          "url": "https://github.com/cocotb/cocotb/commit/340449c0f06a900760c2d654e459768ea5eb3a24"
        },
        "date": 1742999139517,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14293284811407672,
            "unit": "iter/sec",
            "range": "stddev: 0.19339811409116986",
            "extra": "mean: 6.996292407200099 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2105959547109874,
            "unit": "iter/sec",
            "range": "stddev: 0.028735177147610595",
            "extra": "mean: 4.748429291399998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilberto@hudson-trading.com",
            "name": "Gilberto Abram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f25dd4c4bfa3710b9d6e012db95b0057100a7cb",
          "message": "Close coroutine in Task only if unstarted",
          "timestamp": "2025-03-26T13:10:13-06:00",
          "tree_id": "c3e4905b79da98e8282bed0f0f0415b736117036",
          "url": "https://github.com/cocotb/cocotb/commit/3f25dd4c4bfa3710b9d6e012db95b0057100a7cb"
        },
        "date": 1743016430382,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1416825811637766,
            "unit": "iter/sec",
            "range": "stddev: 0.015368914751684901",
            "extra": "mean: 7.058030646999998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20732752761377837,
            "unit": "iter/sec",
            "range": "stddev: 0.035644313907867306",
            "extra": "mean: 4.823286186399992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teo.biton@gmail.com",
            "name": "Téo Biton",
            "username": "teobiton"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8194d4d689677c19cdc25f5128ae8621faa1c533",
          "message": "Add support for DSim simulator\n\nSupport DSim in the Makefile flow, with split compile and run\nphases and with wave generation support, and a Python runner\nimplementation.\n\nCloses #3990",
          "timestamp": "2025-04-02T08:56:36-06:00",
          "tree_id": "6aee3364909ac1becea332913457a23ceb7456b6",
          "url": "https://github.com/cocotb/cocotb/commit/8194d4d689677c19cdc25f5128ae8621faa1c533"
        },
        "date": 1743606001902,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1440814961264458,
            "unit": "iter/sec",
            "range": "stddev: 0.025275904615814433",
            "extra": "mean: 6.94051649160001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20960788119918564,
            "unit": "iter/sec",
            "range": "stddev: 0.032117200889699396",
            "extra": "mean: 4.7708129783999995 sec\nrounds: 5"
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
          "id": "63054b8847526fcc036bcfa5bd350540baf48838",
          "message": "Bump actions/create-github-app-token from 1 to 2\n\nBumps [actions/create-github-app-token](https://github.com/actions/create-github-app-token) from 1 to 2.\n- [Release notes](https://github.com/actions/create-github-app-token/releases)\n- [Commits](https://github.com/actions/create-github-app-token/compare/v1...v2)\n\n---\nupdated-dependencies:\n- dependency-name: actions/create-github-app-token\n  dependency-version: '2'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2025-04-07T00:18:43-06:00",
          "tree_id": "b4c74017b2928351724011b2447ff21eb1a64f4a",
          "url": "https://github.com/cocotb/cocotb/commit/63054b8847526fcc036bcfa5bd350540baf48838"
        },
        "date": 1744006927662,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14456480105485994,
            "unit": "iter/sec",
            "range": "stddev: 0.04397682738639343",
            "extra": "mean: 6.917313154399989 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20934708796250173,
            "unit": "iter/sec",
            "range": "stddev: 0.038074470334642535",
            "extra": "mean: 4.776756198199996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "18ff5aefb20b00bad7252644fa93a2216adb5e8e",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.2 → v0.11.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.2...v0.11.4)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.03.24 → 2025.04.07](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.03.24...2025.04.07)",
          "timestamp": "2025-04-07T15:41:01-06:00",
          "tree_id": "37dc0a29c81635f312313cb2b577f5d09f9cb921",
          "url": "https://github.com/cocotb/cocotb/commit/18ff5aefb20b00bad7252644fa93a2216adb5e8e"
        },
        "date": 1744062272704,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1435320200276959,
            "unit": "iter/sec",
            "range": "stddev: 0.06219987437169089",
            "extra": "mean: 6.967086506599992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20829460919574797,
            "unit": "iter/sec",
            "range": "stddev: 0.05529403800708611",
            "extra": "mean: 4.800892370000009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "7fb96c1a6c740e953be93ff69b279f41cb08526c",
          "message": "Update version of NVC used in benchmark",
          "timestamp": "2025-04-09T20:11:55+02:00",
          "tree_id": "ed0808fe5b17285957252d4690657ccbd8ff62c7",
          "url": "https://github.com/cocotb/cocotb/commit/7fb96c1a6c740e953be93ff69b279f41cb08526c"
        },
        "date": 1744222526637,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13805006676089773,
            "unit": "iter/sec",
            "range": "stddev: 0.026913381939985822",
            "extra": "mean: 7.243748760599999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20415982227344542,
            "unit": "iter/sec",
            "range": "stddev: 0.025847532629284353",
            "extra": "mean: 4.898123386200007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f180b7e4525bdf028f1e121cbc0f1cecb070c3f8",
          "message": "Fix documentation on cocotb.start and NullTrigger after reverting new Triggers",
          "timestamp": "2025-04-09T12:15:45-06:00",
          "tree_id": "538bda6b5a0f49f43be84e780f28e0d0c65317fe",
          "url": "https://github.com/cocotb/cocotb/commit/f180b7e4525bdf028f1e121cbc0f1cecb070c3f8"
        },
        "date": 1744222818026,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14001333183031456,
            "unit": "iter/sec",
            "range": "stddev: 0.048295791658261",
            "extra": "mean: 7.142177012199977 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20573230172627494,
            "unit": "iter/sec",
            "range": "stddev: 0.05198149339090335",
            "extra": "mean: 4.86068542280002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "2b844fa9f778858082e204a8089716fd6e1f4668",
          "message": "Make undocumented classes private",
          "timestamp": "2025-04-09T20:36:40+02:00",
          "tree_id": "b0cd7481edf521eb0cabba2e2d2f5c8e21444b6e",
          "url": "https://github.com/cocotb/cocotb/commit/2b844fa9f778858082e204a8089716fd6e1f4668"
        },
        "date": 1744224009356,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13887000476315858,
            "unit": "iter/sec",
            "range": "stddev: 0.055363143655903974",
            "extra": "mean: 7.200979086200005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20707137531722586,
            "unit": "iter/sec",
            "range": "stddev: 0.035498736130302744",
            "extra": "mean: 4.829252708000013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4a29b7df8d389e9a5ae6d3c9580a01a886803c18",
          "message": "Refactor Task.kill and Task.cancel to put common paths first",
          "timestamp": "2025-04-09T13:08:23-06:00",
          "tree_id": "651f2cea7470a469502f8e655d7a130df9b9fbfc",
          "url": "https://github.com/cocotb/cocotb/commit/4a29b7df8d389e9a5ae6d3c9580a01a886803c18"
        },
        "date": 1744225908245,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13928129906137118,
            "unit": "iter/sec",
            "range": "stddev: 0.059821217063402016",
            "extra": "mean: 7.179714769599991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20800262707051764,
            "unit": "iter/sec",
            "range": "stddev: 0.04540404313363795",
            "extra": "mean: 4.807631586599996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "078291776db6ddb7bb5efeea5e5b971ecc7be20f",
          "message": "Add documentation for Task.cancel() and test end cancels",
          "timestamp": "2025-04-09T19:43:18-06:00",
          "tree_id": "c0fad29cc103d7d7f5ff8babb867ba78d5a20793",
          "url": "https://github.com/cocotb/cocotb/commit/078291776db6ddb7bb5efeea5e5b971ecc7be20f"
        },
        "date": 1744249608694,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13858721220301937,
            "unit": "iter/sec",
            "range": "stddev: 0.03297189868337735",
            "extra": "mean: 7.215672962199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20589971461949078,
            "unit": "iter/sec",
            "range": "stddev: 0.018584195716944415",
            "extra": "mean: 4.856733297800008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "todd.strader@gmail.com",
            "name": "Todd Strader",
            "username": "toddstrader"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee79906a1ec6566e836f5b64307a8a12681ad4a2",
          "message": "Error message for Verilator\n\nAdd error message when trying to run Verilator with tracing when the design wasn't built with tracing support.",
          "timestamp": "2025-04-14T10:04:04-06:00",
          "tree_id": "543b1bb6b6fad589962445fa473be30e60aa8cf4",
          "url": "https://github.com/cocotb/cocotb/commit/ee79906a1ec6566e836f5b64307a8a12681ad4a2"
        },
        "date": 1744646883800,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13860921389001143,
            "unit": "iter/sec",
            "range": "stddev: 0.045176801777276676",
            "extra": "mean: 7.214527605599983 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20664480549557754,
            "unit": "iter/sec",
            "range": "stddev: 0.010595338673835594",
            "extra": "mean: 4.8392215696000225 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kees.jongenburger@gmail.com",
            "name": "Kees Jongenburger",
            "username": "keesj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4f29124ce87139db9fd5464c07ba51ad67e14dd",
          "message": "Fix support for $dumpvars and $dumpfile in Verilator",
          "timestamp": "2025-04-14T10:46:58-06:00",
          "tree_id": "b62e48f357807fea8f2f25b2ebce9a7c91b771a0",
          "url": "https://github.com/cocotb/cocotb/commit/e4f29124ce87139db9fd5464c07ba51ad67e14dd"
        },
        "date": 1744649426884,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1372688284901092,
            "unit": "iter/sec",
            "range": "stddev: 0.09234115280996781",
            "extra": "mean: 7.28497511779999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20522287789794288,
            "unit": "iter/sec",
            "range": "stddev: 0.025815802504328914",
            "extra": "mean: 4.872751080400008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "39dcf415f8907f312ff81b8503af151b299d232f",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.4 → v0.11.5](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.4...v0.11.5)",
          "timestamp": "2025-04-14T17:40:41-06:00",
          "tree_id": "f14f99d838e87a9e3c320a71165c83011ff8dc03",
          "url": "https://github.com/cocotb/cocotb/commit/39dcf415f8907f312ff81b8503af151b299d232f"
        },
        "date": 1744674255745,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13964259717725608,
            "unit": "iter/sec",
            "range": "stddev: 0.01864859767438937",
            "extra": "mean: 7.161138651199996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2051253650065813,
            "unit": "iter/sec",
            "range": "stddev: 0.039086546208963284",
            "extra": "mean: 4.8750674982000195 sec\nrounds: 5"
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
          "id": "8dc347b00222260b491c5fa0e88fafd61289e8ec",
          "message": "Use license field instead of trove classifier",
          "timestamp": "2025-04-16T06:41:50-06:00",
          "tree_id": "8696002fd54bc0638d91fd6831ce707be66563d6",
          "url": "https://github.com/cocotb/cocotb/commit/8dc347b00222260b491c5fa0e88fafd61289e8ec"
        },
        "date": 1744807528010,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1382702718904896,
            "unit": "iter/sec",
            "range": "stddev: 0.054280186114183844",
            "extra": "mean: 7.2322125814000175 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2021914737774465,
            "unit": "iter/sec",
            "range": "stddev: 0.038254703776275316",
            "extra": "mean: 4.945806968600005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3ae5690dfa2bc82df772326ee4b1a664c64d92ab",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.5 → v0.11.6](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.5...v0.11.6)",
          "timestamp": "2025-04-21T18:57:15-06:00",
          "tree_id": "c9cac97ce9095fdfb590a4c0e1d9f1a1215f0455",
          "url": "https://github.com/cocotb/cocotb/commit/3ae5690dfa2bc82df772326ee4b1a664c64d92ab"
        },
        "date": 1745283648523,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1395387033235916,
            "unit": "iter/sec",
            "range": "stddev: 0.03945116775135613",
            "extra": "mean: 7.166470492999997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20457202912247596,
            "unit": "iter/sec",
            "range": "stddev: 0.050324919366677844",
            "extra": "mean: 4.888253806199998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rice.shelley@ieee.org",
            "name": "Rice Shelley",
            "username": "RiceShelley"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "806ce61866df984ee0ba53db89d781633ff1b904",
          "message": "Added timescale flag to Verilator Runner",
          "timestamp": "2025-04-24T15:55:39-06:00",
          "tree_id": "ce90f12e70b381dcedb69d0d0aaa31dbc55fdb5b",
          "url": "https://github.com/cocotb/cocotb/commit/806ce61866df984ee0ba53db89d781633ff1b904"
        },
        "date": 1745531945948,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14118395089132946,
            "unit": "iter/sec",
            "range": "stddev: 0.027685888177475353",
            "extra": "mean: 7.082958039400023 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20804080422860058,
            "unit": "iter/sec",
            "range": "stddev: 0.04934562761382638",
            "extra": "mean: 4.806749347599975 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "d91f9a64adbf5fb76ddb528428958762dd19da09",
          "message": "Document PYGPI_PYTHON_BIN",
          "timestamp": "2025-04-24T21:09:57-06:00",
          "tree_id": "d9985994384e9260b184d1fd9c4f5a72563e3a1b",
          "url": "https://github.com/cocotb/cocotb/commit/d91f9a64adbf5fb76ddb528428958762dd19da09"
        },
        "date": 1745550800066,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1410806285672987,
            "unit": "iter/sec",
            "range": "stddev: 0.03914884786388538",
            "extra": "mean: 7.08814534039999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20758185415416824,
            "unit": "iter/sec",
            "range": "stddev: 0.036156719499426795",
            "extra": "mean: 4.817376760000002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "18e24ef2c8b573a45f461ac0df2cf342b45c649d",
          "message": "Add Vcs and Dsim to documented Runners",
          "timestamp": "2025-04-25T10:21:47-06:00",
          "tree_id": "a784180b5a9227c6db2d2035199eeec8cf1703a1",
          "url": "https://github.com/cocotb/cocotb/commit/18e24ef2c8b573a45f461ac0df2cf342b45c649d"
        },
        "date": 1745598315792,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1411378736358503,
            "unit": "iter/sec",
            "range": "stddev: 0.0239847588251015",
            "extra": "mean: 7.085270411399984 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2074395899381913,
            "unit": "iter/sec",
            "range": "stddev: 0.07707226727437455",
            "extra": "mean: 4.820680566800002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e1ba051e99849fc84d36fa4046a502ed0a1ab438",
          "message": "Replace deprecated argument name and clarify assertion error",
          "timestamp": "2025-04-25T22:07:54-06:00",
          "tree_id": "cff1f523b0993a4cfdc705c21495f1adde3d485f",
          "url": "https://github.com/cocotb/cocotb/commit/e1ba051e99849fc84d36fa4046a502ed0a1ab438"
        },
        "date": 1745640676199,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1404518891468918,
            "unit": "iter/sec",
            "range": "stddev: 0.04962051808845932",
            "extra": "mean: 7.119875753000008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20686510776552147,
            "unit": "iter/sec",
            "range": "stddev: 0.025152965622648894",
            "extra": "mean: 4.8340680107999905 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "2aaf179c690aee62be224740c77ce86926d589c7",
          "message": "Unify title case for documentation",
          "timestamp": "2025-04-26T09:22:44-06:00",
          "tree_id": "109d3c7c5f34f5c4314d19993e066a7400da3d22",
          "url": "https://github.com/cocotb/cocotb/commit/2aaf179c690aee62be224740c77ce86926d589c7"
        },
        "date": 1745681164828,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14096967292475795,
            "unit": "iter/sec",
            "range": "stddev: 0.03946593747361114",
            "extra": "mean: 7.093724339799996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20574559944960535,
            "unit": "iter/sec",
            "range": "stddev: 0.03214090228448884",
            "extra": "mean: 4.860371267599999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0b47978253170dceec0e6ff4e0245daf64b19cb6",
          "message": "Add codespell pre-commit hook and fix spelling",
          "timestamp": "2025-04-27T10:38:02-06:00",
          "tree_id": "229d652b46dc123422dd97f1f2ccb8bfaf9e4249",
          "url": "https://github.com/cocotb/cocotb/commit/0b47978253170dceec0e6ff4e0245daf64b19cb6"
        },
        "date": 1745772088768,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13970430152501404,
            "unit": "iter/sec",
            "range": "stddev: 0.009687065177817937",
            "extra": "mean: 7.157975732199986 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2064984488020104,
            "unit": "iter/sec",
            "range": "stddev: 0.02514105187767092",
            "extra": "mean: 4.8426513893999985 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "2d3b4519bb6bc339be40121437c8790f2ca09421",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.6 → v0.11.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.6...v0.11.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.04.07 → 2025.04.28](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.04.07...2025.04.28)",
          "timestamp": "2025-04-28T16:18:50-06:00",
          "tree_id": "73fb9315655c7a6f10367b35024217ce1cda1a45",
          "url": "https://github.com/cocotb/cocotb/commit/2d3b4519bb6bc339be40121437c8790f2ca09421"
        },
        "date": 1745878990810,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13996004053787464,
            "unit": "iter/sec",
            "range": "stddev: 0.01724884167142277",
            "extra": "mean: 7.144896473000017 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2073395122785678,
            "unit": "iter/sec",
            "range": "stddev: 0.03988595716960526",
            "extra": "mean: 4.823007390200019 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "2a4c8846067c620a12e5ccef2a45429022d50539",
          "message": "Make CancellationError a RuntimeError",
          "timestamp": "2025-05-01T16:33:15-06:00",
          "tree_id": "9965c33ff0e83e67d18ee356ea0dafd7e736c346",
          "url": "https://github.com/cocotb/cocotb/commit/2a4c8846067c620a12e5ccef2a45429022d50539"
        },
        "date": 1746139002869,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1410128161703416,
            "unit": "iter/sec",
            "range": "stddev: 0.028199793232147715",
            "extra": "mean: 7.0915539960000045 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2061723119500692,
            "unit": "iter/sec",
            "range": "stddev: 0.041402957061227784",
            "extra": "mean: 4.8503118121999815 sec\nrounds: 5"
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
          "id": "dee11c944d5416781a511e65ef609ff0788b7973",
          "message": "Bump minimum Verilator version support to 5.036 (#4644)\n\n* Bump minimum support Verilator to v5.036\n* Improve Verilator simulator support section\n* Verilator support is now longer \"experimental\" as it works fairly\n  well.\n* Added notes about improvements done in 2.0",
          "timestamp": "2025-05-01T16:39:24-06:00",
          "tree_id": "4d649a9b87027dc08e134fa34f1cdb70f4329797",
          "url": "https://github.com/cocotb/cocotb/commit/dee11c944d5416781a511e65ef609ff0788b7973"
        },
        "date": 1746139649334,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14063150583319672,
            "unit": "iter/sec",
            "range": "stddev: 0.026705488392810547",
            "extra": "mean: 7.110782139999992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20789565429383472,
            "unit": "iter/sec",
            "range": "stddev: 0.051604807870673335",
            "extra": "mean: 4.810105354999985 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3619db98c732830705f9a33c3b7c83613165926f",
          "message": "Add gui option for GHDL, NVC, Verilator, Icarus, and Dsim",
          "timestamp": "2025-05-04T11:57:19-06:00",
          "tree_id": "127b4babaeb991bb1831743657e8df8a8b01b781",
          "url": "https://github.com/cocotb/cocotb/commit/3619db98c732830705f9a33c3b7c83613165926f"
        },
        "date": 1746381661380,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.13912637138279862,
            "unit": "iter/sec",
            "range": "stddev: 0.0557429869620553",
            "extra": "mean: 7.1877099220000105 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2057739840648451,
            "unit": "iter/sec",
            "range": "stddev: 0.044377984440246945",
            "extra": "mean: 4.859700824399999 sec\nrounds: 5"
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
          "id": "e63082f70bca688ba102f0aa0775e1a4a11a9baf",
          "message": "Propagate return value in GPI callbacks to cleanup after failure\n\ngpi_embed_init uses the return value to conditionally call gpi_embed_end\nif there was a failure. This was broken in the GPI refactor (and wasn't\ndone consistently before then). This PR calls gpi_embed_end() if all\ncallback has a failure, which requires propagating the return value\nthrough many functions.\n\nAdditionally, we have to condition calling PyErr_Print if it's not a\nSystemExit, as that calls exit() and doesn't cleanly shutdown.",
          "timestamp": "2025-05-04T18:47:38-06:00",
          "tree_id": "ad0f228cb614ae9a16d46791b21349c2b37f9436",
          "url": "https://github.com/cocotb/cocotb/commit/e63082f70bca688ba102f0aa0775e1a4a11a9baf"
        },
        "date": 1746406273576,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.14042012450727015,
            "unit": "iter/sec",
            "range": "stddev: 0.02432683413857115",
            "extra": "mean: 7.12148635040005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20688823608976703,
            "unit": "iter/sec",
            "range": "stddev: 0.02785080260621561",
            "extra": "mean: 4.833527603599987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "2167ba1101dc352766b3d74ee05bae4d4a5deb51",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.7 → v0.11.8](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.7...v0.11.8)\n- [github.com/pre-commit/mirrors-clang-format: v20.1.0 → v20.1.3](https://github.com/pre-commit/mirrors-clang-format/compare/v20.1.0...v20.1.3)",
          "timestamp": "2025-05-05T23:20:26+02:00",
          "tree_id": "965c0b965bf0c13d25996181580f40e53c6b1d2c",
          "url": "https://github.com/cocotb/cocotb/commit/2167ba1101dc352766b3d74ee05bae4d4a5deb51"
        },
        "date": 1746480234865,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1399240954184952,
            "unit": "iter/sec",
            "range": "stddev: 0.05682912837966673",
            "extra": "mean: 7.146731926400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20702806070280363,
            "unit": "iter/sec",
            "range": "stddev: 0.033485042452059466",
            "extra": "mean: 4.830263088999982 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "9193afd3224bad13f946ef9c97d21a544cfe12c6",
          "message": "Timescale: add to Dsim, add not supported to Vcs, test more simulators supporting it",
          "timestamp": "2025-05-05T23:31:08+02:00",
          "tree_id": "e9e4e8ff3e918f3ecea5661fdd39f0ca017139a9",
          "url": "https://github.com/cocotb/cocotb/commit/9193afd3224bad13f946ef9c97d21a544cfe12c6"
        },
        "date": 1746480896694,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1402328966452588,
            "unit": "iter/sec",
            "range": "stddev: 0.06613103750421737",
            "extra": "mean: 7.130994395199991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.20750252877750042,
            "unit": "iter/sec",
            "range": "stddev: 0.029106757190731674",
            "extra": "mean: 4.819218377199991 sec\nrounds: 5"
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
          "id": "e45eb591490f0e73a329cc4bad28257ca3b82d0e",
          "message": "Use @cached_property instead of @cached_method for 0 arg methods",
          "timestamp": "2025-05-05T16:22:37-06:00",
          "tree_id": "9137eed3b449ebd321d2ba27f0cdae6436d79f7f",
          "url": "https://github.com/cocotb/cocotb/commit/e45eb591490f0e73a329cc4bad28257ca3b82d0e"
        },
        "date": 1746483951018,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15325022662755378,
            "unit": "iter/sec",
            "range": "stddev: 0.048154716562107805",
            "extra": "mean: 6.525275831600004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23583150154040636,
            "unit": "iter/sec",
            "range": "stddev: 0.015933052423102636",
            "extra": "mean: 4.240315621399986 sec\nrounds: 5"
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
          "id": "806fafc53b6a1e59e0c815ba0d84197e773c4468",
          "message": "Add test for issue 376",
          "timestamp": "2025-05-05T16:57:40-06:00",
          "tree_id": "e03e24ee9b0870ddb4caabb0221d3004c8b82e26",
          "url": "https://github.com/cocotb/cocotb/commit/806fafc53b6a1e59e0c815ba0d84197e773c4468"
        },
        "date": 1746486063322,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15313016863875797,
            "unit": "iter/sec",
            "range": "stddev: 0.04237480114180607",
            "extra": "mean: 6.530391815600046 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23580478677994499,
            "unit": "iter/sec",
            "range": "stddev: 0.023872976123806334",
            "extra": "mean: 4.240796014600027 sec\nrounds: 5"
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
          "id": "f5cd319a6e9a7dccfba083263fbf74f0242cdba3",
          "message": "Improve suggestion in error message\n\nWe are actually looking for COCOTB_TESTCASE these days, not just\nthe plain TESTCASE. Improve the error message to use the same variable\nas the code.",
          "timestamp": "2025-05-06T03:49:14+02:00",
          "tree_id": "b71894c6c636c13afae6bf7a47f96b61df2ff825",
          "url": "https://github.com/cocotb/cocotb/commit/f5cd319a6e9a7dccfba083263fbf74f0242cdba3"
        },
        "date": 1746496386367,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15335778911409367,
            "unit": "iter/sec",
            "range": "stddev: 0.030441402474105584",
            "extra": "mean: 6.520699116600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23573199655317717,
            "unit": "iter/sec",
            "range": "stddev: 0.029254642893920633",
            "extra": "mean: 4.242105503800019 sec\nrounds: 5"
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
          "id": "409b6dc12f586d945addecdf26828d4a3c3b2231",
          "message": "Make SimHandle private",
          "timestamp": "2025-05-05T20:29:49-06:00",
          "tree_id": "468760f7fcfb498328cc1dcb55bac08c0c63baec",
          "url": "https://github.com/cocotb/cocotb/commit/409b6dc12f586d945addecdf26828d4a3c3b2231"
        },
        "date": 1746498782239,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15328302031847488,
            "unit": "iter/sec",
            "range": "stddev: 0.031557582913912356",
            "extra": "mean: 6.523879800399993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23340468062704212,
            "unit": "iter/sec",
            "range": "stddev: 0.03733775388081001",
            "extra": "mean: 4.284404225800006 sec\nrounds: 5"
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
          "id": "61abf5c9c0a9e9f120b7b8d31a43ea621241d878",
          "message": "Removal all internal uses of deprecated Task.kill()",
          "timestamp": "2025-05-05T20:32:02-06:00",
          "tree_id": "31065d7bfc106804a5536d3b6b7dd78ff5233e07",
          "url": "https://github.com/cocotb/cocotb/commit/61abf5c9c0a9e9f120b7b8d31a43ea621241d878"
        },
        "date": 1746498982823,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15203205604147849,
            "unit": "iter/sec",
            "range": "stddev: 0.06391821674120361",
            "extra": "mean: 6.577560193800002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23385907551306964,
            "unit": "iter/sec",
            "range": "stddev: 0.010667265411613967",
            "extra": "mean: 4.2760795056 sec\nrounds: 5"
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
          "id": "7f0b11329dab4aa1916c42f444a685adb4c34880",
          "message": "Better handle null LogicArray and integers\n\nConstructing a null LogicArray with an integer always failed, so it made\nlittle sense for converting and comparing a null LogicArray to an\ninteger to work.\n\n* Converting null LogicArray to int now ValueError instead of returning\n  0.\n* Comparing a null LogicArray to int will always return False.",
          "timestamp": "2025-05-06T06:46:37-06:00",
          "tree_id": "1f74b0d2df46bfe2404151be760d21e04aebeb02",
          "url": "https://github.com/cocotb/cocotb/commit/7f0b11329dab4aa1916c42f444a685adb4c34880"
        },
        "date": 1746535813353,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.152845944947213,
            "unit": "iter/sec",
            "range": "stddev: 0.05759559853348327",
            "extra": "mean: 6.542535363600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23591456203207314,
            "unit": "iter/sec",
            "range": "stddev: 0.05003814045364154",
            "extra": "mean: 4.238822696599999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "feb8be8b087d4b93d33759d43afa5f227fb4724e",
          "message": "Do not run tests on doc-only changes",
          "timestamp": "2025-05-06T08:11:08-06:00",
          "tree_id": "0f081b39127310257c98228666dd5f0a4473706a",
          "url": "https://github.com/cocotb/cocotb/commit/feb8be8b087d4b93d33759d43afa5f227fb4724e"
        },
        "date": 1746540891189,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15312005718282462,
            "unit": "iter/sec",
            "range": "stddev: 0.029385260461251596",
            "extra": "mean: 6.530823057400016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23521515923878525,
            "unit": "iter/sec",
            "range": "stddev: 0.028759528376183768",
            "extra": "mean: 4.2514266650000305 sec\nrounds: 5"
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
          "id": "30649e878e2e0a04bd535107005d49b4113589a1",
          "message": "Remove pylint config, since we use ruff",
          "timestamp": "2025-05-06T11:07:48-06:00",
          "tree_id": "0b1d20b332a9d1f1e67f9f90f92b904cbc37ead3",
          "url": "https://github.com/cocotb/cocotb/commit/30649e878e2e0a04bd535107005d49b4113589a1"
        },
        "date": 1746551466682,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15382168530761425,
            "unit": "iter/sec",
            "range": "stddev: 0.022331255383503563",
            "extra": "mean: 6.501033960200016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2372501260094977,
            "unit": "iter/sec",
            "range": "stddev: 0.022752535788088595",
            "extra": "mean: 4.214960880399985 sec\nrounds: 5"
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
          "id": "385a4a219a9678c4122075ee7d9c20826e7d9a29",
          "message": "Fail if the user asks for coverage and we can't provide (#4656)",
          "timestamp": "2025-05-06T12:05:29-06:00",
          "tree_id": "f6ab28119f2cf97ad934ac3de195512798e4f6dd",
          "url": "https://github.com/cocotb/cocotb/commit/385a4a219a9678c4122075ee7d9c20826e7d9a29"
        },
        "date": 1746554932245,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1527810071048319,
            "unit": "iter/sec",
            "range": "stddev: 0.05675841210559361",
            "extra": "mean: 6.545316194400016 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23673018473143276,
            "unit": "iter/sec",
            "range": "stddev: 0.03353247618149583",
            "extra": "mean: 4.224218390800002 sec\nrounds: 5"
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
          "id": "cd7aa7956a0e095c6515f8c655fed695a3339438",
          "message": "Questa: Ensure VHDL_GPI_INTERFACE is passed to simulator\n\nVHDL_GPI_INTERFACE was not passed on to the simulator if the user only\nset it as make variable. (It was passed on if the user exported it in\nthe shell environment.) Fix that and improve the formatting in the\nMakefile to better see what's going on.",
          "timestamp": "2025-05-07T07:19:24+02:00",
          "tree_id": "2b4cadafec93a7f9406d124851680a70e991b1b2",
          "url": "https://github.com/cocotb/cocotb/commit/cd7aa7956a0e095c6515f8c655fed695a3339438"
        },
        "date": 1746595355826,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15448188245161407,
            "unit": "iter/sec",
            "range": "stddev: 0.05043921003684246",
            "extra": "mean: 6.473250999599998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.238419418408966,
            "unit": "iter/sec",
            "range": "stddev: 0.02527672795991026",
            "extra": "mean: 4.194289234799987 sec\nrounds: 5"
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
          "id": "2a936e9c927c29ef94835c373591987717981517",
          "message": "Move pass_test and parametrize to cocotb.regression",
          "timestamp": "2025-05-07T08:56:41-06:00",
          "tree_id": "d54035e18c0649cbbe3d2a1776ff20198f3fda3d",
          "url": "https://github.com/cocotb/cocotb/commit/2a936e9c927c29ef94835c373591987717981517"
        },
        "date": 1746630013866,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15379831349892134,
            "unit": "iter/sec",
            "range": "stddev: 0.025433476371557642",
            "extra": "mean: 6.502021883399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23569585055423933,
            "unit": "iter/sec",
            "range": "stddev: 0.043614457638490915",
            "extra": "mean: 4.24275606739999 sec\nrounds: 5"
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
          "id": "0fdfe644dfc76619bb48e5977b45d9bc6245df53",
          "message": "Aldec: Re-enable testing for complex array types\n\ntest_array had special handling for Aldec simulators.\n\n* The Makefile tried to use a separate VHDL file for Aldec simulators,\n  but the condition never matched (any more), since the simulator is\n  called riviera, not aldec. We were running with the `array_module.vhd`\n  for probably a long time.\n* Now that we're using the full file, we can also test the associated\n  features and they are confirmed to work with Riviera-PRO 2024.04 and\n  2020.04.\n\nPart of #1858",
          "timestamp": "2025-05-08T07:07:06+02:00",
          "tree_id": "5b113b170bbf2efa63f0028531c6ec1240935461",
          "url": "https://github.com/cocotb/cocotb/commit/0fdfe644dfc76619bb48e5977b45d9bc6245df53"
        },
        "date": 1746681031508,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15368890086657444,
            "unit": "iter/sec",
            "range": "stddev: 0.025608856449757585",
            "extra": "mean: 6.506650736399979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23478216514804492,
            "unit": "iter/sec",
            "range": "stddev: 0.03893573822214039",
            "extra": "mean: 4.259267305799983 sec\nrounds: 5"
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
          "id": "1cb087291e16b8ebc3f1d010dfbb2277cd794f52",
          "message": "Finalize RTL_LIBRARY -> TOPLEVEL_LIBRARY transition\n\nFix the remaining uses in our test suite and simulator support files.",
          "timestamp": "2025-05-08T20:55:21+02:00",
          "tree_id": "911194b5811a262c3700aee8e886b16a692bb409",
          "url": "https://github.com/cocotb/cocotb/commit/1cb087291e16b8ebc3f1d010dfbb2277cd794f52"
        },
        "date": 1746730717257,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15466557416151364,
            "unit": "iter/sec",
            "range": "stddev: 0.022587158341042652",
            "extra": "mean: 6.465562911599989 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23660437936657908,
            "unit": "iter/sec",
            "range": "stddev: 0.020347780436587012",
            "extra": "mean: 4.226464458000021 sec\nrounds: 5"
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
          "id": "ea1be1cc2ca4d092727a2c061a04957f200ec273",
          "message": "Cleanup newsfrags (#4665)",
          "timestamp": "2025-05-08T22:08:48-06:00",
          "tree_id": "40a9f1dac756ebe117de831c32eb3eccfc78ebe7",
          "url": "https://github.com/cocotb/cocotb/commit/ea1be1cc2ca4d092727a2c061a04957f200ec273"
        },
        "date": 1746763957459,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15298984115027006,
            "unit": "iter/sec",
            "range": "stddev: 0.07760283312551952",
            "extra": "mean: 6.536381713200012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23554786190829485,
            "unit": "iter/sec",
            "range": "stddev: 0.0338721643484521",
            "extra": "mean: 4.24542168160001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b2c6e1e07f87ed9e65166f7141fd50b73804b342",
          "message": "Use vendored domaintools",
          "timestamp": "2025-05-09T07:56:35-06:00",
          "tree_id": "d1053dd42a297d0bf791bec97771f33fab34798f",
          "url": "https://github.com/cocotb/cocotb/commit/b2c6e1e07f87ed9e65166f7141fd50b73804b342"
        },
        "date": 1746799194338,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1532191076652718,
            "unit": "iter/sec",
            "range": "stddev: 0.030666273216482152",
            "extra": "mean: 6.526601121999988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23546561179522899,
            "unit": "iter/sec",
            "range": "stddev: 0.019895519830969495",
            "extra": "mean: 4.246904643000027 sec\nrounds: 5"
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
          "id": "dfcf43214fe777f4e89b405e8a5484aa7ec04459",
          "message": "Change default of `PYTHON_BIN` to `python3` (#4671)\n\nPEP394 states this should always be available and correct if a Python 3 is installed.",
          "timestamp": "2025-05-09T08:35:53-06:00",
          "tree_id": "d53e49ce9239b8392806912b6c935b27f6c9e1e3",
          "url": "https://github.com/cocotb/cocotb/commit/dfcf43214fe777f4e89b405e8a5484aa7ec04459"
        },
        "date": 1746801552786,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15320918201906472,
            "unit": "iter/sec",
            "range": "stddev: 0.03596406254916572",
            "extra": "mean: 6.527023947399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2360310209451005,
            "unit": "iter/sec",
            "range": "stddev: 0.028788728911721437",
            "extra": "mean: 4.23673123980002 sec\nrounds: 5"
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
          "id": "42df1c745496498aaef5d1d7e34b37f26366ccfc",
          "message": "Add mypy to pre-commit",
          "timestamp": "2025-05-12T10:05:30-06:00",
          "tree_id": "f9b5b1efc353a4c5f0e8a01f5615aedf2704297c",
          "url": "https://github.com/cocotb/cocotb/commit/42df1c745496498aaef5d1d7e34b37f26366ccfc"
        },
        "date": 1747066129080,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1564898532010169,
            "unit": "iter/sec",
            "range": "stddev: 0.021802663418470068",
            "extra": "mean: 6.390190670800001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23716406187809022,
            "unit": "iter/sec",
            "range": "stddev: 0.0309337637691216",
            "extra": "mean: 4.216490441600007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4660d9569558d20252621144ca8c831b1e9b7e56",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.8 → v0.11.9](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.8...v0.11.9)\n- [github.com/pre-commit/mirrors-clang-format: v20.1.3 → v20.1.4](https://github.com/pre-commit/mirrors-clang-format/compare/v20.1.3...v20.1.4)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.04.28 → 2025.05.12](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.04.28...2025.05.12)",
          "timestamp": "2025-05-12T17:19:14-06:00",
          "tree_id": "28d80171c1c99a13be434deb2191ffd7191598d6",
          "url": "https://github.com/cocotb/cocotb/commit/4660d9569558d20252621144ca8c831b1e9b7e56"
        },
        "date": 1747092165993,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15666255492245235,
            "unit": "iter/sec",
            "range": "stddev: 0.03239589214617149",
            "extra": "mean: 6.38314625019998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2374012030150507,
            "unit": "iter/sec",
            "range": "stddev: 0.04194318149240074",
            "extra": "mean: 4.21227857020001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "e4bd9f9d69532cd0ae58b58b4b7d5e5d971faba9",
          "message": "Add units back, but deprecated and undocumented",
          "timestamp": "2025-05-13T14:52:50-06:00",
          "tree_id": "5774fe3d4c8081a5c505e65f1ba238ebc11e96a9",
          "url": "https://github.com/cocotb/cocotb/commit/e4bd9f9d69532cd0ae58b58b4b7d5e5d971faba9"
        },
        "date": 1747169761815,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15670638183803676,
            "unit": "iter/sec",
            "range": "stddev: 0.025498985145346747",
            "extra": "mean: 6.381361041399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23735329289390997,
            "unit": "iter/sec",
            "range": "stddev: 0.01677740002366289",
            "extra": "mean: 4.213128825000001 sec\nrounds: 5"
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
          "id": "d66c7561842e017fb063a62cbc660fae2862e68c",
          "message": "Fix hang with `Event.wait()` (#4675)",
          "timestamp": "2025-05-14T15:08:21-06:00",
          "tree_id": "9dbf378e9f9a3d0a5f282fc366f17830da4256ba",
          "url": "https://github.com/cocotb/cocotb/commit/d66c7561842e017fb063a62cbc660fae2862e68c"
        },
        "date": 1747257162117,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15717995523461675,
            "unit": "iter/sec",
            "range": "stddev: 0.039001849782248736",
            "extra": "mean: 6.362134398800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23793891791404137,
            "unit": "iter/sec",
            "range": "stddev: 0.04258810492482507",
            "extra": "mean: 4.2027592996000065 sec\nrounds: 5"
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
          "id": "4d66e32e0ef035ebccb285c5a1ead11805c6c060",
          "message": "Remove dead code",
          "timestamp": "2025-05-14T15:10:00-06:00",
          "tree_id": "e7e367a509ca48c9d34663d2b9b9f05563472d9b",
          "url": "https://github.com/cocotb/cocotb/commit/4d66e32e0ef035ebccb285c5a1ead11805c6c060"
        },
        "date": 1747257480001,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15787900240966557,
            "unit": "iter/sec",
            "range": "stddev: 0.04239941076551971",
            "extra": "mean: 6.33396452180001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23768671212332748,
            "unit": "iter/sec",
            "range": "stddev: 0.034977048170782725",
            "extra": "mean: 4.207218784199995 sec\nrounds: 5"
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
          "id": "8497ed0b97f4c690c9b2e6cdce5f800c43801546",
          "message": "Fix using Python API after releasing GIL\n\ndeleteing the PythonCallback calls Python C API functions, which is not\nsafe unless the GIL is acquired, so the Ensure and DEFER Release were\nmoved up, so the Release occurs *after* the delete of the\nPythonCallback.\n\nThis fixes a segfault seen in VCS slave mode.",
          "timestamp": "2025-05-16T11:53:17-06:00",
          "tree_id": "753d95b3509cdf5cb9a63377967c6e2a21bfc918",
          "url": "https://github.com/cocotb/cocotb/commit/8497ed0b97f4c690c9b2e6cdce5f800c43801546"
        },
        "date": 1747418224428,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1559899485669069,
            "unit": "iter/sec",
            "range": "stddev: 0.03311741695710913",
            "extra": "mean: 6.4106694642000095 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2373811752522474,
            "unit": "iter/sec",
            "range": "stddev: 0.01924994928653145",
            "extra": "mean: 4.21263395860002 sec\nrounds: 5"
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
          "id": "88c52561bd01eaad73c6d0bdf902280c4253fc40",
          "message": "Move NVC in CI to r1.16.0",
          "timestamp": "2025-05-18T07:57:46-06:00",
          "tree_id": "7c55c6e62d2f84183dff59491d920b322764be89",
          "url": "https://github.com/cocotb/cocotb/commit/88c52561bd01eaad73c6d0bdf902280c4253fc40"
        },
        "date": 1747576882355,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15827410807691533,
            "unit": "iter/sec",
            "range": "stddev: 0.022910708786028425",
            "extra": "mean: 6.318152805599999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2377561739928632,
            "unit": "iter/sec",
            "range": "stddev: 0.0545167996663765",
            "extra": "mean: 4.205989620400004 sec\nrounds: 5"
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
          "id": "52b474e9e26effb2135d646e9c92c0e6c6ea25f0",
          "message": "Update minimum Verilator version in Makefile\n\nThe Verilator version check in the Makefile didn't get updated in line\nwith the minimum requirement for Verilator. Synchronize the two.",
          "timestamp": "2025-05-18T19:12:37+02:00",
          "tree_id": "b052a522c9f100191f0164b56ccfedcbd6d792bd",
          "url": "https://github.com/cocotb/cocotb/commit/52b474e9e26effb2135d646e9c92c0e6c6ea25f0"
        },
        "date": 1747588571209,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15716532943467135,
            "unit": "iter/sec",
            "range": "stddev: 0.05655020900364045",
            "extra": "mean: 6.3627264587999885 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23921626872916227,
            "unit": "iter/sec",
            "range": "stddev: 0.015269861942571678",
            "extra": "mean: 4.180317690400011 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "2b0ba7f4afff2eb10aee4162071dbdfbf0c6159c",
          "message": "Skip tests for forks",
          "timestamp": "2025-05-19T08:11:22-06:00",
          "tree_id": "9bc282a0c256f658324bffcc04434c0f60360861",
          "url": "https://github.com/cocotb/cocotb/commit/2b0ba7f4afff2eb10aee4162071dbdfbf0c6159c"
        },
        "date": 1747664115957,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1577871030640133,
            "unit": "iter/sec",
            "range": "stddev: 0.0204785338427385",
            "extra": "mean: 6.337653588800004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2386934083686163,
            "unit": "iter/sec",
            "range": "stddev: 0.025394360078528664",
            "extra": "mean: 4.1894747192000015 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8e3109391f88f9fd33503763c1c0ed84e479b919",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.9 → v0.11.10](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.9...v0.11.10)",
          "timestamp": "2025-05-19T15:57:02-06:00",
          "tree_id": "0eb8518ebc0f263b3f6d71c25d9b362b4259caa1",
          "url": "https://github.com/cocotb/cocotb/commit/8e3109391f88f9fd33503763c1c0ed84e479b919"
        },
        "date": 1747692035613,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15766257417257126,
            "unit": "iter/sec",
            "range": "stddev: 0.02363812628331948",
            "extra": "mean: 6.3426593486 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23833961919249597,
            "unit": "iter/sec",
            "range": "stddev: 0.014462190662431016",
            "extra": "mean: 4.195693537599999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71093f3eddcbec3edfc3a2dba6a992a17083fdae",
          "message": "Install development version of cocotb after ecosystem test package (#4668)",
          "timestamp": "2025-05-20T11:02:44-06:00",
          "tree_id": "961238cb07b9737b06422112bd3d2e15aad911d6",
          "url": "https://github.com/cocotb/cocotb/commit/71093f3eddcbec3edfc3a2dba6a992a17083fdae"
        },
        "date": 1747760811161,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1583544366930817,
            "unit": "iter/sec",
            "range": "stddev: 0.024746098224239475",
            "extra": "mean: 6.314947789799999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23897106880347715,
            "unit": "iter/sec",
            "range": "stddev: 0.029863302105842968",
            "extra": "mean: 4.1846069694000105 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5fd7902b58f9d2e947c8dd6e3c4ecf3a269915b9",
          "message": "newline in generated _version.py",
          "timestamp": "2025-05-20T12:06:26-06:00",
          "tree_id": "0afc2b2060b2856ef357a07f981c3c2f4bee115c",
          "url": "https://github.com/cocotb/cocotb/commit/5fd7902b58f9d2e947c8dd6e3c4ecf3a269915b9"
        },
        "date": 1747764600903,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1578747623742796,
            "unit": "iter/sec",
            "range": "stddev: 0.024034358552987113",
            "extra": "mean: 6.3341346328000325 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2358361654096217,
            "unit": "iter/sec",
            "range": "stddev: 0.04693965341753962",
            "extra": "mean: 4.2402317653999715 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "b67b5d50c48ff907dcb790353d6fd7810e706f3e",
          "message": "Fix and expand number of paths-ignore for regressions",
          "timestamp": "2025-05-20T12:19:40-06:00",
          "tree_id": "9d9407136b49731ef8e1592e4d1f32a3501e481f",
          "url": "https://github.com/cocotb/cocotb/commit/b67b5d50c48ff907dcb790353d6fd7810e706f3e"
        },
        "date": 1747765395438,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.156255264830712,
            "unit": "iter/sec",
            "range": "stddev: 0.03732892620856291",
            "extra": "mean: 6.399784359800014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23596575925785343,
            "unit": "iter/sec",
            "range": "stddev: 0.02343028949663453",
            "extra": "mean: 4.2379030040000085 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "90429215+mferris3CS1003@users.noreply.github.com",
            "name": "mferris3CS1003",
            "username": "mferris3CS1003"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "365edc2e4333f22d41894fcd5f3a6793db1f0fc3",
          "message": "Module argument(s): Slight wording change (#4683)\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2025-05-22T08:34:40-06:00",
          "tree_id": "bdbcf8eed098a1c75685e2e8723e9299a73cc1e5",
          "url": "https://github.com/cocotb/cocotb/commit/365edc2e4333f22d41894fcd5f3a6793db1f0fc3"
        },
        "date": 1747924680801,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15840159154361502,
            "unit": "iter/sec",
            "range": "stddev: 0.028703386880148826",
            "extra": "mean: 6.313067881800009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2402947090383598,
            "unit": "iter/sec",
            "range": "stddev: 0.03250114525932257",
            "extra": "mean: 4.161556465400008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4e3b25557098aceeb49066137288170ac34899f6",
          "message": "Enable Python 3.14 test",
          "timestamp": "2025-05-23T09:01:14-06:00",
          "tree_id": "aca9486175fee1735679875e753f0d700369cbda",
          "url": "https://github.com/cocotb/cocotb/commit/4e3b25557098aceeb49066137288170ac34899f6"
        },
        "date": 1748012681810,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15741822341734876,
            "unit": "iter/sec",
            "range": "stddev: 0.025642798082167764",
            "extra": "mean: 6.352504673799996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23589382196295258,
            "unit": "iter/sec",
            "range": "stddev: 0.04666041303418569",
            "extra": "mean: 4.239195379000011 sec\nrounds: 5"
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
          "id": "7da54be693ec5ad99b12b831258f02dd04654c7f",
          "message": "Merge pull request #4684 from ktbarrett/revert-test-discovery-change-1\n\nRevert Test Discovery Change (part 1)",
          "timestamp": "2025-05-25T12:44:16-06:00",
          "tree_id": "308419dd430b84b3916ed29edbb441e452069304",
          "url": "https://github.com/cocotb/cocotb/commit/7da54be693ec5ad99b12b831258f02dd04654c7f"
        },
        "date": 1748198877145,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15601074615149396,
            "unit": "iter/sec",
            "range": "stddev: 0.03755864313985623",
            "extra": "mean: 6.409814866399984 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2349764988520196,
            "unit": "iter/sec",
            "range": "stddev: 0.021354792582072533",
            "extra": "mean: 4.255744744200001 sec\nrounds: 5"
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
          "id": "8f9c3f732010bb10d4698b0a1c14b8f4cd09067e",
          "message": "Change discovery of cocotb.parametrize objects\n\nParametrize object no longer just stick the generated tests into the\ncaller's module scope, but instead the Parametrize object is returned\nand picked up by the RegressionManager, who then generates the tests.",
          "timestamp": "2025-05-26T09:35:23-06:00",
          "tree_id": "7cee5829d6c2b980f63082807e4de61317f4b6ca",
          "url": "https://github.com/cocotb/cocotb/commit/8f9c3f732010bb10d4698b0a1c14b8f4cd09067e"
        },
        "date": 1748273928715,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15682708351469982,
            "unit": "iter/sec",
            "range": "stddev: 0.09386536958206777",
            "extra": "mean: 6.376449638600002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23771098120325135,
            "unit": "iter/sec",
            "range": "stddev: 0.03233350069581343",
            "extra": "mean: 4.206789248600023 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "4fe7ae87b0432d6e5eaedbf6875fa5d51eec2f51",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.10 → v0.11.11](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.10...v0.11.11)\n- [github.com/pre-commit/mirrors-clang-format: v20.1.4 → v20.1.5](https://github.com/pre-commit/mirrors-clang-format/compare/v20.1.4...v20.1.5)",
          "timestamp": "2025-05-26T15:22:58-06:00",
          "tree_id": "0c2ca6104e36a376f869c185e58ed33719517847",
          "url": "https://github.com/cocotb/cocotb/commit/4fe7ae87b0432d6e5eaedbf6875fa5d51eec2f51"
        },
        "date": 1748294772845,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15822769390437202,
            "unit": "iter/sec",
            "range": "stddev: 0.027201752701305936",
            "extra": "mean: 6.320006159000013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2368977231729897,
            "unit": "iter/sec",
            "range": "stddev: 0.025139363821131158",
            "extra": "mean: 4.221230945599973 sec\nrounds: 5"
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
          "id": "6f4d00a8bc2226cd8ce33521edeaa801ff9c5f16",
          "message": "Add missing newsfrags (#4696)",
          "timestamp": "2025-05-26T15:23:35-06:00",
          "tree_id": "89c9f70ac066036d40518f7a8b95ea2b302e077a",
          "url": "https://github.com/cocotb/cocotb/commit/6f4d00a8bc2226cd8ce33521edeaa801ff9c5f16"
        },
        "date": 1748295059302,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15915900404671318,
            "unit": "iter/sec",
            "range": "stddev: 0.036932825150996156",
            "extra": "mean: 6.283024991199994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2398033788136762,
            "unit": "iter/sec",
            "range": "stddev: 0.02800485509018804",
            "extra": "mean: 4.170083027799978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jon@leetfighter.com",
            "name": "Jon Povey",
            "username": "jonpovey"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "abb64eefdd760e1727fc747ed6c8c33080bd7c80",
          "message": "Fix gitter link in support.rst\n\nWas link to github",
          "timestamp": "2025-05-26T21:39:35-06:00",
          "tree_id": "404c4182e47c2937effdef7f02df8f390d5d9040",
          "url": "https://github.com/cocotb/cocotb/commit/abb64eefdd760e1727fc747ed6c8c33080bd7c80"
        },
        "date": 1748317371789,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15958888480507383,
            "unit": "iter/sec",
            "range": "stddev: 0.012384529737858752",
            "extra": "mean: 6.266100557200002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2411280940649364,
            "unit": "iter/sec",
            "range": "stddev: 0.02335940664160488",
            "extra": "mean: 4.1471733266 sec\nrounds: 5"
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
          "id": "2a785ab287ec7f526d3d797a7c8126a3efa53e38",
          "message": "Add deprecated re-exports to `cocotb.results` (#4697)",
          "timestamp": "2025-05-26T21:40:23-06:00",
          "tree_id": "3676fa6643d012fbfb253ad41d2285a3297d9fcb",
          "url": "https://github.com/cocotb/cocotb/commit/2a785ab287ec7f526d3d797a7c8126a3efa53e38"
        },
        "date": 1748317688252,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1566401527134924,
            "unit": "iter/sec",
            "range": "stddev: 0.038946565776189865",
            "extra": "mean: 6.384059148799997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23567064344378952,
            "unit": "iter/sec",
            "range": "stddev: 0.015196558280119904",
            "extra": "mean: 4.243209868600002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "c71f73f0a4506aaac9aaed32922a2a3026d4981a",
          "message": "Add __all__ to all public modules and handle re-exports correctly",
          "timestamp": "2025-05-27T15:23:18-06:00",
          "tree_id": "c923987ea1bf1fbf5fa5b824fbf305d4ba5c3666",
          "url": "https://github.com/cocotb/cocotb/commit/c71f73f0a4506aaac9aaed32922a2a3026d4981a"
        },
        "date": 1748381202190,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15676540898591831,
            "unit": "iter/sec",
            "range": "stddev: 0.03027533857380453",
            "extra": "mean: 6.378958256600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23959524196309853,
            "unit": "iter/sec",
            "range": "stddev: 0.01910460899094148",
            "extra": "mean: 4.173705586999995 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8204f89b3a54717a4c513b49b33669d4a2bb06de",
          "message": "Fix linking in documentation",
          "timestamp": "2025-05-28T10:10:15-06:00",
          "tree_id": "3976f44406a4e127185b82e60b8925c227d61de1",
          "url": "https://github.com/cocotb/cocotb/commit/8204f89b3a54717a4c513b49b33669d4a2bb06de"
        },
        "date": 1748448818241,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1575121067925009,
            "unit": "iter/sec",
            "range": "stddev: 0.025713813806066278",
            "extra": "mean: 6.348718332600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23748790549084128,
            "unit": "iter/sec",
            "range": "stddev: 0.017572921712554566",
            "extra": "mean: 4.2107407446000025 sec\nrounds: 5"
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
          "id": "62bb8958b4d326f9a4f12898a7b5d314df3e4d14",
          "message": "Move COCOTB_PDB_ON_EXCEPTION to as soon as it ends the test",
          "timestamp": "2025-05-29T09:35:00-06:00",
          "tree_id": "21007412ca71f7762bec551bb712f879f66098f5",
          "url": "https://github.com/cocotb/cocotb/commit/62bb8958b4d326f9a4f12898a7b5d314df3e4d14"
        },
        "date": 1748533103091,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1585789723369771,
            "unit": "iter/sec",
            "range": "stddev: 0.02419376341051002",
            "extra": "mean: 6.3060063088000105 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23834653907515718,
            "unit": "iter/sec",
            "range": "stddev: 0.041225246643911875",
            "extra": "mean: 4.195571724600006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "66dd1d07e2bf0887de37aaf6174e6730f2bcc2bf",
          "message": "Use commit hash for actions",
          "timestamp": "2025-05-29T09:42:22-06:00",
          "tree_id": "cc17cc0c3ad0ad8840bdf721a01638d8a824e318",
          "url": "https://github.com/cocotb/cocotb/commit/66dd1d07e2bf0887de37aaf6174e6730f2bcc2bf"
        },
        "date": 1748533714508,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15906500580732516,
            "unit": "iter/sec",
            "range": "stddev: 0.0425256571151497",
            "extra": "mean: 6.286737896400018 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23825573720059484,
            "unit": "iter/sec",
            "range": "stddev: 0.05467403131524165",
            "extra": "mean: 4.197170702999983 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "",
            "name": "ruff"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "0f943a324a997bb31dcd55831b51b393d5435965",
          "message": "Automated fixes",
          "timestamp": "2025-05-29T16:40:21-06:00",
          "tree_id": "ee3c6083cec55f0240fb436506201a0e45586d4a",
          "url": "https://github.com/cocotb/cocotb/commit/0f943a324a997bb31dcd55831b51b393d5435965"
        },
        "date": 1748558642732,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15677032422854803,
            "unit": "iter/sec",
            "range": "stddev: 0.05327755640066248",
            "extra": "mean: 6.37875825619999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2389924026349971,
            "unit": "iter/sec",
            "range": "stddev: 0.011454310106883688",
            "extra": "mean: 4.184233427400022 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "fef6cb0e0abf17efc7296c21299d3b4e14e6b801",
          "message": "Add ruff fixes to blame ignore",
          "timestamp": "2025-05-29T17:33:24-06:00",
          "tree_id": "b0e7ef98d2922a8cf288ca2c58b939ac348425eb",
          "url": "https://github.com/cocotb/cocotb/commit/fef6cb0e0abf17efc7296c21299d3b4e14e6b801"
        },
        "date": 1748561814146,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1573270133484539,
            "unit": "iter/sec",
            "range": "stddev: 0.05021171966005513",
            "extra": "mean: 6.356187527599991 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23892893016027228,
            "unit": "iter/sec",
            "range": "stddev: 0.033886012614990274",
            "extra": "mean: 4.185344986600012 sec\nrounds: 5"
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
          "id": "88ca328af2a1583ebecd8b8bf5083c07b1a9c856",
          "message": "Add release notes for 1.8.1",
          "timestamp": "2025-06-01T08:32:13-06:00",
          "tree_id": "cd9c1cb260229963cb95cb83a67210718da80f05",
          "url": "https://github.com/cocotb/cocotb/commit/88ca328af2a1583ebecd8b8bf5083c07b1a9c856"
        },
        "date": 1748788566678,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15838615474214837,
            "unit": "iter/sec",
            "range": "stddev: 0.03550983777434232",
            "extra": "mean: 6.3136831728000065 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23823173208127296,
            "unit": "iter/sec",
            "range": "stddev: 0.04901774376969142",
            "extra": "mean: 4.197593625600007 sec\nrounds: 5"
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
          "id": "dd6ee95fdf8e81b126668802f46ee85b63c3ef4e",
          "message": "Fix a couple more documentation issues",
          "timestamp": "2025-06-01T12:44:03-06:00",
          "tree_id": "cd0f99a7d60ed3948ff52c09a21d98845e10fb0d",
          "url": "https://github.com/cocotb/cocotb/commit/dd6ee95fdf8e81b126668802f46ee85b63c3ef4e"
        },
        "date": 1748803686253,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1587534165794274,
            "unit": "iter/sec",
            "range": "stddev: 0.03478468525589005",
            "extra": "mean: 6.299077031200023 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23984895373985213,
            "unit": "iter/sec",
            "range": "stddev: 0.02956622507576775",
            "extra": "mean: 4.169290649000004 sec\nrounds: 5"
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
          "id": "34821da224f145b6deb7fe3c7016f645f85be910",
          "message": "Manually fix mypy issues",
          "timestamp": "2025-06-04T10:44:58-06:00",
          "tree_id": "672f0ffbca3f27bde38c69fbf8616d15aa8740f0",
          "url": "https://github.com/cocotb/cocotb/commit/34821da224f145b6deb7fe3c7016f645f85be910"
        },
        "date": 1749055702941,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1585473700611382,
            "unit": "iter/sec",
            "range": "stddev: 0.029913254438768754",
            "extra": "mean: 6.307263246400021 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23717251370978748,
            "unit": "iter/sec",
            "range": "stddev: 0.03752727795250117",
            "extra": "mean: 4.216340183600005 sec\nrounds: 5"
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
          "id": "8ccd6150bdc6e51b265522e947fc1f19f9a1b9ce",
          "message": "Unlink redundant LogicArray links in LogicArray docs",
          "timestamp": "2025-06-05T13:26:10-06:00",
          "tree_id": "d4807dac2a7d23a7b8af688792b07c5a64745935",
          "url": "https://github.com/cocotb/cocotb/commit/8ccd6150bdc6e51b265522e947fc1f19f9a1b9ce"
        },
        "date": 1749151781111,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15843495646737557,
            "unit": "iter/sec",
            "range": "stddev: 0.02060842199260962",
            "extra": "mean: 6.311738408599979 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23816803806883435,
            "unit": "iter/sec",
            "range": "stddev: 0.01511815780802118",
            "extra": "mean: 4.198716201000002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "will.keen1@googlemail.com",
            "name": "Will Keen",
            "username": "will-keen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e390ce681985c2502e7d19416df3c5bf4d4643ad",
          "message": "allow user to specify wave file location for icarus",
          "timestamp": "2025-06-08T14:35:53-06:00",
          "tree_id": "e0c2398e8c87218d1c6d146ee458d742d6e86d03",
          "url": "https://github.com/cocotb/cocotb/commit/e390ce681985c2502e7d19416df3c5bf4d4643ad"
        },
        "date": 1749415161032,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15754388808756392,
            "unit": "iter/sec",
            "range": "stddev: 0.06358600503513288",
            "extra": "mean: 6.347437606999984 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2386278151186611,
            "unit": "iter/sec",
            "range": "stddev: 0.018299710635637484",
            "extra": "mean: 4.190626308600008 sec\nrounds: 5"
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
          "id": "797b3d7e5c05017522a60766ec8fcb791d75f591",
          "message": "Add PTH ruff rules and fix uses of pathlib manually",
          "timestamp": "2025-06-09T09:09:27-06:00",
          "tree_id": "fbd21634b0cb1272184eff28827806c8a608ee0d",
          "url": "https://github.com/cocotb/cocotb/commit/797b3d7e5c05017522a60766ec8fcb791d75f591"
        },
        "date": 1749481972097,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1561054792985735,
            "unit": "iter/sec",
            "range": "stddev: 0.03601137521508545",
            "extra": "mean: 6.405925048200009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23576671849150976,
            "unit": "iter/sec",
            "range": "stddev: 0.024644691696259755",
            "extra": "mean: 4.241480758599994 sec\nrounds: 5"
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
          "id": "de65e7491088146041ce734319e388a748c00642",
          "message": "Bump Sphinx to 8.2 to use new py:decorator role",
          "timestamp": "2025-06-09T09:12:32-06:00",
          "tree_id": "f46cdd646cc511854b5bba83d53570289a273907",
          "url": "https://github.com/cocotb/cocotb/commit/de65e7491088146041ce734319e388a748c00642"
        },
        "date": 1749482193374,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1568895201367181,
            "unit": "iter/sec",
            "range": "stddev: 0.018420621432711393",
            "extra": "mean: 6.373912031399999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23775154450778346,
            "unit": "iter/sec",
            "range": "stddev: 0.02823889458380587",
            "extra": "mean: 4.2060715192000036 sec\nrounds: 5"
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
          "id": "781d740d4e81a820dc78662ec34ec9e088a768df",
          "message": "Lint all pyprojects using validate-pyproject",
          "timestamp": "2025-06-09T09:46:46-06:00",
          "tree_id": "55ff23043fdf6ea7ca839718365204fe1302a002",
          "url": "https://github.com/cocotb/cocotb/commit/781d740d4e81a820dc78662ec34ec9e088a768df"
        },
        "date": 1749484230261,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15694675552286852,
            "unit": "iter/sec",
            "range": "stddev: 0.022349211549440234",
            "extra": "mean: 6.37158759140001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2366099518535221,
            "unit": "iter/sec",
            "range": "stddev: 0.04959910012865568",
            "extra": "mean: 4.2263649189999795 sec\nrounds: 5"
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
          "id": "244a7d860b4ee0ebf42bdfd1b2098c9830601555",
          "message": "Apply suggestions from code review\n\nCo-authored-by: Colin Marquardt <cmarqu42@gmail.com>",
          "timestamp": "2025-06-09T09:53:03-06:00",
          "tree_id": "b0726fbb16aae63b1b43395c1d7d6516bc3ea201",
          "url": "https://github.com/cocotb/cocotb/commit/244a7d860b4ee0ebf42bdfd1b2098c9830601555"
        },
        "date": 1749484607435,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15765502705996373,
            "unit": "iter/sec",
            "range": "stddev: 0.02910891307944136",
            "extra": "mean: 6.342962978399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23741297542866624,
            "unit": "iter/sec",
            "range": "stddev: 0.030098620157399607",
            "extra": "mean: 4.212069699200003 sec\nrounds: 5"
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
          "id": "46a2aa015f6d7aa1ae3c60a70374d557117b94d0",
          "message": "Use ellipses instead of pass",
          "timestamp": "2025-06-09T10:35:04-06:00",
          "tree_id": "f331d9f2c771c3c8dda3f858df84b53fb0f54eb2",
          "url": "https://github.com/cocotb/cocotb/commit/46a2aa015f6d7aa1ae3c60a70374d557117b94d0"
        },
        "date": 1749487099487,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1576816891433047,
            "unit": "iter/sec",
            "range": "stddev: 0.04068584096043852",
            "extra": "mean: 6.3418904593999965 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23693765846098855,
            "unit": "iter/sec",
            "range": "stddev: 0.033067725984217027",
            "extra": "mean: 4.220519467000003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a6f6dff5536e223bf6d12531ab441fa3fd63f46e",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.11.12 → v0.11.13](https://github.com/astral-sh/ruff-pre-commit/compare/v0.11.12...v0.11.13)",
          "timestamp": "2025-06-09T14:51:04-06:00",
          "tree_id": "a55f0c470552e997eeb4b20ec64ed6fce4ad99dd",
          "url": "https://github.com/cocotb/cocotb/commit/a6f6dff5536e223bf6d12531ab441fa3fd63f46e"
        },
        "date": 1749502470857,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15661451593979708,
            "unit": "iter/sec",
            "range": "stddev: 0.0073565071057244275",
            "extra": "mean: 6.385104177599999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23133751122675653,
            "unit": "iter/sec",
            "range": "stddev: 0.057137846292636484",
            "extra": "mean: 4.322688502600005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "fa250c09c49426772ad23664d3c52332a8709054",
          "message": "Fix unnecessary uses of Any in cocotb.queue",
          "timestamp": "2025-06-09T16:00:27-06:00",
          "tree_id": "5553a22e70f05510c9c9536f5fe73266981e41c9",
          "url": "https://github.com/cocotb/cocotb/commit/fa250c09c49426772ad23664d3c52332a8709054"
        },
        "date": 1749506630737,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15766259135406807,
            "unit": "iter/sec",
            "range": "stddev: 0.025894220504540835",
            "extra": "mean: 6.342658657400011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2372914620591567,
            "unit": "iter/sec",
            "range": "stddev: 0.03526760574226812",
            "extra": "mean: 4.214226636400008 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f2bf64a56b3e595d49c78209fe05f97d3b5fa181",
          "message": "Add envvar to customize installing pytest assertion rewriting hook",
          "timestamp": "2025-06-09T18:42:48-06:00",
          "tree_id": "6f3bdb715ea19d5e8ef5c8486e84187b951b3f6e",
          "url": "https://github.com/cocotb/cocotb/commit/f2bf64a56b3e595d49c78209fe05f97d3b5fa181"
        },
        "date": 1749516377984,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1556102182549295,
            "unit": "iter/sec",
            "range": "stddev: 0.06488122197463086",
            "extra": "mean: 6.426313202400007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23501098699371778,
            "unit": "iter/sec",
            "range": "stddev: 0.04709430556943949",
            "extra": "mean: 4.255120208599999 sec\nrounds: 5"
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
          "id": "af7f0ed955bd871fc3ce1008ec3a15792b96e0de",
          "message": "Use absolute path to build dir in NVC Runner\n\nBecause the test_dir runs the test out of another directory this must be\nspecified absolutely.",
          "timestamp": "2025-06-10T22:30:17-06:00",
          "tree_id": "0ba6262fbd6e5045a72aa9731c62c4e3b1388590",
          "url": "https://github.com/cocotb/cocotb/commit/af7f0ed955bd871fc3ce1008ec3a15792b96e0de"
        },
        "date": 1749616416019,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15786836357264214,
            "unit": "iter/sec",
            "range": "stddev: 0.026540026695684425",
            "extra": "mean: 6.334391371199945 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23748172622050728,
            "unit": "iter/sec",
            "range": "stddev: 0.026988724596229946",
            "extra": "mean: 4.210850308000022 sec\nrounds: 5"
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
          "id": "d0bf2cbfd159a2ab738c1083282cead62d68e090",
          "message": "Use short \"a | b\" syntax for Literal types in docs (#4741)\n\nhttps://www.sphinx-doc.org/en/master/usage/configuration.html#confval-python_display_short_literal_types",
          "timestamp": "2025-06-11T16:31:38+02:00",
          "tree_id": "9f2b0d668ae270f2275dfc5686707f4b6a764327",
          "url": "https://github.com/cocotb/cocotb/commit/d0bf2cbfd159a2ab738c1083282cead62d68e090"
        },
        "date": 1749652495450,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15712993726799893,
            "unit": "iter/sec",
            "range": "stddev: 0.08292870807073273",
            "extra": "mean: 6.364159608200009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.236783947054323,
            "unit": "iter/sec",
            "range": "stddev: 0.05006182361034329",
            "extra": "mean: 4.223259272600012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "5733bf6de856b917a76f47b4df966121c14fbd81",
          "message": "Fix how TimeUnits are displayed in the docs",
          "timestamp": "2025-06-11T08:44:52-06:00",
          "tree_id": "9b9e4a8001ac082d2a43b036c0c4e0d844c8fe51",
          "url": "https://github.com/cocotb/cocotb/commit/5733bf6de856b917a76f47b4df966121c14fbd81"
        },
        "date": 1749653287430,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15639472731899895,
            "unit": "iter/sec",
            "range": "stddev: 0.09916463792926844",
            "extra": "mean: 6.3940774547999695 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23707813301901348,
            "unit": "iter/sec",
            "range": "stddev: 0.045207451295472045",
            "extra": "mean: 4.218018706599992 sec\nrounds: 5"
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
          "id": "fe55f36441a1a7279888e2c49d83f3b9ece1bc7b",
          "message": "Fix instances of union of literals",
          "timestamp": "2025-06-11T10:16:12-06:00",
          "tree_id": "d294c5d32f27f4d3e8d199a041009a1ed34f0906",
          "url": "https://github.com/cocotb/cocotb/commit/fe55f36441a1a7279888e2c49d83f3b9ece1bc7b"
        },
        "date": 1749658783718,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1583883319459344,
            "unit": "iter/sec",
            "range": "stddev: 0.019324624024990033",
            "extra": "mean: 6.3135963849998005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23998705158887282,
            "unit": "iter/sec",
            "range": "stddev: 0.01851987440142609",
            "extra": "mean: 4.166891477599893 sec\nrounds: 5"
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
          "id": "e4486c6b7d7a492cb8ca576ba79907dc2060c549",
          "message": "Deprecate Lock name field like Event",
          "timestamp": "2025-06-11T16:52:25-06:00",
          "tree_id": "98cd2171a3c4a839f7921e5c8cff645e7f0f496f",
          "url": "https://github.com/cocotb/cocotb/commit/e4486c6b7d7a492cb8ca576ba79907dc2060c549"
        },
        "date": 1749682540352,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15766578279261412,
            "unit": "iter/sec",
            "range": "stddev: 0.01525359409154251",
            "extra": "mean: 6.342530270600003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2382255314771573,
            "unit": "iter/sec",
            "range": "stddev: 0.03606777800770652",
            "extra": "mean: 4.197702881800001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "csantosb@inventati.org",
            "name": "Cayetano Santos",
            "username": "csantosb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3cbc827d104e17d2ea3bb935aaf2e3ed38f66f39",
          "message": "Correct installation instructions for Guix (#4748)\n\nThis package is now part of guix, no need to refer to guix-science\nchannel anymore.\n\n    https://codeberg.org/guix/guix/pulls/56",
          "timestamp": "2025-06-12T15:46:58+02:00",
          "tree_id": "b8998a1abf79bbb6038c2b99df1d36c27b85dcc7",
          "url": "https://github.com/cocotb/cocotb/commit/3cbc827d104e17d2ea3bb935aaf2e3ed38f66f39"
        },
        "date": 1749736213781,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15615208017308427,
            "unit": "iter/sec",
            "range": "stddev: 0.02743634637128486",
            "extra": "mean: 6.404013311199992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23483028472541087,
            "unit": "iter/sec",
            "range": "stddev: 0.05230640182863931",
            "extra": "mean: 4.2583945302000075 sec\nrounds: 5"
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
          "id": "ad02cf3777909c177adbf2781d2d2a7acea42c62",
          "message": "Use setup-nvc to run NVC CI tests with pre-built binaries",
          "timestamp": "2025-06-12T09:41:48-06:00",
          "tree_id": "593a53a6bb44a99553a6efa18897a3dd3a2c6730",
          "url": "https://github.com/cocotb/cocotb/commit/ad02cf3777909c177adbf2781d2d2a7acea42c62"
        },
        "date": 1749743111164,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1575582013241171,
            "unit": "iter/sec",
            "range": "stddev: 0.03133299017879834",
            "extra": "mean: 6.346860979600001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23839230733152728,
            "unit": "iter/sec",
            "range": "stddev: 0.031029362994376145",
            "extra": "mean: 4.1947662287999945 sec\nrounds: 5"
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
          "id": "a86df8ca6f23073327f2b380349e0d339eaa44be",
          "message": "[2.0 upgrade guide] `cocotb.fork` and `cocotb.coroutine`",
          "timestamp": "2025-06-13T08:46:05-06:00",
          "tree_id": "3acc0219c1f54c27c70864a2501b66a92a1aad3e",
          "url": "https://github.com/cocotb/cocotb/commit/a86df8ca6f23073327f2b380349e0d339eaa44be"
        },
        "date": 1749826167020,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1563831720143691,
            "unit": "iter/sec",
            "range": "stddev: 0.03258092079760036",
            "extra": "mean: 6.3945499193999975 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23631292334475637,
            "unit": "iter/sec",
            "range": "stddev: 0.024475844557793693",
            "extra": "mean: 4.231677158600007 sec\nrounds: 5"
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
          "id": "3a349932a94be66c18b21f3acfcafb83436529ee",
          "message": "Fix combine_results not finding results.xml files",
          "timestamp": "2025-06-13T10:51:42-06:00",
          "tree_id": "6a556c342bca44a6c4a56769b47d866155a712ec",
          "url": "https://github.com/cocotb/cocotb/commit/3a349932a94be66c18b21f3acfcafb83436529ee"
        },
        "date": 1749833697603,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1576207589936888,
            "unit": "iter/sec",
            "range": "stddev: 0.0360167012736789",
            "extra": "mean: 6.344341991400006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2385436069192884,
            "unit": "iter/sec",
            "range": "stddev: 0.009101770732667262",
            "extra": "mean: 4.192105640199998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "72cc47a3afb765e134b587508931c1e9ba533993",
          "message": "Correct activation of base conda environment in CI",
          "timestamp": "2025-06-15T09:54:10-06:00",
          "tree_id": "8d41729db3b30fcd5ed66f7e25c87c0d706adce2",
          "url": "https://github.com/cocotb/cocotb/commit/72cc47a3afb765e134b587508931c1e9ba533993"
        },
        "date": 1750003050186,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15715464248425484,
            "unit": "iter/sec",
            "range": "stddev: 0.020592785350740002",
            "extra": "mean: 6.36315914180002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2384351311897104,
            "unit": "iter/sec",
            "range": "stddev: 0.022922690788959064",
            "extra": "mean: 4.194012832800013 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "dd0364de42dc63fa23420ffab1208d568434eb32",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/pre-commit/mirrors-clang-format: v20.1.5 → v20.1.6](https://github.com/pre-commit/mirrors-clang-format/compare/v20.1.5...v20.1.6)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.05.12 → 2025.06.13](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.05.12...2025.06.13)",
          "timestamp": "2025-06-16T13:47:33-06:00",
          "tree_id": "441f65403dff7a723480525e89febeafcb5f8591",
          "url": "https://github.com/cocotb/cocotb/commit/dd0364de42dc63fa23420ffab1208d568434eb32"
        },
        "date": 1750103470374,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15759746738335745,
            "unit": "iter/sec",
            "range": "stddev: 0.039492003579657285",
            "extra": "mean: 6.345279633000001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23821609442170888,
            "unit": "iter/sec",
            "range": "stddev: 0.005910778851115009",
            "extra": "mean: 4.197869176000012 sec\nrounds: 5"
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
          "id": "92dc5bc675b1b8a79ae7bddc4031ca8d1d0f23f4",
          "message": "Add timing model to docs",
          "timestamp": "2025-06-17T10:37:15-06:00",
          "tree_id": "3f0586a833367d7ae3decb30bb5bf05aef62d604",
          "url": "https://github.com/cocotb/cocotb/commit/92dc5bc675b1b8a79ae7bddc4031ca8d1d0f23f4"
        },
        "date": 1750178448656,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15568231253309833,
            "unit": "iter/sec",
            "range": "stddev: 0.10112146072860952",
            "extra": "mean: 6.423337267599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23181380874888474,
            "unit": "iter/sec",
            "range": "stddev: 0.04038694983708773",
            "extra": "mean: 4.313806866799996 sec\nrounds: 5"
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
          "id": "d1598adb9ab23654c5ccb06cbcf44ae9eb507594",
          "message": "Fix Riviera Python runner for VHDL",
          "timestamp": "2025-06-17T12:45:53-06:00",
          "tree_id": "d11db2674078fbb4cf838e210ff0885857ca49ed",
          "url": "https://github.com/cocotb/cocotb/commit/d1598adb9ab23654c5ccb06cbcf44ae9eb507594"
        },
        "date": 1750186177483,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15069905074739984,
            "unit": "iter/sec",
            "range": "stddev: 0.04123096116806859",
            "extra": "mean: 6.635741864599993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2273961722720037,
            "unit": "iter/sec",
            "range": "stddev: 0.04534009611248762",
            "extra": "mean: 4.397611402200004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter.birch@intuity-design.co.uk",
            "name": "Peter Birch",
            "username": "Intuity"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66994ce19a5bcb1826e499f55f1830d4af0306f6",
          "message": "Add Forastero to ecosystem-compat.yml",
          "timestamp": "2025-06-17T13:03:58-06:00",
          "tree_id": "67cf2070d2e95d5a891f6122c3c53bd3641825c8",
          "url": "https://github.com/cocotb/cocotb/commit/66994ce19a5bcb1826e499f55f1830d4af0306f6"
        },
        "date": 1750187256332,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1576631254837382,
            "unit": "iter/sec",
            "range": "stddev: 0.060523451362165456",
            "extra": "mean: 6.342637169800002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23900982384545272,
            "unit": "iter/sec",
            "range": "stddev: 0.016559170989017154",
            "extra": "mean: 4.183928442399986 sec\nrounds: 5"
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
          "id": "d73830e18629efc6c4b9aeb64e3b3bc525327b4d",
          "message": "Docs: Tweak font size of headings; small color and padding fixes (#4763)\n\n* Base font sizes on cocotb.org but apply non-linear scaling\n* Reduce top/bottom margins for headings by a factor of 0.7\n* Tweak font sizes more, make h6 (which we don't use yet) italic\n* Define --pst-color-secondary-highlight (used in Back to top hover)\n* Remove padding-left of Parameters: lists",
          "timestamp": "2025-06-22T21:04:28+02:00",
          "tree_id": "ea1e9f35e296a0b231229df0e9ae8135296676e4",
          "url": "https://github.com/cocotb/cocotb/commit/d73830e18629efc6c4b9aeb64e3b3bc525327b4d"
        },
        "date": 1750619265562,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15845265184333268,
            "unit": "iter/sec",
            "range": "stddev: 0.020018498368348393",
            "extra": "mean: 6.311033538199996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23849937628778345,
            "unit": "iter/sec",
            "range": "stddev: 0.02332296722723842",
            "extra": "mean: 4.192883082400004 sec\nrounds: 5"
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
          "id": "a30deedc1e93e847b654ca33a838985080bdf060",
          "message": "Align e.g. left margin of Usage: with Parameters: (#4764)",
          "timestamp": "2025-06-23T08:26:29+02:00",
          "tree_id": "df3cd11ac3fdc33acbaf77d25765cb8b7da161d4",
          "url": "https://github.com/cocotb/cocotb/commit/a30deedc1e93e847b654ca33a838985080bdf060"
        },
        "date": 1750660190590,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1578468732637115,
            "unit": "iter/sec",
            "range": "stddev: 0.035718959186869334",
            "extra": "mean: 6.335253776800005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23778452937611547,
            "unit": "iter/sec",
            "range": "stddev: 0.04555458204335343",
            "extra": "mean: 4.205488063600012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilberto@hudson-trading.com",
            "name": "Gilberto Abram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10c89b59273130ce0043055c1d31d8fe518286da",
          "message": "LogicArray: enforce _value_as_int to be an int (#4759)",
          "timestamp": "2025-06-23T14:03:53-06:00",
          "tree_id": "78d86005b3fc3492a1f5295098aa5718d440de8a",
          "url": "https://github.com/cocotb/cocotb/commit/10c89b59273130ce0043055c1d31d8fe518286da"
        },
        "date": 1750709236112,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1579843862927665,
            "unit": "iter/sec",
            "range": "stddev: 0.04528172718370904",
            "extra": "mean: 6.329739434799995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23748241406982692,
            "unit": "iter/sec",
            "range": "stddev: 0.036027239747359656",
            "extra": "mean: 4.210838111600003 sec\nrounds: 5"
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
          "id": "11edcbfaea70b702205b4e3cc66f4c753d20e90d",
          "message": "Pass repo root into combine_results.py rather than guess",
          "timestamp": "2025-06-23T14:57:23-06:00",
          "tree_id": "d5d2b049c1fc67b90a7a1da5feafc71abaa70c20",
          "url": "https://github.com/cocotb/cocotb/commit/11edcbfaea70b702205b4e3cc66f4c753d20e90d"
        },
        "date": 1750712445178,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1580084202729508,
            "unit": "iter/sec",
            "range": "stddev: 0.021500338889801466",
            "extra": "mean: 6.328776645400007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2378514052142119,
            "unit": "iter/sec",
            "range": "stddev: 0.021381940792205477",
            "extra": "mean: 4.204305621399999 sec\nrounds: 5"
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
          "id": "9e24942f670903879fce71b092b3481401e6299e",
          "message": "Manually fix PLC0415",
          "timestamp": "2025-06-25T14:35:02-06:00",
          "tree_id": "1fc05ee240c38121c1331289b83004994839d8e7",
          "url": "https://github.com/cocotb/cocotb/commit/9e24942f670903879fce71b092b3481401e6299e"
        },
        "date": 1750883910855,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1576507410324937,
            "unit": "iter/sec",
            "range": "stddev: 0.025843422593223073",
            "extra": "mean: 6.343135423599994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23720763804104555,
            "unit": "iter/sec",
            "range": "stddev: 0.0156379682950734",
            "extra": "mean: 4.215715852400012 sec\nrounds: 5"
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
          "id": "b92e60acdf2b42e00a2322c06391a84a17072599",
          "message": "Map vpiPackedArray objects to LogicArrayObject",
          "timestamp": "2025-06-25T15:02:26-06:00",
          "tree_id": "cf2016bee4c561615561d8b5cdfcbe95a71c7ef5",
          "url": "https://github.com/cocotb/cocotb/commit/b92e60acdf2b42e00a2322c06391a84a17072599"
        },
        "date": 1750885543520,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15864127483911936,
            "unit": "iter/sec",
            "range": "stddev: 0.03245885463002605",
            "extra": "mean: 6.303529778200004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.237470988225174,
            "unit": "iter/sec",
            "range": "stddev: 0.014027541856180254",
            "extra": "mean: 4.211040714800004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "f4a2cd043d370be8c9d8520651de9c72b084fc3b",
          "message": "Fix CI issues",
          "timestamp": "2025-06-25T15:04:38-06:00",
          "tree_id": "cb2003eb2d5c3976e0b529ade15034e0e50137d7",
          "url": "https://github.com/cocotb/cocotb/commit/f4a2cd043d370be8c9d8520651de9c72b084fc3b"
        },
        "date": 1750885897412,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1565144147136649,
            "unit": "iter/sec",
            "range": "stddev: 0.0599310494230995",
            "extra": "mean: 6.389187870199999 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23654795771837642,
            "unit": "iter/sec",
            "range": "stddev: 0.03706510216165443",
            "extra": "mean: 4.227472558400001 sec\nrounds: 5"
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
          "id": "b1bcf48e4122a7f4a31d975d4beab2873abe6bf2",
          "message": "Use normal dict for inertial write cache",
          "timestamp": "2025-06-29T10:16:17-06:00",
          "tree_id": "a942b65688a47494483f5b3b054a705a3f42dc0e",
          "url": "https://github.com/cocotb/cocotb/commit/b1bcf48e4122a7f4a31d975d4beab2873abe6bf2"
        },
        "date": 1751213976297,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15861866865402127,
            "unit": "iter/sec",
            "range": "stddev: 0.03060816518670278",
            "extra": "mean: 6.304428151399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23836229949936177,
            "unit": "iter/sec",
            "range": "stddev: 0.018889448585031873",
            "extra": "mean: 4.195294315000001 sec\nrounds: 5"
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
          "id": "612ecfeb255296679e124e59db2710ec1ebb3bc9",
          "message": "Add ability to get and set Task name",
          "timestamp": "2025-06-29T15:56:21-06:00",
          "tree_id": "46e4ab8b5aa92554682f4caa1b7b8cd71f7c52f3",
          "url": "https://github.com/cocotb/cocotb/commit/612ecfeb255296679e124e59db2710ec1ebb3bc9"
        },
        "date": 1751234396641,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1583704521083069,
            "unit": "iter/sec",
            "range": "stddev: 0.0167929261105611",
            "extra": "mean: 6.314309182600027 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23692607275368507,
            "unit": "iter/sec",
            "range": "stddev: 0.02358916165563682",
            "extra": "mean: 4.220725850799999 sec\nrounds: 5"
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
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a46501d33581dd015477f02c23d41ae5cf15a165",
          "message": "Add CSS classes removed, deprecated, new and use in 'Upgrading to 2.0'",
          "timestamp": "2025-06-30T13:56:34-06:00",
          "tree_id": "53fed95b5078cbcab699e23b1ef5222931072860",
          "url": "https://github.com/cocotb/cocotb/commit/a46501d33581dd015477f02c23d41ae5cf15a165"
        },
        "date": 1751313617271,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15686348124666874,
            "unit": "iter/sec",
            "range": "stddev: 0.04128830443963332",
            "extra": "mean: 6.3749700826000035 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23368918913437492,
            "unit": "iter/sec",
            "range": "stddev: 0.07130394516049779",
            "extra": "mean: 4.279188111800005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8f9456fc1512ada1aba490e8bf0bac5b232143e7",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.12.0 → v0.12.1](https://github.com/astral-sh/ruff-pre-commit/compare/v0.12.0...v0.12.1)\n- [github.com/pre-commit/mirrors-clang-format: v20.1.6 → v20.1.7](https://github.com/pre-commit/mirrors-clang-format/compare/v20.1.6...v20.1.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.06.13 → 2025.06.23](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.06.13...2025.06.23)",
          "timestamp": "2025-06-30T13:57:02-06:00",
          "tree_id": "258a9184505fb323d875571cd86415ff7f26876d",
          "url": "https://github.com/cocotb/cocotb/commit/8f9456fc1512ada1aba490e8bf0bac5b232143e7"
        },
        "date": 1751313819100,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1591320317684975,
            "unit": "iter/sec",
            "range": "stddev: 0.008317668400266928",
            "extra": "mean: 6.284089940199988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23665091868269186,
            "unit": "iter/sec",
            "range": "stddev: 0.02444680787515914",
            "extra": "mean: 4.225633289599978 sec\nrounds: 5"
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
          "id": "bc9545a17aeea96a0b549bf8d0b0b0e53a22fc9c",
          "message": "Don't use runtime cast type arguments\n\nThis incures unnecessary runtime overhead.",
          "timestamp": "2025-07-02T09:29:34-06:00",
          "tree_id": "bd6e645424d49f3e44fd0e13f6fb46d17a71c93a",
          "url": "https://github.com/cocotb/cocotb/commit/bc9545a17aeea96a0b549bf8d0b0b0e53a22fc9c"
        },
        "date": 1751470441584,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15912557760184623,
            "unit": "iter/sec",
            "range": "stddev: 0.05533155821645557",
            "extra": "mean: 6.284344824200014 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23907349514304815,
            "unit": "iter/sec",
            "range": "stddev: 0.03582487353554153",
            "extra": "mean: 4.182814156800009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilberto@hudson-trading.com",
            "name": "Gilberto Abram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89979d14ef28b473d6939f86250bb661f98f9bb0",
          "message": "Verilator: wrap up trace and coverage on abort (#4758)",
          "timestamp": "2025-07-03T08:19:09-06:00",
          "tree_id": "f2e36de76929aa88d92c45205b98951a04da70ce",
          "url": "https://github.com/cocotb/cocotb/commit/89979d14ef28b473d6939f86250bb661f98f9bb0"
        },
        "date": 1751552575074,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15670890017776484,
            "unit": "iter/sec",
            "range": "stddev: 0.08656683887194837",
            "extra": "mean: 6.381258491799997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23574917105890614,
            "unit": "iter/sec",
            "range": "stddev: 0.02538382502477088",
            "extra": "mean: 4.241796463200001 sec\nrounds: 5"
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
          "id": "6ba99b5e3caaab6209baa0eabaef2a5aea222c68",
          "message": "Introduce deprecated __len__ for Logic",
          "timestamp": "2025-07-03T13:19:18-06:00",
          "tree_id": "0b44e80e9beabe9d74d578cd01ac7508e3303927",
          "url": "https://github.com/cocotb/cocotb/commit/6ba99b5e3caaab6209baa0eabaef2a5aea222c68"
        },
        "date": 1751570573826,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15865419969276306,
            "unit": "iter/sec",
            "range": "stddev: 0.009452599008599606",
            "extra": "mean: 6.3030162575999835 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2388145474667196,
            "unit": "iter/sec",
            "range": "stddev: 0.019870788598750744",
            "extra": "mean: 4.187349600799996 sec\nrounds: 5"
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
          "id": "2f707d1d6e590e56f18409bcf988d31f3eb18b8e",
          "message": "Use normal font for 'pre' to make docs look less busy (#4786)",
          "timestamp": "2025-07-03T22:26:49+02:00",
          "tree_id": "d22c46269b8e45a817b7d05b07c695e19551de51",
          "url": "https://github.com/cocotb/cocotb/commit/2f707d1d6e590e56f18409bcf988d31f3eb18b8e"
        },
        "date": 1751574615611,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15788151829341995,
            "unit": "iter/sec",
            "range": "stddev: 0.045299425664667686",
            "extra": "mean: 6.333863588399993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23830579922122064,
            "unit": "iter/sec",
            "range": "stddev: 0.015208134516835121",
            "extra": "mean: 4.1962889835999935 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "themperek@gmail.com",
            "name": "Tomasz Hemperek",
            "username": "themperek"
          },
          "committer": {
            "email": "themperek@users.noreply.github.com",
            "name": "Tomasz Hemperek",
            "username": "themperek"
          },
          "distinct": true,
          "id": "aa8e7ce411aee586956dc5498d4092385f9bea07",
          "message": "Force mingw on windows when testing for mingw",
          "timestamp": "2025-07-04T15:29:29+02:00",
          "tree_id": "5588379317ef0ff6c880e57bfc8afd539d920d4f",
          "url": "https://github.com/cocotb/cocotb/commit/aa8e7ce411aee586956dc5498d4092385f9bea07"
        },
        "date": 1751635980613,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1566315004587763,
            "unit": "iter/sec",
            "range": "stddev: 0.04435751562652065",
            "extra": "mean: 6.384411801399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23471345364986895,
            "unit": "iter/sec",
            "range": "stddev: 0.046604719207675525",
            "extra": "mean: 4.2605141905999915 sec\nrounds: 5"
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
          "id": "4693f03446af303fb237f22509e26c3558448954",
          "message": "Correct typing on cocotb.test decorator",
          "timestamp": "2025-07-04T15:08:25-06:00",
          "tree_id": "45d05ace2c724e5030a27895bdf2fec72f2e2d2c",
          "url": "https://github.com/cocotb/cocotb/commit/4693f03446af303fb237f22509e26c3558448954"
        },
        "date": 1751663511753,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15715550167336303,
            "unit": "iter/sec",
            "range": "stddev: 0.029633626700312304",
            "extra": "mean: 6.363124353599988 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23786143416937394,
            "unit": "iter/sec",
            "range": "stddev: 0.03411326863356684",
            "extra": "mean: 4.204128355199987 sec\nrounds: 5"
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
          "id": "8a9287eba0ddac788bff2395fbb306fca8af304e",
          "message": "Update src/cocotb/share/lib/vpi/VpiImpl.cpp\n\nCo-authored-by: Colin Marquardt <cmarqu42@gmail.com>",
          "timestamp": "2025-07-05T00:20:47-06:00",
          "tree_id": "686b0f06e0475fd7a2a1d77f8982e0ca0de30468",
          "url": "https://github.com/cocotb/cocotb/commit/8a9287eba0ddac788bff2395fbb306fca8af304e"
        },
        "date": 1751696698684,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15896796441396668,
            "unit": "iter/sec",
            "range": "stddev: 0.03155889191404945",
            "extra": "mean: 6.290575611800068 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23802833604889112,
            "unit": "iter/sec",
            "range": "stddev: 0.03959038143326687",
            "extra": "mean: 4.201180483800044 sec\nrounds: 5"
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
          "id": "ad76ef4e22f5ef18379aa6d11661e50ab23e8661",
          "message": "Add literal type RoundMode and use it (#4772)\n\n* Add literal type RoundMode and use it\n\n* Fix docs for Timer.round_mode\n\n---------\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2025-07-05T17:23:10+02:00",
          "tree_id": "f15a8e8e35634b4531dfbe6ea13182e0dcdd6f8d",
          "url": "https://github.com/cocotb/cocotb/commit/ad76ef4e22f5ef18379aa6d11661e50ab23e8661"
        },
        "date": 1751729198402,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15756974083574882,
            "unit": "iter/sec",
            "range": "stddev: 0.03270269214779395",
            "extra": "mean: 6.346396171599997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23824821636735558,
            "unit": "iter/sec",
            "range": "stddev: 0.041495015517508026",
            "extra": "mean: 4.197303195999996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ab8d08b7600cd648b7b8ed27b636dc83c6f0d5d7",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.12.1 → v0.12.2](https://github.com/astral-sh/ruff-pre-commit/compare/v0.12.1...v0.12.2)",
          "timestamp": "2025-07-07T14:36:21-06:00",
          "tree_id": "c03d08a96e31e8cb9c28230d5a7c2147cfd3c4ea",
          "url": "https://github.com/cocotb/cocotb/commit/ab8d08b7600cd648b7b8ed27b636dc83c6f0d5d7"
        },
        "date": 1751920784779,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15796379557064713,
            "unit": "iter/sec",
            "range": "stddev: 0.04030867753307207",
            "extra": "mean: 6.330564522000003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23706143611087444,
            "unit": "iter/sec",
            "range": "stddev: 0.06576610818209416",
            "extra": "mean: 4.218315793600004 sec\nrounds: 5"
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
          "id": "c87615a1c64daae52bc1f72774775aa332274b8d",
          "message": "[2.0 upgrade docs] BinaryValue -> LogicArray",
          "timestamp": "2025-07-09T07:25:41-06:00",
          "tree_id": "7700d0397ff4fe541b87d9ced9e87dcc843fcbf8",
          "url": "https://github.com/cocotb/cocotb/commit/c87615a1c64daae52bc1f72774775aa332274b8d"
        },
        "date": 1752067758626,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15707228657995864,
            "unit": "iter/sec",
            "range": "stddev: 0.05167619112646962",
            "extra": "mean: 6.366495463799998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23451824435193147,
            "unit": "iter/sec",
            "range": "stddev: 0.04140121876992749",
            "extra": "mean: 4.264060575600007 sec\nrounds: 5"
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
          "id": "e207019099bd96b7399173fc3782dfccbe9bb5c6",
          "message": "Split AbstractArray into mutable and immutable versions",
          "timestamp": "2025-07-09T10:51:48-06:00",
          "tree_id": "f3266835dbc04722f7f2fc239935de97a943e684",
          "url": "https://github.com/cocotb/cocotb/commit/e207019099bd96b7399173fc3782dfccbe9bb5c6"
        },
        "date": 1752080113780,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.159453280572437,
            "unit": "iter/sec",
            "range": "stddev: 0.013614901426177068",
            "extra": "mean: 6.271429451999995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23646266222139747,
            "unit": "iter/sec",
            "range": "stddev: 0.039558679178924146",
            "extra": "mean: 4.228997468800003 sec\nrounds: 5"
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
          "id": "fd022ca1456f86f5c2ac7ff9083f545bf9f0fc1c",
          "message": "CI: Use Questa 2025.2",
          "timestamp": "2025-07-09T17:54:58+01:00",
          "tree_id": "34d75ea8a4deea39b2cfdac587adcde6480c7f19",
          "url": "https://github.com/cocotb/cocotb/commit/fd022ca1456f86f5c2ac7ff9083f545bf9f0fc1c"
        },
        "date": 1752080320762,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1584690314729463,
            "unit": "iter/sec",
            "range": "stddev: 0.03067467858845672",
            "extra": "mean: 6.310381218999998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23812000623839963,
            "unit": "iter/sec",
            "range": "stddev: 0.022395509082424853",
            "extra": "mean: 4.199563135399996 sec\nrounds: 5"
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
          "id": "f01d302d5e32b11866944f85630e2c680fd3e4ab",
          "message": "Make a manually inserted horizontal rule better visible (#4797)",
          "timestamp": "2025-07-09T19:04:33+02:00",
          "tree_id": "c8cee0168f19d53f45c6976b1f513a75cdacabc6",
          "url": "https://github.com/cocotb/cocotb/commit/f01d302d5e32b11866944f85630e2c680fd3e4ab"
        },
        "date": 1752080948228,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15847766985766804,
            "unit": "iter/sec",
            "range": "stddev: 0.07647012768921845",
            "extra": "mean: 6.310037249399994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2388469844115548,
            "unit": "iter/sec",
            "range": "stddev: 0.028523419623017365",
            "extra": "mean: 4.186780932000005 sec\nrounds: 5"
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
          "id": "321cb98fcfecc948b605cff7c5d213ac4fad38cc",
          "message": "add Task._schedule_resume",
          "timestamp": "2025-07-09T12:05:38-06:00",
          "tree_id": "0c699049c1df65c3efea6f459ae7a8646fc9d28b",
          "url": "https://github.com/cocotb/cocotb/commit/321cb98fcfecc948b605cff7c5d213ac4fad38cc"
        },
        "date": 1752084555988,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15939575044961507,
            "unit": "iter/sec",
            "range": "stddev: 0.0370862232250003",
            "extra": "mean: 6.273692976000007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23624481658384064,
            "unit": "iter/sec",
            "range": "stddev: 0.05697979345838899",
            "extra": "mean: 4.232897104200004 sec\nrounds: 5"
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
          "id": "52e4ed26b6220e32147e35012523c9846a8070a4",
          "message": "Update src/cocotb/clock.py",
          "timestamp": "2025-07-09T15:39:46-06:00",
          "tree_id": "a9dbb7921cfcafc8ca3f079670c541a75e3b15f7",
          "url": "https://github.com/cocotb/cocotb/commit/52e4ed26b6220e32147e35012523c9846a8070a4"
        },
        "date": 1752097415902,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15761712868852415,
            "unit": "iter/sec",
            "range": "stddev: 0.027979810228371597",
            "extra": "mean: 6.344488116999992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23814046727502666,
            "unit": "iter/sec",
            "range": "stddev: 0.02463017108478723",
            "extra": "mean: 4.199202308799988 sec\nrounds: 5"
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
          "id": "792f38912d45731eb82fdfc708c64a0f7def69c5",
          "message": "Small Fixes (#4793)\n\n* avoid vlt virtual classes\n* Fix cocotb_tools.config finding cocotb\n\nCo-authored-by: Andrew Nolte <anolte@hudson-trading.com>",
          "timestamp": "2025-07-09T16:31:01-06:00",
          "tree_id": "1df6531697ef8bc4c6fd7b814731dd43308e9947",
          "url": "https://github.com/cocotb/cocotb/commit/792f38912d45731eb82fdfc708c64a0f7def69c5"
        },
        "date": 1752100482428,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15543582185118132,
            "unit": "iter/sec",
            "range": "stddev: 0.035267243994543875",
            "extra": "mean: 6.433523418800002 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23872185748473543,
            "unit": "iter/sec",
            "range": "stddev: 0.015260797404439518",
            "extra": "mean: 4.188975448399998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "abdelrahman.tharwat@siemens.com",
            "name": "Abdelrahman Tharwat"
          },
          "committer": {
            "email": "mail@philipp-wagner.com",
            "name": "Philipp Wagner",
            "username": "imphil"
          },
          "distinct": true,
          "id": "b837fa69c9de381e42a49a4d0d97f74d192b3ad6",
          "message": "Support the Questa QIS/Qrun flow\n\nUpdated Makefile for Questa simulator to use the new flow QIS and qrun\ninstead of +acc and vlog/vsim respectively.\nAlso using Visualizer instead of the classic GUI for Live simulation\nand adding option for Visualizer post simulation mode\nBy Default Questa runs in batch mode, to enable Live SIM mode set\nGUI=livesim, to enable Post SIM mode set GUI=postsim\n\nAdded vis cmd for Visualizer beside vsim cmd for Post SIM mode,\nand added same checks for the cmd as vsim\nChanged way of invoking Questa from running .DO file into directly\ninvoking Questa from bash/shell terminal\nVSIM_ARGS and other variables kept untouched for backward compatibility,\nalso SCRIPT_FILE is kept for user custom DO file\nAdded more variables for new design.bin and qwave.db file names\nfor user custom preferences\n\nFixes #2852",
          "timestamp": "2025-07-10T11:58:31+02:00",
          "tree_id": "b798b72b9168633aae80d85aa98cca192d3ec12d",
          "url": "https://github.com/cocotb/cocotb/commit/b837fa69c9de381e42a49a4d0d97f74d192b3ad6"
        },
        "date": 1752141717627,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15374950327517584,
            "unit": "iter/sec",
            "range": "stddev: 0.03933609128805103",
            "extra": "mean: 6.504086053600008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23526198233273457,
            "unit": "iter/sec",
            "range": "stddev: 0.02402112303253392",
            "extra": "mean: 4.250580523400015 sec\nrounds: 5"
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
          "id": "a3f7098a8365a7268a5f60a90a341806f6ea4291",
          "message": "CI: Update to Riviera-PRO 2024.10",
          "timestamp": "2025-07-10T18:53:46+02:00",
          "tree_id": "0deae5fbb85a50d40d8ffc85c86c30238cec318b",
          "url": "https://github.com/cocotb/cocotb/commit/a3f7098a8365a7268a5f60a90a341806f6ea4291"
        },
        "date": 1752166791943,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1580591111817815,
            "unit": "iter/sec",
            "range": "stddev: 0.04190661519043496",
            "extra": "mean: 6.326746952599995 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2372492694950987,
            "unit": "iter/sec",
            "range": "stddev: 0.027379409256454178",
            "extra": "mean: 4.214976097199991 sec\nrounds: 5"
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
          "id": "71fa22636a27d28092c4333b0212262bea57cadc",
          "message": "Add a badge for links that point to v1.9 docs (#4800)\n\nAdd badges for links that point to docs of specific cocotb versions,\nadd more such links.",
          "timestamp": "2025-07-10T20:29:23+02:00",
          "tree_id": "3acd60549f306a758d8134db3190056ec4bde43b",
          "url": "https://github.com/cocotb/cocotb/commit/71fa22636a27d28092c4333b0212262bea57cadc"
        },
        "date": 1752172373324,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15671157924536755,
            "unit": "iter/sec",
            "range": "stddev: 0.012231611105997695",
            "extra": "mean: 6.381149400800007 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2368782721257404,
            "unit": "iter/sec",
            "range": "stddev: 0.03559755144637202",
            "extra": "mean: 4.221577568199995 sec\nrounds: 5"
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
          "id": "284f07208ec4b75c5ccababafdee94e9ec45eeff",
          "message": "Remove coverage exclusions as they are now default (#4801)",
          "timestamp": "2025-07-10T15:15:21-06:00",
          "tree_id": "db2e97939f6c68a6ae4339eead7de39122cc9b2a",
          "url": "https://github.com/cocotb/cocotb/commit/284f07208ec4b75c5ccababafdee94e9ec45eeff"
        },
        "date": 1752182326434,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15578999355509113,
            "unit": "iter/sec",
            "range": "stddev: 0.04050242267125869",
            "extra": "mean: 6.418897498999996 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23819797375471144,
            "unit": "iter/sec",
            "range": "stddev: 0.01162880783729366",
            "extra": "mean: 4.198188524599994 sec\nrounds: 5"
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
          "id": "6ede2545988aebdbbc82802f0703a38678167dfe",
          "message": "CI: Use Riviera-PRO 2025.04",
          "timestamp": "2025-07-11T14:59:28+02:00",
          "tree_id": "ed29ee2b2dbbb74b7dc230f02b35e49934ec0893",
          "url": "https://github.com/cocotb/cocotb/commit/6ede2545988aebdbbc82802f0703a38678167dfe"
        },
        "date": 1752238989558,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15625964811524573,
            "unit": "iter/sec",
            "range": "stddev: 0.016703845050370304",
            "extra": "mean: 6.399604837599997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23911390594237295,
            "unit": "iter/sec",
            "range": "stddev: 0.02364885732748899",
            "extra": "mean: 4.182107251600007 sec\nrounds: 5"
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
          "id": "98a6ce5f311b1f449d53e9f57a84e75e32c68785",
          "message": "Support customizing `Clock`'s set action (#4794)",
          "timestamp": "2025-07-11T11:18:01-06:00",
          "tree_id": "6492d2abf6db3909d106584d9ff556dcff7721c4",
          "url": "https://github.com/cocotb/cocotb/commit/98a6ce5f311b1f449d53e9f57a84e75e32c68785"
        },
        "date": 1752254513872,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1561403101927261,
            "unit": "iter/sec",
            "range": "stddev: 0.033040253030394436",
            "extra": "mean: 6.404496050799992 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2347435935579992,
            "unit": "iter/sec",
            "range": "stddev: 0.009471569794410429",
            "extra": "mean: 4.259967161799989 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilberto@hudson-trading.com",
            "name": "Gilberto Abram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a599a4e5e6b0b151aeb5c10b2fc296e7c9d6ab89",
          "message": "separate initialization of handler and loggers (#4775)\n\n\nCo-authored-by: Kaleb Barrett <dev.ktbarrett@gmail.com>",
          "timestamp": "2025-07-11T13:20:53-06:00",
          "tree_id": "4066f8ba00abc3d7e179507a7a72efef4c63f794",
          "url": "https://github.com/cocotb/cocotb/commit/a599a4e5e6b0b151aeb5c10b2fc296e7c9d6ab89"
        },
        "date": 1752261854076,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16223374885617214,
            "unit": "iter/sec",
            "range": "stddev: 0.020764435685787244",
            "extra": "mean: 6.163945584999993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24374804127456004,
            "unit": "iter/sec",
            "range": "stddev: 0.03612715706639557",
            "extra": "mean: 4.102597070200005 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gilberto@hudson-trading.com",
            "name": "Gilberto Abram",
            "username": "gilbertoabram"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "865fb05d947e19f8ab0632c4302e924d3d64f993",
          "message": "verilator.cpp: create trace after top",
          "timestamp": "2025-07-11T14:01:39-06:00",
          "tree_id": "049dde4389c1f241b721fdbb7ec0ffe8ed701e30",
          "url": "https://github.com/cocotb/cocotb/commit/865fb05d947e19f8ab0632c4302e924d3d64f993"
        },
        "date": 1752264321096,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1592233214725305,
            "unit": "iter/sec",
            "range": "stddev: 0.03969092070049608",
            "extra": "mean: 6.2804869962 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24124846793550034,
            "unit": "iter/sec",
            "range": "stddev: 0.02214703695669872",
            "extra": "mean: 4.145104043800012 sec\nrounds: 5"
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
          "id": "c68efccc3601fceea5302d802c072bef9e411028",
          "message": "Update platform support\n\n* Remove macOS versions that are no longer supported in GitHub actions.\n* Remove Ubuntu 20.04 (EOL).\n* Add RHEL 10.",
          "timestamp": "2025-07-12T13:52:17+02:00",
          "tree_id": "1f7ebf84527cd831e655ac3a0142d1dd5e7ab487",
          "url": "https://github.com/cocotb/cocotb/commit/c68efccc3601fceea5302d802c072bef9e411028"
        },
        "date": 1752321348840,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1607891220727322,
            "unit": "iter/sec",
            "range": "stddev: 0.02293479050971081",
            "extra": "mean: 6.219326202600041 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24344213878275747,
            "unit": "iter/sec",
            "range": "stddev: 0.03165846898029144",
            "extra": "mean: 4.107752277400005 sec\nrounds: 5"
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
          "id": "1ba6b231358aa139e863bf53ef27d7288039e30c",
          "message": "Bump version to 2.0.0b1",
          "timestamp": "2025-07-12T14:41:25+02:00",
          "tree_id": "6c5bb089ab5faea1af2a7f7fc502e5aac8729041",
          "url": "https://github.com/cocotb/cocotb/commit/1ba6b231358aa139e863bf53ef27d7288039e30c"
        },
        "date": 1752324771081,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16253478189842827,
            "unit": "iter/sec",
            "range": "stddev: 0.027465367390182044",
            "extra": "mean: 6.152529251400006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24038613126187072,
            "unit": "iter/sec",
            "range": "stddev: 0.04382718424334609",
            "extra": "mean: 4.159973766999997 sec\nrounds: 5"
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
          "id": "d64f1254a97d323bd907a6c0858cd2a8602354f0",
          "message": "Bump to 2.0.0.dev1: Back to development",
          "timestamp": "2025-07-12T14:43:15+02:00",
          "tree_id": "4b1e56c339482039e1323ca2fb686673e9ad8e07",
          "url": "https://github.com/cocotb/cocotb/commit/d64f1254a97d323bd907a6c0858cd2a8602354f0"
        },
        "date": 1752327505871,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16283069042789763,
            "unit": "iter/sec",
            "range": "stddev: 0.03323129800325841",
            "extra": "mean: 6.141348399200001 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24443549428020978,
            "unit": "iter/sec",
            "range": "stddev: 0.01294428607441502",
            "extra": "mean: 4.091058882200002 sec\nrounds: 5"
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
          "id": "fdb3657a447edba26f402487b9c508c372ef72fc",
          "message": "Add FutureWarning for removing support for old Python",
          "timestamp": "2025-07-14T12:07:40-06:00",
          "tree_id": "a1dd2a11027a17775c5b61e31d68d396b765d05d",
          "url": "https://github.com/cocotb/cocotb/commit/fdb3657a447edba26f402487b9c508c372ef72fc"
        },
        "date": 1752516660244,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16358214779963262,
            "unit": "iter/sec",
            "range": "stddev: 0.0417301232286146",
            "extra": "mean: 6.113136509399993 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24718190586107844,
            "unit": "iter/sec",
            "range": "stddev: 0.02741794148644257",
            "extra": "mean: 4.045603566799997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "02a2524f376cca53b05ae9a0a13eea99127e0f79",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.12.2 → v0.12.3](https://github.com/astral-sh/ruff-pre-commit/compare/v0.12.2...v0.12.3)\n- [github.com/pre-commit/mirrors-clang-format: v20.1.7 → v20.1.8](https://github.com/pre-commit/mirrors-clang-format/compare/v20.1.7...v20.1.8)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.06.23 → 2025.07.14](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.06.23...2025.07.14)",
          "timestamp": "2025-07-14T14:29:00-06:00",
          "tree_id": "37089d20538b3db0262fa3e97ea2bd90dcf4cadb",
          "url": "https://github.com/cocotb/cocotb/commit/02a2524f376cca53b05ae9a0a13eea99127e0f79"
        },
        "date": 1752525138474,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1616362694136332,
            "unit": "iter/sec",
            "range": "stddev: 0.04641518548282703",
            "extra": "mean: 6.1867302656 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24426853310436786,
            "unit": "iter/sec",
            "range": "stddev: 0.0067596905934676895",
            "extra": "mean: 4.093855181799995 sec\nrounds: 5"
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
          "id": "066639ec8d800942fa3a057de896dd7ca944fdde",
          "message": "Make headings in Release Notes sticky on top (#4810)",
          "timestamp": "2025-07-17T18:14:49+02:00",
          "tree_id": "8b7bfd0f7bebfa696fa0ca39d33e3cfec739f50b",
          "url": "https://github.com/cocotb/cocotb/commit/066639ec8d800942fa3a057de896dd7ca944fdde"
        },
        "date": 1752769087153,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16043371575763268,
            "unit": "iter/sec",
            "range": "stddev: 0.023371805490801065",
            "extra": "mean: 6.2331037792000075 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2412807634252756,
            "unit": "iter/sec",
            "range": "stddev: 0.05322077542918776",
            "extra": "mean: 4.144549220600004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39400946+CheeksTheGeek@users.noreply.github.com",
            "name": "Chaitanya Sharma",
            "username": "CheeksTheGeek"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "445fb62caf5b3e6b0b40027bdfa7c3185817eca8",
          "message": "add generic type parameter for HierarchyArrayObject children (#4807)",
          "timestamp": "2025-07-18T19:59:34-06:00",
          "tree_id": "47412a540b16726794dd84d740c3a4fb642a4832",
          "url": "https://github.com/cocotb/cocotb/commit/445fb62caf5b3e6b0b40027bdfa7c3185817eca8"
        },
        "date": 1752890583567,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15994199759500838,
            "unit": "iter/sec",
            "range": "stddev: 0.041257641366834394",
            "extra": "mean: 6.252266540600021 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2400006926112774,
            "unit": "iter/sec",
            "range": "stddev: 0.0432960228531736",
            "extra": "mean: 4.166654642200024 sec\nrounds: 5"
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
          "id": "e5ff4566856857f102d298f8570ac92ad7970167",
          "message": "Use action titles in migration guide",
          "timestamp": "2025-07-20T14:00:51+02:00",
          "tree_id": "06d18a5dbdb885b64ab33197aab41c443c867227",
          "url": "https://github.com/cocotb/cocotb/commit/e5ff4566856857f102d298f8570ac92ad7970167"
        },
        "date": 1753013061047,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1620907820517132,
            "unit": "iter/sec",
            "range": "stddev: 0.023238173642806913",
            "extra": "mean: 6.169382289000009 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24358718414175098,
            "unit": "iter/sec",
            "range": "stddev: 0.03808511044751357",
            "extra": "mean: 4.105306293200011 sec\nrounds: 5"
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
          "id": "e9d8200f6f8bd74a4bc8f83d42962c0cbebefe53",
          "message": "Fix typos in Upgrade to 2.0 docs",
          "timestamp": "2025-07-20T10:41:33-06:00",
          "tree_id": "729cabdbbb64b729949d158036b7219bec9d6dea",
          "url": "https://github.com/cocotb/cocotb/commit/e9d8200f6f8bd74a4bc8f83d42962c0cbebefe53"
        },
        "date": 1753029917966,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15873356225488697,
            "unit": "iter/sec",
            "range": "stddev: 0.04387500122347815",
            "extra": "mean: 6.299864917000013 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.22849049147355316,
            "unit": "iter/sec",
            "range": "stddev: 0.3610551696332067",
            "extra": "mean: 4.376549735400022 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "900fc592e45f6fd1fb9330a02e1d306659fe3ead",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.12.3 → v0.12.4](https://github.com/astral-sh/ruff-pre-commit/compare/v0.12.3...v0.12.4)\n- [github.com/pre-commit/mirrors-mypy: v1.16.1 → v1.17.0](https://github.com/pre-commit/mirrors-mypy/compare/v1.16.1...v1.17.0)",
          "timestamp": "2025-07-21T15:12:35-06:00",
          "tree_id": "58494787f2023ebbe9be35cf64bb1a95b2361ade",
          "url": "https://github.com/cocotb/cocotb/commit/900fc592e45f6fd1fb9330a02e1d306659fe3ead"
        },
        "date": 1753132575713,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1632185304523461,
            "unit": "iter/sec",
            "range": "stddev: 0.019084332280770975",
            "extra": "mean: 6.126755321400003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24338104700103447,
            "unit": "iter/sec",
            "range": "stddev: 0.026633736853574452",
            "extra": "mean: 4.108783376199995 sec\nrounds: 5"
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
          "id": "53c9bcdf29c10eab32dbcc696ee07689a9b3fbe1",
          "message": "Add 2.0 upgrade docs for logic and array handle value changes",
          "timestamp": "2025-07-23T09:51:52-06:00",
          "tree_id": "20f275ff8dceff92a84573b5dbab0f99ddefafba",
          "url": "https://github.com/cocotb/cocotb/commit/53c9bcdf29c10eab32dbcc696ee07689a9b3fbe1"
        },
        "date": 1753286131243,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16243011542351085,
            "unit": "iter/sec",
            "range": "stddev: 0.026231332146065153",
            "extra": "mean: 6.156493809 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2431650986529864,
            "unit": "iter/sec",
            "range": "stddev: 0.025493432915990176",
            "extra": "mean: 4.1124322756000025 sec\nrounds: 5"
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
          "id": "e4c3d6c6bdeca456f6659b0e7d13cf8914f84a15",
          "message": "Use Any instead of empty string in py_compat typing\n\nUsing an empty string apparently makes older releases of 3.6 and 3.7\nunhappy.",
          "timestamp": "2025-07-25T21:16:51-06:00",
          "tree_id": "93060748953af0a22d650d0bf7841a72a311d92c",
          "url": "https://github.com/cocotb/cocotb/commit/e4c3d6c6bdeca456f6659b0e7d13cf8914f84a15"
        },
        "date": 1753500012306,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1618949970732556,
            "unit": "iter/sec",
            "range": "stddev: 0.03704808452857796",
            "extra": "mean: 6.176843127199982 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2433783661082988,
            "unit": "iter/sec",
            "range": "stddev: 0.02571479438849113",
            "extra": "mean: 4.108828635800023 sec\nrounds: 5"
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
          "id": "9d9df17caee9ee6990e83ea7b471b0352c8fc30f",
          "message": "Remove dead link to DSim installation instructions (#4827)",
          "timestamp": "2025-07-28T08:44:19+02:00",
          "tree_id": "d84d4e389f3b4886f3ec419d7861a96728e6c320",
          "url": "https://github.com/cocotb/cocotb/commit/9d9df17caee9ee6990e83ea7b471b0352c8fc30f"
        },
        "date": 1753685267344,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16179615079818174,
            "unit": "iter/sec",
            "range": "stddev: 0.022329044919057118",
            "extra": "mean: 6.1806167517999935 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24340603684783094,
            "unit": "iter/sec",
            "range": "stddev: 0.020683493460018614",
            "extra": "mean: 4.1083615383999925 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "a9eb5d929eb2ecf4b22f57f79f74fb0d7e38c94b",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.12.4 → v0.12.5](https://github.com/astral-sh/ruff-pre-commit/compare/v0.12.4...v0.12.5)",
          "timestamp": "2025-07-28T14:51:24-06:00",
          "tree_id": "0cd5e8c6509257fe19ece02a8ee86ff52d027239",
          "url": "https://github.com/cocotb/cocotb/commit/a9eb5d929eb2ecf4b22f57f79f74fb0d7e38c94b"
        },
        "date": 1753736089452,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16186820752687608,
            "unit": "iter/sec",
            "range": "stddev: 0.02194262520670166",
            "extra": "mean: 6.177865408399998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24337775834339934,
            "unit": "iter/sec",
            "range": "stddev: 0.019936440266137483",
            "extra": "mean: 4.108838896400004 sec\nrounds: 5"
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
          "id": "b715b55384bb92e91a338877f4d3c97de72c538a",
          "message": "Improvements around runner (#4826)\n\n* Swap order of _build_command and _test_command for Icarus\n* Support timescale for Xcelium in runner\n* Improve docstrings in runner\n* Point to runner class docs for limitations\n* Raise exception when waves is set in build step for Xcelium\n* Use admonition in simulator runner class docstring\n* Change subtitle to 'Reported Issues for this Simulator'\n* Add Python Runner example command line to Simulator Support\n* Add Python Runner reference to doc of SIM variable\n  Leave SIM a make var for now, even though it is also read as an envvar.",
          "timestamp": "2025-07-28T23:35:11+02:00",
          "tree_id": "6c17a4063202a5d8d7bce4ef5377569365dca242",
          "url": "https://github.com/cocotb/cocotb/commit/b715b55384bb92e91a338877f4d3c97de72c538a"
        },
        "date": 1753738705250,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16190522130820587,
            "unit": "iter/sec",
            "range": "stddev: 0.044798556115941426",
            "extra": "mean: 6.1764530626000065 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24283281130778744,
            "unit": "iter/sec",
            "range": "stddev: 0.03528998231247409",
            "extra": "mean: 4.118059641999997 sec\nrounds: 5"
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
          "id": "1d09cc1efc85cec345b4c0a6e392b2f4e14b2dbc",
          "message": "Fix color of generic admonitions to cocotb-blue (#4833)",
          "timestamp": "2025-07-29T18:51:10+02:00",
          "tree_id": "b5357b1d533a33b6410390e5472d18a5ff97e40b",
          "url": "https://github.com/cocotb/cocotb/commit/1d09cc1efc85cec345b4c0a6e392b2f4e14b2dbc"
        },
        "date": 1753808077876,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16127790235087944,
            "unit": "iter/sec",
            "range": "stddev: 0.009836276664105326",
            "extra": "mean: 6.200477470400005 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23964682310946822,
            "unit": "iter/sec",
            "range": "stddev: 0.040682865372755755",
            "extra": "mean: 4.172807246200006 sec\nrounds: 5"
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
          "id": "7928b050bbc6b16d435f0eb0257123bed613088d",
          "message": "Use OIDC instead of API key for PyPi release uploads\n\nWe have configured Trusted Publishing in PyPi, which is their term for\nOpen ID Connect (OIDC), where GitHub and PyPi are configured to trust\neach other and share short-lived keys to perform the release upload\nthrough the PyPi API.\n\nRemove the hardcoded API key to use OIDC instead.",
          "timestamp": "2025-07-31T18:07:17+02:00",
          "tree_id": "46df19a8b4f2084e4dc1f33b83e60ccc80653779",
          "url": "https://github.com/cocotb/cocotb/commit/7928b050bbc6b16d435f0eb0257123bed613088d"
        },
        "date": 1753978241470,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1621994363676898,
            "unit": "iter/sec",
            "range": "stddev: 0.03366221116469576",
            "extra": "mean: 6.165249537199998 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24317579041559917,
            "unit": "iter/sec",
            "range": "stddev: 0.024354334679674114",
            "extra": "mean: 4.1122514634000025 sec\nrounds: 5"
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
          "id": "67aa159ae9f1acf4a727a05a82a5ff0a675b0d79",
          "message": "Properly escape dumpfile path for Icarus runner",
          "timestamp": "2025-08-01T09:35:47-06:00",
          "tree_id": "5154e886458f2e535a8f33f5acf41a7dff68130a",
          "url": "https://github.com/cocotb/cocotb/commit/67aa159ae9f1acf4a727a05a82a5ff0a675b0d79"
        },
        "date": 1754062758619,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16279665821282738,
            "unit": "iter/sec",
            "range": "stddev: 0.013103130435158998",
            "extra": "mean: 6.142632231999994 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.241217674505132,
            "unit": "iter/sec",
            "range": "stddev: 0.045310864566860426",
            "extra": "mean: 4.1456332006000025 sec\nrounds: 5"
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
          "id": "89473a99d0b041609687c29b19fdc3730323ab1f",
          "message": "CI: Update to VCS X-2025.06",
          "timestamp": "2025-08-02T16:27:47+02:00",
          "tree_id": "c7fe22bd51a79f3bc1cf77972bf5506f411c930d",
          "url": "https://github.com/cocotb/cocotb/commit/89473a99d0b041609687c29b19fdc3730323ab1f"
        },
        "date": 1754145078921,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16160645395630258,
            "unit": "iter/sec",
            "range": "stddev: 0.017644765724759603",
            "extra": "mean: 6.187871681600006 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24219800788961926,
            "unit": "iter/sec",
            "range": "stddev: 0.04116905997053382",
            "extra": "mean: 4.128853117799986 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "be1e0ddb48984a05911fcb0bbbfc9f7d5b20ec04",
          "message": "Add remaining type checking ruff fixes",
          "timestamp": "2025-08-02T08:32:01-06:00",
          "tree_id": "3bd7d974a8ec35b39dc7f1971cf207cc62186570",
          "url": "https://github.com/cocotb/cocotb/commit/be1e0ddb48984a05911fcb0bbbfc9f7d5b20ec04"
        },
        "date": 1754145324485,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16274551888253438,
            "unit": "iter/sec",
            "range": "stddev: 0.05560167923724645",
            "extra": "mean: 6.1445624239999805 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2434506528271375,
            "unit": "iter/sec",
            "range": "stddev: 0.01642038533647492",
            "extra": "mean: 4.107608619600012 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "7da116b75fdaea44cbd1e29ba4805f02335493d0",
          "message": "Fall back on set_trace when no exception available",
          "timestamp": "2025-08-03T16:01:56-05:00",
          "tree_id": "fa7b2c939254b12689280249a1b101cb6c7f4da3",
          "url": "https://github.com/cocotb/cocotb/commit/7da116b75fdaea44cbd1e29ba4805f02335493d0"
        },
        "date": 1754255124317,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16194271039321964,
            "unit": "iter/sec",
            "range": "stddev: 0.023441828024339445",
            "extra": "mean: 6.1750232385999935 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2432526008315581,
            "unit": "iter/sec",
            "range": "stddev: 0.006743871313799082",
            "extra": "mean: 4.110952962400006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "ca031ed38610440bd9af8f1ec4e1712366de10e7",
          "message": "Move PYTHON_BIN setting to correct location",
          "timestamp": "2025-08-03T16:02:42-05:00",
          "tree_id": "b3a9ee3c44f45858267dd0a267b359d3070bb005",
          "url": "https://github.com/cocotb/cocotb/commit/ca031ed38610440bd9af8f1ec4e1712366de10e7"
        },
        "date": 1754255321372,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.16315056373473505,
            "unit": "iter/sec",
            "range": "stddev: 0.015639116655185435",
            "extra": "mean: 6.129307659800003 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.24398509677154262,
            "unit": "iter/sec",
            "range": "stddev: 0.019966773862674588",
            "extra": "mean: 4.098610994000007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "8dddf1a104813917d5cbf9f0dd95742413053007",
          "message": "Add docs and features to warn about changing indexes in 2.0",
          "timestamp": "2025-08-03T16:06:07-05:00",
          "tree_id": "3cc6d64c06460b995a3c025c42d284513ea0342a",
          "url": "https://github.com/cocotb/cocotb/commit/8dddf1a104813917d5cbf9f0dd95742413053007"
        },
        "date": 1754255533086,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1578419035033778,
            "unit": "iter/sec",
            "range": "stddev: 0.045525293192034716",
            "extra": "mean: 6.335453246600008 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23461054738028916,
            "unit": "iter/sec",
            "range": "stddev: 0.03066261105340525",
            "extra": "mean: 4.262382962599981 sec\nrounds: 5"
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
          "id": "16ce13145bcdc3f3abd96b1044042593919641b0",
          "message": "Mention Verilator uses COCOTB_TRUST_INERTIAL_WRITES=1 by default (#4851)",
          "timestamp": "2025-08-04T22:23:28+02:00",
          "tree_id": "662134234a8f8c458aaa4a7f2f5c14769aab73aa",
          "url": "https://github.com/cocotb/cocotb/commit/16ce13145bcdc3f3abd96b1044042593919641b0"
        },
        "date": 1754339227120,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1590016043004292,
            "unit": "iter/sec",
            "range": "stddev: 0.023653488860533464",
            "extra": "mean: 6.289244717999997 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23396067648637683,
            "unit": "iter/sec",
            "range": "stddev: 0.059823629772224364",
            "extra": "mean: 4.274222553199996 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "239cad406dc73aba6f1c1a8223eb8a8daf858a1d",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/astral-sh/ruff-pre-commit: v0.12.5 → v0.12.7](https://github.com/astral-sh/ruff-pre-commit/compare/v0.12.5...v0.12.7)\n- [github.com/henryiii/validate-pyproject-schema-store: 2025.07.14 → 2025.07.28](https://github.com/henryiii/validate-pyproject-schema-store/compare/2025.07.14...2025.07.28)\n- [github.com/pre-commit/mirrors-mypy: v1.17.0 → v1.17.1](https://github.com/pre-commit/mirrors-mypy/compare/v1.17.0...v1.17.1)",
          "timestamp": "2025-08-04T16:11:01-05:00",
          "tree_id": "d9ef47013f957a42ec64ee661f192a814f0403ba",
          "url": "https://github.com/cocotb/cocotb/commit/239cad406dc73aba6f1c1a8223eb8a8daf858a1d"
        },
        "date": 1754342058439,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15943340697660582,
            "unit": "iter/sec",
            "range": "stddev: 0.02227105066791193",
            "extra": "mean: 6.272211194400012 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2368506817248229,
            "unit": "iter/sec",
            "range": "stddev: 0.04370972174915514",
            "extra": "mean: 4.222069333800005 sec\nrounds: 5"
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
          "id": "4f4b1268837589da20ba8c7495aa604b550cc89b",
          "message": "Scheduler: Protect from scheduling Tasks that have finished executing\n\nIf a finished/cancelled Task is re-scheduled, we get an error running the coroutine\nand then another error in the scheduler:\n\nRuntimeError: cannot reuse already awaited coroutine\n\nDuring handling of the above exception, another exception occurred:\n\nTraceback (most recent call last):\n  File \"../src/cocotb/_scheduler.py\", line 160, in _sim_react\n    self._event_loop()\n  File \"../src/cocotb/_scheduler.py\", line 220, in _event_loop\n    self._resume_task(task, exc)\n  File \"../src/cocotb/_scheduler.py\", line 410, in _resume_task\n    trigger = task._advance(exc)\n  File \"../src/cocotb/task.py\", line 259, in _advance\n    self._set_outcome(Error(remove_traceback_frames(e, [\"_advance\"])))\n  File \"../src/cocotb/task.py\", line 207, in _set_outcome\n    callback(self)\n  File \"../src/cocotb/_test.py\", line 109, in _task_done_callback\n    self.tasks.remove(task)\nValueError: list.remove(x): x not in list",
          "timestamp": "2025-08-06T09:48:46-07:00",
          "tree_id": "ef4d6ea284200b52bdfd98f6a26d6188abd4cdfa",
          "url": "https://github.com/cocotb/cocotb/commit/4f4b1268837589da20ba8c7495aa604b550cc89b"
        },
        "date": 1754499135888,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15544675515836298,
            "unit": "iter/sec",
            "range": "stddev: 0.05713195777877187",
            "extra": "mean: 6.433070918600004 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2331438978437134,
            "unit": "iter/sec",
            "range": "stddev: 0.03532723299577061",
            "extra": "mean: 4.28919654020001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "863938fe3e6b7608bca7243332e4bba150694b6a",
          "message": "Improve handle __setattr__ error message",
          "timestamp": "2025-08-07T14:09:43-05:00",
          "tree_id": "68bdd4b583200dfccb4b1cfc7d54b2a1e59f0425",
          "url": "https://github.com/cocotb/cocotb/commit/863938fe3e6b7608bca7243332e4bba150694b6a"
        },
        "date": 1754594013190,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1598508987902577,
            "unit": "iter/sec",
            "range": "stddev: 0.04010555492084068",
            "extra": "mean: 6.255829698600019 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23645443347917952,
            "unit": "iter/sec",
            "range": "stddev: 0.02427583633422176",
            "extra": "mean: 4.229144640200002 sec\nrounds: 5"
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
          "id": "2fca59b00549f7a3757e70a70d42469769ea1bb2",
          "message": "docs: Clarify test passed/failed/errored outcomes (#4857)",
          "timestamp": "2025-08-08T08:04:33-07:00",
          "tree_id": "30ab0b0fc88303fb829a9b12380fd9264395d2d5",
          "url": "https://github.com/cocotb/cocotb/commit/2fca59b00549f7a3757e70a70d42469769ea1bb2"
        },
        "date": 1754665671828,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1594883450116639,
            "unit": "iter/sec",
            "range": "stddev: 0.04972460409130527",
            "extra": "mean: 6.270050641799981 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.2365295597003568,
            "unit": "iter/sec",
            "range": "stddev: 0.037568595582709925",
            "extra": "mean: 4.2278013846000135 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "24e8837026aa5b0a9b0f9deb272edff2478c69b5",
          "message": "Comment endif pragmas",
          "timestamp": "2025-08-08T14:22:32-05:00",
          "tree_id": "ac51bd20db7f1547db3d1c738350ba86503046d7",
          "url": "https://github.com/cocotb/cocotb/commit/24e8837026aa5b0a9b0f9deb272edff2478c69b5"
        },
        "date": 1754681150891,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.15883510480518284,
            "unit": "iter/sec",
            "range": "stddev: 0.0636815999299306",
            "extra": "mean: 6.295837442400011 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23622527305186486,
            "unit": "iter/sec",
            "range": "stddev: 0.05931029315257149",
            "extra": "mean: 4.233247302799998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ktbarrett@hudson-trading.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "committer": {
            "email": "dev.ktbarrett@gmail.com",
            "name": "Kaleb Barrett",
            "username": "ktbarrett"
          },
          "distinct": true,
          "id": "3fc728a78cf252b708f4283bdd479053094a8613",
          "message": "Add Task-local variables",
          "timestamp": "2025-08-08T16:13:45-05:00",
          "tree_id": "289d2004e9db3c6304ec1ed4abe483f2f153c748",
          "url": "https://github.com/cocotb/cocotb/commit/3fc728a78cf252b708f4283bdd479053094a8613"
        },
        "date": 1754687835298,
        "tool": "pytest",
        "benches": [
          {
            "name": "::test_matrix_multiplier_icarus",
            "value": 0.1594065571626817,
            "unit": "iter/sec",
            "range": "stddev: 0.019964308002571964",
            "extra": "mean: 6.2732676610000055 sec\nrounds: 5"
          },
          {
            "name": "::test_matrix_multiplier_nvc",
            "value": 0.23648642475394202,
            "unit": "iter/sec",
            "range": "stddev: 0.03003846698996353",
            "extra": "mean: 4.228572532400006 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}