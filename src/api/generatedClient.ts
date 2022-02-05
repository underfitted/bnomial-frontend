/**
 * Bnomial Service
 * 1.0.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type Question = {
    id: string;
    title: string;
    content: string;
    choices: {
        [key: string]: string;
    };
};
/**
 * Return a list of questions from the public database of open questions.
 */
export function getSampleQuestions(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(
        oazapfts.fetchJson<
            | {
                  status: 200;
                  data: Question[];
              }
            | {
                  status: 500;
                  data: string;
              }
        >("/public/sample", {
            ...opts,
        })
    );
}
/**
 * Registers a new session with the service.
 */
export function createSession(
    body: {
        name?: string;
        answers?: object;
    },
    opts?: Oazapfts.RequestOpts
) {
    return oazapfts.ok(
        oazapfts.fetchText(
            "/public/session",
            oazapfts.json({
                ...opts,
                method: "POST",
                body,
            })
        )
    );
}
/**
 * Return a question from the public database of questions.
 */
export function getQuestion(questionId: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(
        oazapfts.fetchJson<
            | {
                  status: 200;
                  data: Question;
              }
            | {
                  status: 404;
              }
            | {
                  status: 500;
                  data: string;
              }
        >(`/questions/${questionId}`, {
            ...opts,
        })
    );
}
/**
 * Return a random question from the public database of open questions.
 */
export function getRandomQuestion(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(
        oazapfts.fetchJson<
            | {
                  status: 200;
                  data: Question;
              }
            | {
                  status: 404;
              }
            | {
                  status: 500;
                  data: string;
              }
        >("/public/question/", {
            ...opts,
        })
    );
}
/**
 * Submit the answer to the specified question
 */
export function answerQuestion(questionId: string, body: string[], opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(
        oazapfts.fetchText(
            `/public/question/${questionId}`,
            oazapfts.json({
                ...opts,
                method: "POST",
                body,
            })
        )
    );
}
/**
 * Return the public leaderboard.
 */
export function getLeaderboard(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(
        oazapfts.fetchJson<
            | {
                  status: 200;
                  data: {
                      leaderboard?: {
                          id?: string;
                          name?: string;
                          score?: number;
                      }[];
                      rank?: number;
                  }[];
              }
            | {
                  status: 500;
                  data: string;
              }
        >("/public/leaderboard/", {
            ...opts,
        })
    );
}
/**
 * Return the list of of practice questions from the public database
 */
export function getPracticeQuestions(opts?: Oazapfts.RequestOpts) {
    return oazapfts.ok(
        oazapfts.fetchJson<
            | {
                  status: 200;
                  data: (Question & {
                      explanation: string;
                      answer: string[];
                  })[];
              }
            | {
                  status: 404;
              }
            | {
                  status: 500;
                  data: string;
              }
        >("/practice/questions/", {
            ...opts,
        })
    );
}
