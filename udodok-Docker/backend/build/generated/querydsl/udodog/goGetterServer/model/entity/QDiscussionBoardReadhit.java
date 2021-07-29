package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDiscussionBoardReadhit is a Querydsl query type for DiscussionBoardReadhit
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QDiscussionBoardReadhit extends EntityPathBase<DiscussionBoardReadhit> {

    private static final long serialVersionUID = -268663745L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDiscussionBoardReadhit discussionBoardReadhit = new QDiscussionBoardReadhit("discussionBoardReadhit");

    public final NumberPath<Integer> count = createNumber("count", Integer.class);

    public final QDiscussionBoard discussionBoard;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public QDiscussionBoardReadhit(String variable) {
        this(DiscussionBoardReadhit.class, forVariable(variable), INITS);
    }

    public QDiscussionBoardReadhit(Path<? extends DiscussionBoardReadhit> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDiscussionBoardReadhit(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDiscussionBoardReadhit(PathMetadata metadata, PathInits inits) {
        this(DiscussionBoardReadhit.class, metadata, inits);
    }

    public QDiscussionBoardReadhit(Class<? extends DiscussionBoardReadhit> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.discussionBoard = inits.isInitialized("discussionBoard") ? new QDiscussionBoard(forProperty("discussionBoard"), inits.get("discussionBoard")) : null;
    }

}

